var CTable;
var maxTotal = 0;
var maxLabel = 0;
var maxLength = 550;

// ***** Preload function ***** //
function preload(){
    CTable = loadTable('../data/Colombia.csv', 'csv', 'header');
    console.log('Done loading table...');
}

// ***** Setup function ***** //
function setup(){
    createCanvas(800, 3000);
    textSize(12);
    console.log('Setup complete...');
    print(CTable.getRowCounterwwwrw() + ' rows loaded...');
    print(CTable.getColumnCount() + ' columns loaded...');
}

function drawCountries(tableName){
    fill(0);
    noStroke();
    textAlign(LEFT, TOP);
    for (var i = 0; i < tableName.getRowCount(); i++) {
        var total = tableName.getNum(i, 'Total1');
        var length = map(total, 0, total, 0, length);
        rect(maxLabel * 0.5, 2 + 14*i, length, 12);
        text(nfc(total, 0), maxLabel * 0.5 + length + 5, 14*i);
    }
    textAlign(RIGHT, TOP);
    for (var i = 0; i < tableName.getRowCount(); i++) {
        text(tableName.getString(i, 'Year1'), maxLabel * 5 - 5, 14*i);
    }
}

// ***** Draw function ***** //
function draw(){
    background(255);
    drawCountries(CTable);
}