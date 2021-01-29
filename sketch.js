var bullet,wall;
var thickness;
var speed,weight;

function setup() {
  createCanvas(1200,800);
 speed=random(223,321);
 weight=random(30,52);
 bullet=createSprite(50,200,50,50);
 bullet.velocityX=speed;
 bullet.shapeColor="white"
 thickness=random(22,83);
 wall=createSprite(1000,200,thickness,height/2)
 wall.shapeColor="red";
 
}

function draw() {
  background("black");
  if (wall.x-bullet.x<=wall.width/2+bullet.width/2 &&
    bullet.x-wall.x<=bullet.width/2+wall.width/2 )
{
bullet.velocityX=0;
var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
if(damage>10){
  wall.shapeColor="green"
}
if(deformation<=10){
  wall.shapeColor="red"
}
  }
 
  drawSprites();
}
