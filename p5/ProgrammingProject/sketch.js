let angle = 0;


function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  //changes to degrees from radians, to make it easier
}

function draw() {
  
  
  //splits the screen in two colors, swaps color positions
  //based on whether the mouse is on the left or right
  push();
  
    fill(255, 182, 193);
    background(137, 207, 240);
    if (mouseX < 250) {
      rect(0, 0, 250, 500);  // Left
    }
    else {
      rect(250, 0, 250, 500); // Right
    }
  pop();
  
  
  
  //creates a trail behind mouse when moving it
  push();
  
    translate(0,0);
  
    /*changes the trails colors when mouse is pressed, also       
    changes size & thickness of trail*/
    if(mouseIsPressed){
      stroke(255, 105, 180);
      strokeWeight(20);
    
    }
    else{
      stroke(48, 25, 52);
      strokeWeight(15);
   
    }
    line(mouseX, mouseY, pmouseX, pmouseY);
  
  pop(); 
  

  
  
  push();
  
    translate(250,250);
    //brings everything below towards center screen
  
  
    for(var i = 0; i < 10; i++){
      translate(0,0);
      fill(i*25, i, 100);//causes varrying colors
      rotate(angle);
    
      rect(100,100, 25, 25);//creating rectangles,
      rect(-100, 100, 25, 25);//varrying positions from origin
      rect(100,-100, 25, 25);
      rect(-100,-100, 25, 25);
      
      ellipse(25,25, 25, 25);//creating circles,
      ellipse(150, 150, 25, 25);//varrying positions from origin
      ellipse(70,-70, 25, 25);
      ellipse(-150,-150, 25, 25);
    }
  pop();
  
  angle+=0.3;//causes infiinite rotation, also sets the speed of rotation
    
}