var movingRect ,fixedRect ;



function setup() {
  createCanvas(1200,800);

  movingRect = createSprite(60,50,50,30);
  fixedRect = createSprite(400, 200, 50, 40);
movingRect.shapeColor = "red";
fixedRect.shapeColor = "red";
}

function draw() {
  background(0,0,0);
  
  movingRect.x = World.mouseX
movingRect.y = World.mouseY 

if (isTouching(movingRect,fixedRect))
{movingRect.shapeColor = "green";
fixedRect.shapeColor = "green"; }
else {movingRect.shapeColor = "red ";
fixedRect.shapeColor = "red";}

  drawSprites();
}
function isTouching(obstacle1,obstacle2){
  if(obstacle1.x - obstacle2.x <obstacle1.width/2 + obstacle2.width/2
    && obstacle2.x - obstacle1.x <obstacle1.width/2 + obstacle2.width/2
   &&obstacle1.y - obstacle2.y <obstacle1.width/2 + obstacle2.width/2
   && obstacle2.y - obstacle1.y <obstacle1.width/2 + obstacle2.width/2
    ){ 
    
      return true 

      
      
    } else{
      return false 
      
  }
  
}