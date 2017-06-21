// ***** Global variables ***** //
var weatherData;
var apiKey = 'a4f28a6a1aee327802340ba6b7c7dc2c';
var baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
var city = 'New York';
var units = 'metric';

// ***** Setup function ***** //
function setup(){
    createCanvas(800, 800);
    var request = baseURL + city + '&units=' + units + '&apikey=' + apiKey;
    loadJSON(request, getWeatherData);
}

function getWeatherData(apiData){
  weatherData = apiData;
  console.log(weatherData);
}

// ***** Draw function ***** //
function draw(){
    background(255);
    if (weatherData) {
      text(weatherData.main.temp, 20, 20);
    }
    else{
      text('Loading...', 20, 20);
    }
}