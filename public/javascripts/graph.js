function ajaxRequest(){
  var chartData;

  $.ajax({
    url: "http://localhost:3000/",
    type:"GET",
    success: function(data){
      
      console.log("Good to go!")
      // chartData = data
    }
  })
}
