var weatherData;
var apiKey = 'a4f28a6a1aee327802340ba6b7c7dc2c';
var baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
var city = 'Sydney';
var units = 'metric';
var maxTemp = 40;
var minTemp = -5;
var maxColor = 360;
var minColor = 240;
var currentTemp;
var currentHumidity;
var currentP;
var button;
var cityInput;

var dimensionX = 6;
var dimensionY = 50;


// ***** Setup function ***** //
function setup(){
    createCanvas(1100, 800);
    colorMode(RGB);
    button = select('#submit');
    cityInput = select('#city');
    button.mousePressed(queryAPI);
}

function queryAPI(){
  var request = baseURL + cityInput.value() + '&units=' + units + '&apikey=' + apiKey;
  loadJSON(request, getWeatherData);
}

function getWeatherData(apiData){
  weatherData = apiData;
  currentTemp = weatherData.main.temp;
  maxT = weatherData.main.temp_max;
  minT = weatherData.main.temp_min;
  currentHumidity = weatherData.main.humidity;
  currentP = weatherData.main.pressure;
  city = cityInput.value();
  // console.log(weatherData.main.temp);
}

function drawRect(){
   for (var i = 0; i < dimensionX; i++) {
      stroke(255);
      strokeWeight(1);
      fill(240);
      rect(100, 60+(i*2)*20 ,1100, 20);
  }
}


// ***** Draw function ***** //
function draw(){
    background(255);
    drawRect();
    if (weatherData) {
      noStroke();
      fill(0);
      text('                    Temperature in ' + city + ' : ' + str(currentTemp) + ' C', 20, 340);
      text('                    Humidity in ' + city + ' : ' + str(currentHumidity) + '%', 20, 360);
      text('                    Pressure in ' + city + ' : ' + str(currentP) + '%', 20, 380);
      text('0 C', 100, 55);
      text('10 C', 400, 55);
      text('20 C', 700, 55);
      text('30 C', 1000, 55);
      text('990%', 60, 65);
      text('1040%', 60, 290);
      stroke(270-currentHumidity, 150+currentHumidity, 20);
      fill(255);
      strokeWeight(3);
      rect(100+ minT*30 , 100, (maxT-minT)*30, (currentP-1000)*5);
      strokeWeight(5);
      line(100+currentTemp*30, 100, 100+currentTemp*30, 100+(currentP-1000)*5);
    }
    else{
      text('Loading...', 20, 20);
    }
}

