//move cursor to change location of lightning!

var yloc=0;
var xloc=0;

function setup() {
	var canvas = createCanvas(700, 500);
	background(0);
	stroke(240,240,0);
	strokeWeight(2);
}

function draw() {
	//creates clouds
	stroke(255);
	ellipse(0,0,300,100);
	ellipse(200,0,250,80);
	ellipse(400,0,225,125);
	ellipse(275,40,150,70);
	ellipse(600,10,300,100);
	stroke(240,240,0);
	
	//lightning-random walk
	if(Math.random()<0.5)
		for(var i=0; i<8; i++){
			xloc+=1;
			yloc+=1;
			point(xloc,yloc);
	}
	else
		for(var i=0; i<8; i++){
			xloc-=1;
			yloc+=1;
			point(xloc,yloc);
	}
	
	//resets background
	if(yloc>500){
		yloc=0;
		xloc=mouseX;
		background(0);
		stroke(255);
		ellipse(0,0,300,100);
		ellipse(200,0,250,80);
		ellipse(400,0,225,125);
		ellipse(275,40,150,70);
		ellipse(600,10,300,100);
		stroke(240,240,0);
		}
}