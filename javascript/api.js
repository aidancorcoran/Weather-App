const { call } = require('function-bind');
var WeatherApi = require('weather_api');
var defaultClient = WeatherApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = '';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new WeatherApi.APIsApi();

var q = "London"; // String | Pass US Zipcode, UK Postcode, Canada Postalcode, IP address, Latitude/Longitude (decimal degree) or city name. Visit [request parameter section](https://www.weatherapi.com/docs/#intro-request) to learn more.

var days = 7; // Number | Number of days of weather forecast. Value ranges from 1 to 14

var opts = { 
  'dt': new Date("2023-08-15"), // Date | Date should be between today and next 14 day in yyyy-MM-dd format. e.g. '2015-01-01'
  'unixdt': 56, // Number | Please either pass 'dt' or 'unixdt' and not both in same request. unixdt should be between today and next 14 day in Unix format. e.g. 1490227200
  'hour': 56, // Number | Must be in 24 hour. For example 5 pm should be hour=17, 6 am as hour=6
  'lang': "lang_example" // String | Returns 'condition:text' field in API in the desired language.<br /> Visit [request parameter section](https://www.weatherapi.com/docs/#intro-request) to check 'lang-code'.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data.json());
  }
};
var forecast = apiInstance.forecastWeather(q, days, opts, callback);
