
var monkey , monkey_running;
var bananaImage,obstacleImage;
var FoodGroup, obstacleGroup;
var score;


function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  var survivalTime= 0;
}



function setup() {
 createCanvas(400,400);
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  
  FoodGroup=new Group();
  obstacleGroup=new Group();
  
  score=0;
}


function draw() {
background("green");

  food();
  obstacles();
  
  if(keyDown("space") && monkey.y>=120){
    monkey.velocityY=-5;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  
  if(ground.x<0){
     ground.x=ground.width/2;
  
  }
 
  
  monkey.collide(ground);
 
  
  
  if(monkey.isTouching(FoodGroup)){
    FoodGroup.destroyEach();
  }

  drawSprites();
   
   
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);
   
}

function food(){
 if(frameCount%80===0){
   var banana=createSprite(200,Math.round(random(120,200)),10,10);
   banana.addImage(bananaImage);
   banana.scale=0.1;
   banana.velocityX=-4;
   banana.lifetime=200;
   FoodGroup.add(banana);
 } 
  
}

function obstacles(){
 if(frameCount%300===0){
   var obstacle=createSprite(300,310,10,10);
   obstacle.addImage(obstacleImage);
   obstacle.scale=0.2;
   obstacle.velocityX=-4;
   obstacle.lifetime=200;
   obstacleGroup.add(obstacle);
 }
  
}
