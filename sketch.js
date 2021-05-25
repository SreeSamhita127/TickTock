var sec, min, hr;


function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
 // createSprite(400, 200, 50, 50);
}

function draw() {
  background(0); 
  translate(400,200);
  rotate(-90);

  sec = second();
  min = minute();
  hr = hour(); 

  secAngle = map(sec, 0, 60, 0, 360);
  minAngle = map(min, 0, 60, 0, 360);
  hourAngle = map(hr%12, 0, 12, 0 ,360);

  push();
  rotate(secAngle);
  stroke("lightblue");
  strokeWeight(5);
  line(0,0,100,0);
  pop();
  
  push();
  rotate(minAngle);
  stroke("pink");
  strokeWeight(5);
  line(0,0,80,0);
  pop();

  push();
  rotate(hourAngle);
  stroke("purple");
  strokeWeight(5);
  line(0,0,50,0);
  pop();

  

  strokeWeight(7);
  noFill();
  stroke("lightblue");
  arc(0,0,260,260,0,secAngle);
  stroke("pink");
  arc(0,0,300,300,0,minAngle);
  stroke("purple");
  arc(0,0,280,280,0,hourAngle)
  drawSprites();
}