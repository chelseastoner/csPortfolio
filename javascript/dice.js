//this is the runner class

let dice = [];

function setup() {
   noLoop();
   createCanvas(870,600);
}

function draw() {
  
 background(166, 206, 222);
  
  //clears ArrayList
  if(dice.length>0) {
    let dice = [];
  }
  
  //total variables
  var top=0;
  var bottom=0;
  
  //creates Die objects and adds them into ArrayList dice, adds values to total variables
  
  for(let i=0;i<5;i++){
    let x = (int)(Math.random()*6)+1;
    dice.push(new Die(20+170*i,430,x));
    bottom+=x;
  }
  
  for(let i=0;i<5;i++){
    let x = (int)(Math.random()*6)+1;
     dice.push(new Die(20+170*i,20,x));
     top+=x;
  }
  
  //displays dice
  
  for(let i=0;i<dice.length;i++)
    dice[i].show();
    
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




//this is the Die class

class Die //models one single dice cube
{
    /*var xloc; 
    var yloc; 
    var val;*/
    
    constructor(x, y, val) //constructor
    {
        this.xloc = x;
        this.yloc = y;
        this.val=val;
    }
      
    show(){
        square(this.xloc,this.yloc, 150);
        strokeWeight(18);
        
        if(this.val%2==1)
          point(this.xloc+75,this.yloc+75);
        if(this.val!=1) {
          point(this.xloc+25,this.yloc+25);
          point(this.xloc+125,this.yloc+125);
        }
        if(this.val>3){
          point(this.xloc+25,this.yloc+125);
          point(this.xloc+125,this.yloc+25);
        }
        if(this.val==6){
          point(this.xloc+75,this.yloc+25);
          point(this.xloc+75,this.yloc+125);
        }
        
        strokeWeight(1);
    }
}
