// conect to database
var MongoClient = require('mongodb').MongoClient
//mongodb://esther:esther@7@ds233452.mlab.com:33452/crud
//mongodb://localhost:27017/
var url = "mongodb://localhost:27017/"
MongoClient.connect(url,{useNewUrlParser:true}, (err, client) => {
    if (err) throw err
    var db = client.db('dashboard')    
})

