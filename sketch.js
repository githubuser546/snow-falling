
var backgroundop,backgroundImg;
var snow1,snowimg1;
var snow2,snowimg2;


function preload(){
backgroundImg = loadImage("snow1.jpg")
snowimg1 = loadImage("snow4.webp")
snowimg2 = loadImage("snow5.webp")

}

function setup() {
  createCanvas(1200,1200);

  snow1 = createSprite(400, 200);
  snow1.addAnimation("snowfalling1",snowimg1);
  snow1.scale = 0.2;
  snow1.velocityY = 1;


  snow2 = createSprite(600, 200);
  snow2.addAnimation("snowfalling2",snowimg2);
  snow2.scale = 0.2;
  snow2.velocityY = 1;

  backgroundop = createSprite(360,300);
  backgroundop.addImage("backop",backgroundImg)
  backgroundop.scale = 1.4

  
}

function draw() {
  background(255,255,255);  


  backgroundop.depth = snow1.depth;
  snow1.depth = snow1.depth + 1;

  
  snow2.depth = snow2.depth;
  snow2.depth = snow2.depth + 1;



  drawSprites();
}