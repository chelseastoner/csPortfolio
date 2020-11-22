//this is the Die class

class Die //models one single dice cube
{
    var xloc; 
    var yloc; 
    var val;
    
    constructor(x, y, val) //constructor
    {
        xloc = x;
        yloc = y;
        this.val=val;
    }
      
    show(){
        square(xloc,yloc, 150);
        strokeWeight(18);
        
        if(val%2==1)
          point(xloc+75,yloc+75);
        if(val!=1) {
          point(xloc+25,yloc+25);
          point(xloc+125,yloc+125);
        }
        if(val>3){
          point(xloc+25,yloc+125);
          point(xloc+125,yloc+25);
        }
        if(val==6){
          point(xloc+75,yloc+25);
          point(xloc+75,yloc+125);
        }
        
        strokeWeight(1);
    }
}







//this is the runner class
//ArrayList<Die> dice = new ArrayList<Die>();
var dice = [];

function setup() {
   noLoop();
   createCanvas(870,600);
}

function draw() {
  
  background(#A6CEDE);
  
  //clears ArrayList
  if(dice.size()>0)
    dice.clear();
  
  //total variables
  var top=0;
  var bottom=0;
  
  //creates Die objects and adds them into ArrayList dice, adds values to total variables
  
  for(var i=0;i<5;i++){
    var x = (int)(Math.random()*6)+1;
    dice.push(new Die(20+170*i,430,x));
    bottom+=x;
  }
  
  for(var i=0;i<5;i++){
    var x = (int)(Math.random()*6)+1;
     dice.push(new Die(20+170*i,20,x));
     top+=x;
  }
  
  //displays dice
  
  for(var i=0;i<dice.size();i++)
    dice.get(i).show();
    
  //sets up text properties
  textSize(32);
  textFont('Georgia');
  
  //displays totals
  text("total: " + top,20,225);
  text("total: " + bottom,20,400);
  
  //tells which row is greater
  if(top>bottom)
    text("the top row is greater!", 280, 313);
  else if(bottom>top)
    text("the bottom row is greater!", 265, 313);
  else
    text("the rows are equal!", 300, 313);
}

function mousePressed() {
   redraw();
}