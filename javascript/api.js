const apiKey = process.env.API_KEY;

// Ensure all the page contents are loaded
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("input-box").addEventListener('submit', function (e) {
    e.preventDefault();
  
    const userInput = document.getElementById("weather_location").value;
    
    if(userInput === null) {
      alert("Error: A valid city name must be entered.");
    }
    else {
      makeApiCall(userInput);
    }
  })
  
  function makeApiCall(userInput) {
    // The free api only allows forecasting up to 3 days so only use that api url
    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${userInput}&days=3&aqi=yes&alerts=no`;
  
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        createCurrentForecastHtml(data.location, data.current)
        createThreeDayForecaseHtml(data.location, data.forecast)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
});

function createCurrentForecastHtml(location, currentForecast) {
  // Location variables parsing from the api request
  var country = location.country;
  var city = location.name;
  var date_time = location.localtime;

  // Weather data variables for the weather today
  var conditions = currentForecast.condition.text;
  var weather_icon = currentForecast.condition.icon
  var temp_c = currentForecast.temp_c;
  var feelsliketemp_c = currentForecast.feelslike_c;
  var humidity = currentForecast.humidity;
  var wind_speed = currentForecast.wind_kph
  var uv_index = currentForecast.uv;

  // Create html elements for the current forecast
  var location_html = "<h3>"+city+", "+country+"</h3>";
  var time_icon_html = "<h4>"+date_time+"</h4>";
  var icon_html = "<img src=https:"+weather_icon+">";

  var weather_info = "<p>"+conditions+"<br>Temperature (°C): <b>"+temp_c+"</b><br>Humidity (%): <b>"+humidity+"</b><br>Feels like (°C): <b>"+feelsliketemp_c+"</b><br>Wind speed (km/h): <b>"+wind_speed+"</b><br>UV: <b>"+uv_index+"</b></p>";
  document.getElementById("current-forecast").innerHTML = location_html + time_icon_html + icon_html + weather_info;
  document.getElementById("current-forecast").classList.remove("hidden");
}

function createThreeDayForecaseHtml(location, projectedForecast) {
  console.log("Location: " + location.country);
  console.log("Projected Forecast: " + projectedForecast.forecastday[0].day.maxtemp_c)
}