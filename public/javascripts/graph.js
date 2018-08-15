function ajaxRequest(){
  var chartData;

  $.ajax({
    url: "http://localhost:3000/",
    type:"GET",
    success: function(data){
      var chartProperties = {
        "caption": "Number of Schools",
        "xAxisName": "Schools",
        "yAxisName": "Tuition"
      };
      var categoriesArray = [{
        "category" : data[0]["tuition"]
      }];

      var lineChart = new FusionCharts({
        type: 'msline',
        renderAt: 'chart-location',
        width: '100Ω',
        height: '600',
        dataFormat: 'json',
        dataSource: {
          chart: chartProperties,
          categories : categoriesArray,
          dataset : data["dataset"]

        }
      });
      lineChart.render()
      console.log("Good to go!")
      // chartData = data
    }
  })
}
