  var r = 255;
	var g = 0;
	var b = 0;

function setup() {
  var canvas=createCanvas(500, 500);
}

function draw() {
	background(187, 229, 252);
	fill(255, 239, 135);
	stroke(255, 239, 135);
	ellipse(250, 250, 300,300);
	strokeWeight(8);
	line(40, 250, 80, 250);
	line(420, 250, 460,250);
	line(250, 420, 250, 460);
	line(250, 40, 250, 80);
	line(102, 398, 130, 370);
	line(370, 370, 398, 398);
	line(130, 130, 102, 102);
	line(370, 130,398, 102);
	
	
  textSize(43);
  textFont('Georgia');
	var s1 = "create your";
	var s2 = "own sunshine";
	
	if(r==255 && b==0)
		g+=5;
	if(g==255 && b==0)
		r-=5;
	if(r==0 && g==255)
		b+=5;
	if(b==255 && r==0)
		g-=5;
	if(b==255 && g==0)
		r+=5;
	if(r==255 && g==0)
		b-=5;
	
	fill(r, g, b);
	textAlign(CENTER);
	text(s1, 250, 235);
	text(s2, 250, 275);
	
	fill(255);
  strokeWeight(0);
	text(s1, 252, 233);
	text(s2, 252, 273);
}