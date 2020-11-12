
var monkey , monkey_running
var banana ,bananaImage, obstacle, stoneImage
var FoodGroup, obstacleGroup
var survivaltime=0;
var score=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  stoneImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(600, 400); 
   monkey = createSprite(100, 325, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(1000, 360, 600, 10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  fakeGround = createSprite(300, 360, 600, 10);
  
  FoodGroup = createGroup();
obstacleGroup = createGroup();
  
 // monkey.debug=true
}


function draw() {
background(300);
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  if (keyDown("space")&& monkey.y >= 320){
   monkey.velocityY=-12; 
  } 
  
  monkey.velocityY=monkey.velocityY+0.5;
  monkey.collide(ground);

  stroke("black");
  textSize(20);
  fill("black");
  text("score:"+score, 250, 50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivaltime=Math.round(frameCount/frameRate())
  text("survivalTime:"+survivaltime, 220, 100);
  
   if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
    score=score+1;
  }
  
    if(obstacleGroup.isTouching(monkey)){
    obstacle.velocityX=0;
    FoodGroup.velocityX=0;
      monkey.velocityY=0;
      ground.velocityX=0;
      
       }
  
  spawnFood();
  spawnObstacle();
  drawSprites();
}

function spawnFood() {
  //write code here to spawn the clouds
  if (frameCount % 150 === 0) {
    var banana = createSprite(600,170,40,10);
    banana.y = Math.round(random(170,230));
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    
    
    //add each cloud to the group
    FoodGroup.add(banana);
  }
}

function spawnObstacle() {
  //write code here to spawn the clouds
   if (frameCount % 300 === 0) {
    obstacle = createSprite(600,340,10,40);
    obstacle.addImage(stoneImage);
    obstacle.velocityX = -8;
     obstacle.scale=0.15;
    
     //assign lifetime to the variable
    obstacle.lifetime = -1;
    
    //adding cloud to the group
   obstacleGroup.add(obstacle);
    }
}




