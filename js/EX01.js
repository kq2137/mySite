var w;
var columns;
var rows;
var board;


function setup(){
	createCanvas(800, 800);
	colorMode(HSB, 40, 40, 100);
	w = 20;
	columns = floor(width/w);
	rows = floor(height/w);
	board = new Array(columns);
	for (var i = 0; i < columns; i++) {
		board[i] = new Array(rows);
	}
}

function draw(){
	background(255);
	for (var i = 0; i < columns; i++) {
		for (var j = 0; j < rows; j++) {
			fill(i, j, 100);
			noStroke();
			rect(i*w, j*w, w-1, w-1);
		}
	}
}
