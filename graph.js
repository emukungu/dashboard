function retrieve(){
  var chartData
  $.ajax(function(){
    url: "http://localhost:3000/"
    type:"GET",
    success: function(data){
      var chartProperties = {
        "caption": "Variation of Petrol and Diesel price in Bangalore",
        "xAxisName": "Schools",
        "yAxisName": "Tuition"
      };
      var categoriesArray = [{
        "category" : data["categories"]
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
      // var template = Handlebars.compile($("#tabular-template").html());
      // $("#chart-location").html(template(data));
      // chartData = data
    }
  })
}
