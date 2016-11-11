function getFahrenheits(result){
  // Your code goes here
  return result.hourly_forecast.map(function(forecast, index) {
    var temp = forecast.temp;
    return temp.english;
  });
}

function getHours(result){
  // Your code goes here
  return result.hourly_forecast.map(function(forecast, index) {
    var time = forecast.FCTTIME;
    return time.hour;
  });
}

function generateDataSet(labels, data) {
  // Your code goes here
  var newData = {
    labels: labels,
    datasets: [
      {
        label: "Hourly Weather for New York",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: data
      }
    ]
  };
  return newData;
}

function makeAjaxRequest(endpoint, success) {
  // Your code goes here
  $.ajax({
    url: endpoint,
    dataType: 'jsonp',
    success: success
  });
}
