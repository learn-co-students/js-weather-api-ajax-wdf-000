function getFahrenheits(result){
  return result.hourly_forecast.map(obj => obj.temp.english)
}

function getHours(result){
  return result.hourly_forecast.map(obj => obj.FCTTIME.hour)
}

function generateDataSet(labels, data) {
  var format = {labels: labels, datasets: [{label: 'Hourly Weather for New York',
    fillColor: 'rgba(220,220,220,0.2)',
    strokeColor: 'rgba(220,220,220,1)',
    pointColor: 'rgba(220,220,220,1)',
    pointStrokeColor: '#fff',
    pointHighlightFill: '#fff',
    pointHighlightStroke: 'rgba(220,220,220,1)',
    data: data}]};
  return format;
}

function makeAjaxRequest(endpoint, success) {
  $.ajax({
    url: endpoint,
    dataType: 'jsonp',
    success: success});
}
