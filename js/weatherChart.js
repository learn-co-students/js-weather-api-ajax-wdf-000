function getFahrenheits(result){
  // Your code goes here
  var array = $.map(result.hourly_forecast, function(element) {
    return element.temp.english
  })
  return array
}

function getHours(result){
  // Your code goes here
  // var hours =

  return result.hourly_forecast.map(function(element) {
    return element.FCTTIME.hour
  })

}

function generateDataSet(labels, data) {
  // Your code goes here
  var data = {
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
  }
  return data
}



function makeAjaxRequest(endpoint, success) {
  // Your code goes here
  $.ajax({
    url : endpoint,
    dataType : "jsonp",
    success: success
    //
    // function(data) {
    //   debugger
    //   success()
    // }
  })
}
