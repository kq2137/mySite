var myFirstVariable = 20;
var secondVariable = 35;
var myName = "Juan's Car";
var amIamerican = false;
var numbers = [12, 125, 54, 83];
var myObject = {name: "Juan", lastName: "saldarriaga", age: 38, colombian: true}
var x5 = "not mystery value..."
var circleSize = 50;

function myFirstFunction (x1, x2, x3){
	var x4 = x1*x2*x3;
	return x4;
}

function setup(){
	createCanvas(500,500);
	// for (var i = 0; i < 100; i++){
	// 	print(i);
	// }
	var i = 0;
	while (i < 100){
		print(i);
		i++;
	}
}

function draw(){
	// background(250, 50, 225);
	if (mouseIsPressed){
		fill(255);
	}
	else {
		fill(0);
	}
	stroke(100,100,100);
	strokeWeight(1);
	ellipse(mouseX,mouseY, 20, 20);
}