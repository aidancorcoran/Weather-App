const fs = require('fs');
const anotherModule = require('./anotherModule');

const filePath = '../api_key.txt';
var apiKey ;

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  apiKey = anotherModule.processData(data);
});
console.log(apiKey)

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