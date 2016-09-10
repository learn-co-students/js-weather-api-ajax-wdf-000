function getFarenheits(result){
  // Your code goes here
  return result.hourly_forecast.map(function (element, index) {
    return element.temp.english
  });
}

function getHours(result){
  // Your code goes here
  return result.hourly_forecast.map(function (element, index) {
    return element.FCTTIME.hour
  });
}

function generateDataSet(labels, data) {
  // Your code goes here
  var maddata = {
     label                : "Hourly Weather for New York",
     fillColor            : "rgba(220,220,220,0.2)",
     strokeColor          : "rgba(220,220,220,1)",
     pointColor           : "rgba(220,220,220,1)",
     pointStrokeColor     : "#fff",
     pointHighlightFill   : "#fff",
     pointHighlightStroke : "rgba(220,220,220,1)",
     data                 : ["data1", "data2"]
   };
  var tmp = {};
  tmp['labels'] = labels;
  tmp['datasets'] = [];
  tmp['datasets'].push(maddata);
  tmp['datasets'][0]['data'] = data;
  return tmp;

}

function makeAjaxRequest(endpoint, success) {
  // Your code goes here
  $.ajax({
    url: endpoint,
    dataType: 'jsonp',
    success: success
    });
}
