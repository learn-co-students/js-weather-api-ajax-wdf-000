function getFahrenheits(result){
  var far = [];
  var forcast = result.hourly_forecast;
  for(var i = 0; i < forcast.length; i++){
    far.push(forcast[i].temp["english"]);
  }
  return far;
}

function getHours(result){
  var hours = [];
  var forcast = result.hourly_forecast;
  for(var i = 0; i < forcast.length; i++){
    hours.push(forcast[i].FCTTIME["hour"]);
  }
  return hours;
}

function generateDataSet(labels, data) {
  var d = {
    labels: labels,
    datasets:[
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
  return d;
}

function makeAjaxRequest(endpoint, success) {
   $.ajax({
   url: endpoint,
   datatype: 'jsonp',
   success: success
    });

}
