
//BIRD AND BEE CHASE WITH COLLISION DETECTION algorithm and writing functions with arguments

// creating 2 boxes
var block1,block2;
var block3,block4,ball;


// setting up the code
function setup(){
  createCanvas(600,600);
  block1 = createSprite(200,200,70,70);

  block1 = createSprite(200,300,100,100);
 
  block1.scale=0.5;
  block1.scale=0.5;
  block3 = createSprite(515,580,200,30); 
  block3.shapeColor = "red";
  block4 = createSprite(740,580,220,30); 
  block4.shapeColor = "green";
  ball = createSprite(random(20,750),100, 40,40); 
  ball.shapeColor = rgb(255,255,255);
   ball.velocityX = 4;
   ball.velocityY = 9;
  
}


function draw(){
  background(rgb(169,169,169));
   edges=createEdgeSprites();
    ball.bounceOff(edges); 
    if(block1.isTouching(ball) && ball.bounceOff(block1))
    { ball.shapeColor = "blue";
      }
      if(block2.isTouching(ball)){
         ball.shapeColor = "orange";
          ball.velocityX = 0; 
          ball.velocityY = 0;
          
          } 
           if(block3.isTouching(ball) && ball.bounceOff(block3))
           { 
             ball.shapeColor = "red";
 } if(block4.isTouching(ball) && ball.bounceOff(block4))
 { 
   ball.shapeColor = "green"; 
  } 
  drawSprites();
}
