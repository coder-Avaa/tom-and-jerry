var garden, cat, mouse;
var tom, jerry, ground;

function preload() {
  //load the images here
    garden.loadImage("garden.png");
    cat.loadAnimation("cat1.png", "cat2.png", "cat3.png");
    mouse.loadAnimation("mouse1.png", "mouse2.png", "mouse3.png");

}

function setup(){
  createCanvas(1000,800);
   //create tom and jerry sprites here
    ground = createSprite(1000, 800);
    ground.addImage("garden", garden);
    tom.createSprite(650,400);
    tom.addAnimation("cat", cat);
    tom.scale = 0.5;
    jerry.createSprite(200, 300);
    jerry.addAnimation("mouse", mouse);
    jerry.scale = 0.5;
}

function draw() {

    background(225);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyDown("UP_ARROW")) {
     tom.velocityY = -1;
    }
    if(keyDown("DOWN_ARROW")) {
      tom.velocityY = 1;
    }
    if(keyDown("RIGHT_ARROW")) {
      tom.velocityX = 1;
    }
    if(keyDown("LEFT_ARROW")) {
      tom.velocityX = -1;
    }
}
