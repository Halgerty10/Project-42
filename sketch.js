var hr,mn,sc;
var hrAngle,mnAngle,scAngle;

function setup() {
  createCanvas(800,600);
 

  hr = hour();
  sc = second();
  mn = minute();

  

  angleMode(DEGREES);

}

function draw() {
  background(255,255,255);  

  /*stroke("red");
  strokeWeight(5);
  fill("white");
  ellipse(350,300,300,300);*/
  

  translate(350,300);

  push()
  rotate(scAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,100,0);
  scAngle = map(sc, 0, 60, 0, 360);
  noFill();
  arc(5,5,300,300,0,scAngle);
  pop()

  push()
  rotate(mnAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,100,0);
  mnAngle = map(mn, 0, 60, 0, 360);
  noFill();
  arc(-5,-5,260,260,0,mnAngle);
  pop()

  push()
  rotate(hrAngle);
  stroke("green");
  strokeWeight(7);
  line(0,0,100,0);
  hrAngle = map(hr, 0, 24, 0, 360);
  noFill();
  arc(10,-2,220,220,0,hrAngle);
  pop()

  
  

  drawSprites();
}