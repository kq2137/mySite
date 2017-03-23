var max_distance;

function setup() {
  createCanvas(800, 800);
  noStroke();
  max_distance = dist(0, 0, width, height);
}

function draw() {
  background(255);
  for (var i = 0; i <= width; i += 40) {
    for (var j = 0; j<= height; j += 40){
      var size = dist(mouseX, mouseY, i, j);
      size = size/max_distance * 50;
      max.size = 20;
      stroke(0);
      var k = 0.2 * dist(mouseX, mouseY, i, j);
      fill(k)
      ellipse(i, j, size, size);
    }
  }
}