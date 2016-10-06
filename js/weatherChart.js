
function getFahrenheits(result){
  // test:  console.log(result.hourly_forecast[0].temp.english);
  ///result.hourly_forecast : this is an array of weather objects for each hour
  return $.map(result.hourly_forecast, function(hourly, index){
    return parseInt(hourly.temp.english);
  });

}

function getHours(result){
  // test:  console.log(result.hourly_forecast[0]["FCTTIME"].hour);
  return $.map(result.hourly_forecast, function(hourly, index){
    return parseInt(hourly["FCTTIME"].hour);
  });
}

function generateDataSet(labels, data) {
  return {
   labels: labels,
    datasets: [
        {
            label: "NYC Hourly Temperature for today",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: data,
            spanGaps: false,
        }
    ]
  };
}

function makeAjaxRequest(endpoint, success) {
  $.ajax({
    url: endpoint,
    type: 'GET',
    dataType: 'jsonp',
    success: success
  });
}


// canvas element id is #NYCWeatherChart
