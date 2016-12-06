
function getFahrenheits(result){
  // test:  console.log(result.hourly_forecast[0].temp.english);
  ///result.hourly_forecast : this is an array of weather objects for each hour
  return $.map(result.hourly_forecast, function(hourly, index){
    // return parseInt(hourly.temp.english);
    /// You can't use parseInt if you want your tests to pass.
    ///I mean, it makes no sense what-so-ever in Javascript to make sure that your numbers are numbers...right?right?
    return hourly.temp.english;
  });

}

function getHours(result){
  // test:  console.log(result.hourly_forecast[0]["FCTTIME"].hour);
  return $.map(result.hourly_forecast, function(hourly, index){
    // return parseInt(hourly["FCTTIME"].hour);
    return hourly["FCTTIME"].hour;  ///the spec wants back an array of strings, so don't return numbers
  });
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
            data: data,
        }
    ]
  };
}


function makeAjaxRequest(endpoint, success) {
  $.ajax({
    url: endpoint,
    // type: 'GET',  /// can't specify the request type if you want to pass the test;
    dataType: 'jsonp',
    success: success
  });
}


// canvas element id is #NYCWeatherChart
