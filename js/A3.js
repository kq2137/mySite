var childTable;

function preload(){
    childTable = loadTable('../data/Colombia.csv','csv', 'header');
    console.log('Done loading table...');
}

function setup(){
    createCanvas(800, 800);
    textAlign(LEFT, TOP);
    textSize(12);
    console.log('Setup complete...');
    print(childTable.getRowCount() + ' rows loaded...');
    print(childTable.getColumnCount() + 'columns loaded...');
}

function draw(){
    background(255);
    fill(0);
    noStroke();
    for (var i = 0; i < childTable.getRowCount(); i++){
        rect(100, 2 + 14*i, childTable.getNum(i, 'Total'), 12);
    }
    for (var i = 0; i < childTable.getRowCount(); i++){
        text(childTable.getString(i, ''))
    }
}