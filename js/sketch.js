var weatherData;
var apiKey = 'a4f28a6a1aee327802340ba6b7c7dc2c';
var baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
var city = 'Wuhan';
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
    var cnv = createCanvas(1300, 800);
    var x = (windowWidth - width) / 2;
    cnv.position(x,);
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
      fill(120);
      textSize(72);
      text('      ' + city , 0, 405);
      
      textSize(48);
      fill(90,200,125);
      text(str(currentTemp), 610, 380);
      fill(270-currentHumidity, 150+currentHumidity, 20);
      text(str(currentHumidity), 850, 380);
      fill(80,200,230);
      text(str(currentP), 1050, 380);     
      
      fill(120);
      textSize(16);
      text('TEMPERATURE (C)', 600, 405);
      text('HUMIDITY (%)', 830, 405);
      text('PRESSURE (hPa)', 1035, 405);
      textSize(12);
      fill(80);
      text('Source: OpenWeatherMap', 500, 540);
      textSize(10);
      fill(0);
      text('0 C', 100, 55);
      text('10 C', 400, 55);
      text('20 C', 700, 55);
      text('30 C', 1000, 55);
      text('990 % ', 60, 65);
      text('1040 % ', 60, 290);
      stroke(80,200,230);
      strokeWeight(1);
      line(100, currentP-900, 1200, currentP-900);
      stroke(90,200,125);
      strokeWeight(2);
      line(100+currentTemp*30, 60, 100+currentTemp*30, 280);
      strokeWeight(0.5);
      line(100+ minT*30, 60, 100+ minT*30, 280);
      strokeWeight(0.5);
      line(100+ maxT*30, 60, 100+ maxT*30, 280);
      stroke(270-currentHumidity, 150+currentHumidity, 20);
      fill(255);
      strokeWeight(3);
      rect(100+ minT*30 , currentP-1000+90, (maxT-minT)*30, 20);
      stroke(270-currentHumidity, 150+currentHumidity, 20);
      strokeWeight(8);
      line(100+currentTemp*30, currentP-1000+90, 100+currentTemp*30, currentP-1000+110);

    }
    else{
      text('Loading...', 20, 20);
    }
}