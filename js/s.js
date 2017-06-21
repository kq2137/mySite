// ***** Global variables ***** //
var CTable;
var newCTable = new p5.Table;
var maxTotal = 0;
var maxLabel = 45;
var maxLength = 500;
var headers = ['TypeOfVictim','Year','MunicipalityCode','Department','Municipality','Type','Disability','Ethnicity','Total']
var startChartY = 100;
var selectedButton = 0;
var buttonLabels = ['Total', 'Refugees', 'IDPs'];

// ***** Preload function ***** //
function preload(){
	CTable = loadTable('../data/Colombia.csv', 'csv', 'header');
	console.log('Done loading table...');
}

// ***** Setup function ***** //
function setup(){
	createCanvas(1000, 3000);
	textSize(12);
	console.log('Setup complete...');
	print(CTable.getRowCount() + ' rows loaded...');
	print(CTable.getColumnCount() + ' columns loaded...');
	createNewTable();
}

// ****** Create new table function ******** //
function createNewTable(){
	for (var i = 0; i < headers.length; i++) {
		newCTable.addColumn(headers[i]);
	}
	for (var i = 0; i < CTable.getRowCount(); i++) {
		var totalVictims = CTable.getNum(i, 'Total');
		if (totalVictims >= 1) {
			var newRow = newCTable.addRow()
			for (var j = 0; j < headers.length; j++) {
				newRow.setString(headers[j], refugeeTable.getString(i, headers[j]));
			}
		}
	}
	print('New table created...');
}

// ****** Draw chart function *************//
function drawCountries(category){
	fill(0);
	noStroke();
	textAlign(LEFT, TOP);
	textSize(12);
	for (var i = 0; i < topRefugeesTable.getRowCount(); i++) {
		maxTotal = max(topRefugeesTable.getNum(i, category), maxTotal);
	}
	for (var i = 0; i < topRefugeesTable.getRowCount(); i++) {
		var total = topRefugeesTable.getNum(i, category);
		var length = map(total, 0, maxTotal, 0, maxLength);
		rect(maxLabel * 5, startChartY + 2 + 14*i, length, 12);
		text(nfc(total, 0), maxLabel * 5 + length + 5, startChartY + 14*i);
	}
	textAlign(RIGHT, TOP);
	for (var i = 0; i < topRefugeesTable.getRowCount(); i++) {
		text(topRefugeesTable.getString(i, 'Country'), maxLabel * 5 - 5, startChartY + 14*i);
	}
}

// ****** Draw Buttons Function ********* //
function drawButtons(){
	textAlign(CENTER);
	textSize(12);
	for (var i = 0; i < 3; i++) {
		if (selectedButton == i){
			fill(255, 100, 100);
		}
		else {
			fill(0);
		}
		rect(50 + i * 60, 10, 50, 20);
		fill(0);
		text(buttonLabels[i], 75 + i * 60, 30);
	}
}

// ***** Draw Country Details Function ****** //
function drawCountryDetails(xPos, yPos){
	textAlign(LEFT, TOP);
	if (yPos > 105 && yPos < 885){
		var selectedCountry = floor((yPos - 105) / 14);
		textSize(24);
		text(topRefugeesTable.getString(selectedCountry, 'Country'), 800, 105);
		textSize(12);
		text('Refugees: ' + nfc(topRefugeesTable.getNum(selectedCountry, 'Refugees'), 0), 800, 135);
		text('IDPs: ' + nfc(topRefugeesTable.getNum(selectedCountry, 'IDPs'), 0), 800, 150);
		text('Stateless: ' + nfc(topRefugeesTable.getNum(selectedCountry, 'Stateless'), 0), 800, 165);
		text('Total: ' + nfc(topRefugeesTable.getNum(selectedCountry, 'Total'), 0), 800, 180);
	}
}

// ***** Draw function ***** //
function draw(){
	background(255);
	drawCountries(buttonLabels[selectedButton]);
	drawButtons();
	textAlign(RIGHT, BOTTOM);
	text(round(mouseX) + ', ' + round(mouseY), mouseX, mouseY);
	drawCountryDetails(mouseX, mouseY);
	mousePosition();
}

// ***** MousePressed Function ******* //
function mousePressed(){
	if (mouseX > 50 && mouseX < 100 && mouseY > 10 && mouseY < 30){
		selectedButton = 0;
		maxTotal = 0;
	}
	if (mouseX > 110 && mouseX < 160 && mouseY > 10 && mouseY < 30){
		selectedButton = 1;
		maxTotal = 0;
	}
	if (mouseX > 170 && mouseX < 220 && mouseY > 10 && mouseY < 30){
		selectedButton = 2;
		maxTotal = 0;
	}
}

// ***** Mouse Position Function ********* //
function mousePosition(){
	if (mouseX > 50 && mouseX < 100 && mouseY > 10 && mouseY < 30){
		cursor(HAND);
	}
	else if (mouseX > 110 && mouseX < 160 && mouseY > 10 && mouseY < 30){
		cursor(HAND);
	}
	else if (mouseX > 170 && mouseX < 220 && mouseY > 10 && mouseY < 30){
		cursor(HAND);
	}
	else{
		cursor(ARROW);
	}
}