function getFahrenheits(result){
  var hourly_forecast = result.hourly_forecast
  return $.map(hourly_forecast, function(wheather){
    return wheather.temp.english
  })
}

function getHours(result){
  var hourly_forecast = result.hourly_forecast
  return $.map(hourly_forecast, function(wheather){
    return wheather.FCTTIME.hour
  })
}

function generateDataSet(labels, data) {

  var dataObj = {};
  dataObj.labels = labels;
  dataObj.datasets = [{
    label: "Hourly Weather for New York",
    fillColor: "rgba(220,220,220,0.2)",
    strokeColor: "rgba(220,220,220,1)",
    pointColor: "rgba(220,220,220,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(220,220,220,1)",
    data: data
  }]
  return dataObj
}

function makeAjaxRequest(endpoint, success) {
  return $.ajax({
   url: endpoint,
   dataType: 'jsonp',
   success: success
 });
}
