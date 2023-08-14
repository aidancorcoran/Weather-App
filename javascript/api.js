// Get apiKey data
const fs = require('fs');
const filePath = '../api_key.txt'; // Replace with the actual file path

async function getApiKey(filePath) {
  try {
    const data = await readFile(filePath, 'utf8');
    return data.trim(); // Trim any potential whitespace
  } catch (error) {
    console.error('Error reading file:', error);
    throw error; // Rethrow the error to handle it later
  }
}

(async () => {
  try {
    const apiKey = await getApiKey('../api_key.txt');
    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Innisfil&days=1&aqi=no&alerts=no`;
    console.log(apiUrl);
  } catch (error) {
    // Handle any errors that occurred during API key retrieval
    console.error('Error:', error);
  }
})();


const apiUrl = "https://api.weatherapi.com/v1/forecast.json?key="+get_api_key(filePath)+"&q=Innisfil&days=1&aqi=no&alerts=no"
console.log(apiUrl)


// Make the API call using fetch
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Process the weather data
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });