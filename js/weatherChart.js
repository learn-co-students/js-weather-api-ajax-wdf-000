function getFarenheits(result){
  var tmp = [];
  for (i = 0; i < result.hourly_forecast.length; i++)
    tmp.push(result.hourly_forecast[i].temp.english)
  return tmp

}

function getHours(result){
  var tmp = [];
  for (i = 0; i < result.hourly_forecast.length; i++)
    tmp.push(result.hourly_forecast[i].FCTTIME.hour);
  return tmp
}

function generateDataSet(labels, data) {
  return {
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
}

function makeAjaxRequest(endpoint, success) {
  
  $.ajax({
    url: endpoint,
    dataType: 'jsonp',
    success: success
  });
}
