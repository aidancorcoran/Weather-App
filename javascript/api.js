const apiKey = ""

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
  console.log("Location: " + location);
  console.log("Forecast: " + currentForecast)
  document.getElementById("home-page").innerHTML = "<h1>" + location.name + location.region + location.country + "</h1>"
}

function createThreeDayForecaseHtml(location, projectedForecast) {
  console.log("Location: " + location.country);
  console.log("Projected Forecast: " + projectedForecast.forecastday[0].day.maxtemp_c)
}