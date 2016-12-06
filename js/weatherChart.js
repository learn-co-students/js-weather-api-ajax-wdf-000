function getFahrenheits(result){
  // Your code goes here
  return result.hourly_forecast.map(i => i.temp.english)
}

function getHours(result){
 return result.hourly_forecast.map(i => i.FCTTIME.hour)
  // Your code goes here
}

function generateDataSet(labels, data) {
  var data = {
    labels: labels,
    datasets: [{
      label: "Hourly Weather for New York",
      fillColor: "rgba(220,220,220,0.2)",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: data
    }]
  };
return data;
  // Your code goes here
}

function makeAjaxRequest(endpoint, success) {
  // Your code goes here
  $.ajax({url: endpoint, dataType: 'jsonp', success: success});
}
