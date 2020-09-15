var bullet;
var wall, thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed= random(123,321);
  weight= random(30,52);
  bullet =createSprite(50,80,70,20);
  thickness=random(22,83);
  wall= createSprite(1300,100,thickness,height/2);
  bullet.velocityX = speed;
  bullet.shapeColor=color(255,255,255);
  wall.shapeColor=color(80,80,80);
console.log(speed);
console.log(weight);
}

function draw() {
  background(225,225,399);
  damage();
  //bullet.collide(wall);
  drawSprites();
}
function hasCollided(lbullet,lwall){
bulletRightEdge=lbullet.x+ bullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true;
}
return false;
}

function damage(){
if(hasCollided(bullet,wall)){
  bullet.velocityX=0;

  var damage = 0.5*weight*speed*speed/thickness*thickness*thickness;}
  
  if(damage>10){
    wall.shapeColor=color(255,0,0);
  }

  if(damage<10){
    wall.shapeColor=color(0,255,0);
  }

}