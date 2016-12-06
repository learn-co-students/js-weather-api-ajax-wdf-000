  function getFahrenheits(result){
  // Your code goes here
  var array = $.map(result.hourly_forecast, function(element, index) {
    return element.temp.english;
  });
  return array;
}

function getHours(result){
  // Your code goes here
  var array = $.map(result.hourly_forecast, function(element, index) {
    return element.FCTTIME.hour;
  });
  return array;
}

function generateDataSet(labels, data) {
  // Your code goes here
  
  var lineData = {
    labels: labels,
    datasets: [
      {
        label: 'Hourly Weather for New York',
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
  return lineData;
}

function makeAjaxRequest(endpoint, success) {
  // Your code goes here
  $.ajax({
    url: endpoint,
    dataType: "jsonp",
    success: success
  })
}

