//BUSINESS LOGIC
function getData(data){
  var res_schools = []
  var res_tuition = []
  var res_numberOfStudents = []
  var res_date = []
  var res_location = []
  for(var i = 0; i<11; i++){
    res_schools.push(data[i].Name)
    res_tuition.push(data[i].Boarding_fee_for_S3)
    res_numberOfStudents.push(parseInt(data[i].Number_of_students))
    res_date.push(Date.parse(data[i].Date_school_enrolled))
    res_location.push(data[i].Location)
  }
  var dataset = [{
    "schools": res_schools,
    "tuition":res_tuition
  },
  {
    "schools": res_schools,
    "students": res_numberOfStudents,
    location: res_location
  }
]
  return dataset
}
// API
//connect to dd using node drive
var MongoClient = require("mongodb").MongoClient
var url = "mongodb://localhost:27017/"

//read from db and return values using api
var express = require("express")
var app = express()
//connect to DATABASE
MongoClient.connect(url,{useNewUrlParser:true}, function(err, db){
  if(err) throw err
  var dbOutput = db.db("dashboard")
  app.get('/', function(req, res){
    if (err) throw err
    dbOutput.collection("sama").find({}).limit(15).toArray(function(err, result){
      if(err) throw err;
      // console.log(result)
      // res.send(result)
      res.send(getData(result))
      })
  })
})
app.use('./graph', express.static('graph'));

app.get('/chart', function(req, res){
  res.render("chart")
})
var server = app.listen(3000, function(){
  console.log("Server is running!")
})
// var result = db.collection("partnerSchools")
//Express is web framework; plot them on web
