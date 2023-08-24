// const fs = require('fs');
// const anotherModule = require('./anotherModule');

// const filePath = '../api_key.txt';
// var apiKey ;

// fs.readFile(filePath, 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading the file:', err);
//     return;
//   }

//   apiKey = anotherModule.processData(data);
// });
// console.log(apiKey)

// Make the API call using fetch
// fetch(apiUrl)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`Network response was not ok: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Process the weather data
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Error fetching weather data:', error);
//   });
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("input-box").addEventListener('submit', function (e) {
    e.preventDefault();
  
    const userInput = document.getElementById("weather_location").value;
  
    makeApiCall(userInput);
  })
  
  function makeApiCall(userInput) {
    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${userInput}&days=3&aqi=yes&alerts=no`;
  
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Get the data-container element
        const dataContainer = document.getElementById('data-container');
  
        // Create HTML elements to display the data
        const dataDisplay = document.createElement('div');
        dataDisplay.textContent = `API Data: ${data.someProperty}`;
  
        // Append the data display element to the container
        dataContainer.appendChild(dataDisplay);
        console.log(data)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
});
