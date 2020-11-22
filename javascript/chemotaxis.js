

  class Bacteria    
 {     
   
   constructor(xpos, ypos, bcolorval) {
     this.x=xpos;
     this.y=ypos;
     this.bcolor=bcolorval;
   }
   
   
    move() {
     
     var val = (int)(Math.random() * 4 + 1);
     
  if ((Math.abs(this.x-mouseX) + Math.abs(this.y-mouseY))>30){
    
    if(this.x>=mouseX)
      this.x-=((int)(Math.random() * 35 + 1));
    
    else
      this.x+=((int)(Math.random() * 35 + 1));
      
    if(this.y>=mouseY)
      this.y-=((int)(Math.random() * 35 + 1));
      
    else
      this.y+=((int)(Math.random() * 35 + 1));
      
  }

  else {
     if(val==1){
       this.y+=((int)(Math.random() * 35 + 1));
       this.x+=((int)(Math.random() * 35 + 1));
      }
      
     if(val==2){
       this.y+=((int)(Math.random() * 35 + 1));
       this.x-=((int)(Math.random() * 35 + 1));
     }

     if(val==3){
       this.y-=((int)(Math.random() * 35 + 1));
       this.x+=((int)(Math.random() * 35 + 1));
     }
       
     if(val==4){
       this.y-=((int)(Math.random() * 35 + 1));
       this.x-=((int)(Math.random() * 35 + 1));
     }
    
    }

  }
       
   
   
    show() {
     if (this.bcolor==1)
       fill(165, 235, 255);
     if (this.bcolor==2)
       fill(176, 188, 255);
     if (this.bcolor==3)
       fill(176, 255, 247);
     if (this.bcolor==4)
       fill(176, 209, 255);
     ellipse(this.x,this.y,20,20);
   }
   
 }    

 let dots = [];
  
 function setup()   
 {     
   createCanvas(700,500);
   background(255);
   noStroke();
   frameRate(15);
   for(let i=0; i<250; i++) {
     dots.push(new Bacteria((int)(Math.random()*700),(int)(Math.random()*500),(int)(Math.random() * 4 + 1)));
   }

 }   
 function draw()   
 {    
   background(255);
   for(let i=0; i<dots.length; i++) {
     dots[i].show();
     dots[i].move();
   }
 }  
 
