var nervousBall = [];
var blackhole;

function setup(){
  createCanvas(800, 800);
  colorMode(HSB,100,100,100);
  for (var i = 0; i < 30; i++) {
  	nervousBall.push(new Jitter());
  }
  blackhole = createVector(400,400);
}

function Jitter(){
	this.position = createVector(random(0,width),random(0,height));
	this.diameter = 50;
	this.fill = random(0,100);
	this.speed = random(0,10);
	this.panic = false;
	this.direction = createVector(random(-3,3),random(-3,3));

	this.display = function(){
		if(this.panic == false){
			this.diameter = 10;
		}
		else{
			this.diameter = 100;
		}
		fill(this.fill,100,100);
		ellipse(this.position.x, this.position.y, this.diameter, this.diameter);
	}

	this.update = function(){
		if(this.position.x > width){
			this.position.x = 0;
		}
		if(this.position.x <0){
			this.position.x = width;
		}
		if(this.position.y < 0){
			this.position.y = height;
		}
		if(this.position.y > height){
			this.position.y = 0;
		}
		this.positon = this.position.add(this.direction);
		this.position.x = this.position.x + random(-this.speed,this.speed);
		this.position.y = this.position.y + random(-this.speed,this.speed);
	}
	this.calculateDistance = function(){
		var distance = this.position.dist(blackhole);
		if (distance < 100){
			this.panic = true;
		}
		else{
			this.panic = false;
		}
	}
}

function draw(){
	fill(0,100,100,0.15);
	rect(0,0,width,height);
	for (var i = 0; i < 30; i++) {
		nervousBall[i].calculateDistance();
		nervousBall[i].display();
		nervousBall[i].update();
	}
	fill(0);
	ellipse(blackhole.x,blackhole.y,75,75);
}