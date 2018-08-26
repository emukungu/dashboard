//BUSINESS LOGIC
function ajax_request(){
  //use ajax to get data from server
  var response;
  $.ajax({
    url: 'http://localhost:3000/',
    contentType: "application/json; charset=utf-8",
    dataType:"json",
    success: function(data){
      var res_schools = []
      var res_tuition = []
      var res_numberOfStudents = []
      var res_date = []
      for(var i = 0; i<11; i++){
        res_schools.push(data[i].Name)
        res_tuition.push(data[i].Boarding_fee_for_S3)
        res_numberOfStudents.push(parseInt(data[i].Number_of_students))
        res_date.push(Date.parse(data[i].Date_school_enrolled))
      }
      console.log(res_date)
      //Level of tuition fees across partner schools; horizontal bar graph
      var ctx = $("#schoolsvstuition");
      var myChart = new Chart(ctx, {
          type: 'horizontalBar',
          data: {
              labels: res_schools,
              datasets: [{
                  label: 'Level of Tuition fees',
                  data:  res_tuition,
                  borderWidth: 1
              }]
          },
          options: {
            title: {
              display: true,
              text: 'Level of tuition fees across partner schools'
            },
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero:true
                      }
                  }]
              }
          }
      });

      //Size of school based on student numbers across partner schools; stacked bar graph
      var svs = $("#schoolvsstudents");
      var myChart2 = new Chart(svs, {
          type: 'bar',
          data: {
              labels: res_schools,
              datasets: [{
                  label: 'Number of students',
                  data: res_numberOfStudents,
                  borderWidth: 1
              }]
          },
          options: {
            title: {
              display: true,
              text: 'Size of school based on student numbers across partner schools'
            },
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero:true
                      }
                  }]
              }
          }
      });
      //Number of schools enrolled over time with the projection for the next 12 months
      var svd = $("#schoolvsdateEnrolled");
      var myChart3 = new Chart(svd, {
          type: 'line',
          data: {
              labels: res_schools,
              datasets: [{
                  label: 'Date enrolled',
                  data: res_date,
                  borderWidth: 1
              }]
          },
          options: {
            title: {
              display: true,
              text: 'Number of schools enrolled over time with the projection for the next 12 months'
            },
              scales: {
                  yAxes: [{
                      type: 'time',
                      time: {
                          displayFormats: {
                            quarter: 'MMM YYYY'
                          }
                      }
                  }]
              }
          }
      });

          },
    error: function(xhr, desc, err) {
      console.log(xhr + "\n" + err)},
    type: "GET"
  })
}


//USER LOGIC
$(document). ready(
  function(){
    ajax_request()
  }
)
