function getFarenheits(result){
  var temp = [];
  for (var i = 0; i < result.hourly_forecast.length; i++){
    temp.push(result.hourly_forecast[i].temp.english);
  }
  return temp;
  
}

function getHours(result){
  var hours = [];
  for (var i = 0; i < result.hourly_forecast.length; i++){
    hours.push(result.hourly_forecast[i].FCTTIME.hour);
  }
  return hours;
}

function generateDataSet(labels, data) {
  var finalData = {};
  var dataSets = [{
        label: "Hourly Weather for New York",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)"}]
  finalData.labels = labels
  dataSets[0].data = data 
  finalData.datasets = dataSets
  return finalData
}

function makeAjaxRequest(endpoint, success) {
   $.ajax({
     url: endpoint,
     dataType: 'jsonp',
     success: success
   });
}
