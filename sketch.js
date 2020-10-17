
// creating variable for score
var score=0;

//creating variable for background
var bckgrnd,bgimage;

//creating variable for player and ground 
var monkey,monkeyrunning,ground;

//creating variable for groups
var FoodGroup,obstaclesGroup;

//loading images
function preload(){
bgimage=loadImage("jungle.jpg");
monkeyrunning=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
bananaImage=loadImage("banana.png");
obstacleImage=loadImage("stone.png");
}
function setup(){
//background
createCanvas(800,400);
bckgrnd=createSprite(0,0,800,400);
bckgrnd.addImage(bgimage);
bckgrnd.scale=1.5;
bckgrnd.x=bckgrnd.width/2;
bckgrnd.velocityX=-6;
//ground
ground=createSprite(400,370,800,10);
ground.velocityX=-6;
ground.x=ground.width/2;
ground.visible=false;
//player
monkey =createSprite(80,350,50,50);
monkey.addAnimation("monkey",monkeyrunning);
monkey.scale=0.1;
  //making groups
  FoodGroup = new Group();
  obstaclesGroup = new Group();
  //score
  score = 0;
  
  
}
function draw(){
  background(220);
  
  if(bckgrnd.x<0){
  bckgrnd.x=bckgrnd.width/2;
 }
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  monkey.collide(ground);
  
  if(keyDown("space") ) {
      monkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 0.8;
  spawnFood();
  
   if (FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
    score = score + 2;
    
  switch(score){
  case 10: monkey.scale=0.12; 
      break;
  case 20: monkey.scale=0.14; 
      break;
   case 30: monkey.scale=0.16; 
      break;
   case 40: monkey.scale=0.18; 
      break;
      default: break;
  }
}
  if (obstaclesGroup.isTouching(monkey)){
    monkey.scale=0.2;
    }
  //spawnObstacle();
  drawSprites();
   stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+ score,500,50);  
}
 function spawnFood(){
    //spawnning bananas
if (frameCount%130===0){

var food=createSprite(width-400,random(80,200),10,10);
food.addImage("banana",bananaImage);
food.scale=0.08;
food.velocityX=-2;
food.lifetime=400;
  
  FoodGroup.add(food);
    }
 }
function SpawnObstacle(){
  //spawnning obstacles
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(600,350,10,10);
   obstacle.velocityX = -4
   
    obstacle.lifetime=300;
    obstacle.addImage("stone",obstacleImage);
    obstacle.scale=0.12;
    
    obstaclesGroup.add(obstacle);  
}
}
 
  

 
