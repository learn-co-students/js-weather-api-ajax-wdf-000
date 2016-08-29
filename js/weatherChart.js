function getFarenheits(result){
  fahrenheits = result.hourly_forecast.map(function(item) {
    return item.temp.english;
  });
  return fahrenheits;
}

function getHours(result){
  hours = result.hourly_forecast.map(function(item) {
    return item.FCTTIME.hour;
  });
  return hours;
}

function generateDataSet(labels, data) {
  result = {}
  result['labels'] = labels;
  result['datasets'] = [{
    label: "Hourly Weather for New York",
    fillColor: "rgba(220,220,220,0.2)",
    strokeColor: "rgba(220,220,220,1)",
    pointColor: "rgba(220,220,220,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(220,220,220,1)",
    data: ["data1", "data2"]
  }];
  result['datasets'][0]['data'] = data;
  return result;
}

function makeAjaxRequest(endpoint, success) {
  $.ajax({
  url: endpoint,
  dataType: 'jsonp',
  success: success
});
}
