

let img = [];
// let img2;
// let img3;
// let img4;
// let img5;

function preload() {
  img[0] = loadImage('Greenflower.png');
  img[1] = loadImage('blueflower.png');
  img[2] = loadImage('orangeflower.png');
  img[3] = loadImage('pinkflower.png');
  img[4] = loadImage('yellowflower.png');
}

function setup() {
  colorMode(HSB);
  createCanvas(800, 400);
  // console.log();
}

function draw() {
  background(255,0, 255);

  if (mouseIsPressed){
    background(random(255),255,255);
    if (frameCount % 4 == 0){
    spriteExplosion();
    }
  }
  
  fill(0);
  textAlign(CENTER);
  text('CLICK FOR MAGIC', width/2, height/2);
  //draw all the sprites added to the sketch so far
  //the positions will be updated automatically at every cycle
  drawSprites();
}

function spriteExplosion() {

  //create a sprite at the mouse position and store it in a temporary variable
  fill(0);
  var s = createSprite(mouseX, mouseY, 30, 30);
  s.addImage(img[floor(random(5))]);
  //if no image or animation is associated it will be a rectancle of the specified size
  //and a random color

  //now you can use the variable to set properties
  //e.g. a random velocity on the x and y coordinates
  s.velocity.x = random(-5, 5);
  s.velocity.y = random(-5, 5);
}
