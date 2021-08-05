var garden,rabbit,apple;
var gardenImg,rabbitImg,apple_Img;
var red_leaf,orange_leaf,green_leaf;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  apple_Img = loadImage("apple.png");
  leaf1_Img = loadImage("redImage.png");
  leaf2_Img = loadImage("orangeLeaf.png");
  leaf3_Img = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Create background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

//Create rabbit
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);


}


function draw() {
  background(0);
  
  rabbit.x = mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);

  spawnApples_and_Leaves();

  drawSprites();
}

function spawnApples_and_Leaves() {
  
 if (frameCount%60==0) {
  apple = createSprite(80,100);
  apple.addImage("apple",apple_Img);
  apple.scale = 0.08;
  apple.velocityY= 2;
  apple.x = Math.round(random(50,350))
  apple.lifetime = 200;   
  }

 if (frameCount%80==0) {
  red_leaf = createSprite(100,120);
  red_leaf.addImage("leaf1",leaf1_Img);
  red_leaf.scale = 0.08;
  red_leaf.velocityY= 2;
  red_leaf.x = Math.round(random(50,370)) 
  red_leaf.lifetime = 200;
  }

 if (frameCount%80==0) {
  orange_leaf = createSprite(110,140);
  orange_leaf.addImage("leaf2",leaf2_Img);
  orange_leaf.scale = 0.08;
  orange_leaf.velocityY= 2;
  orange_leaf.x = Math.round(random(50,340)) 
  orange_leaf.lifetime = 200;
  }

 if (frameCount%80==0) {
  green_leaf = createSprite(120,0);
  green_leaf.addImage("leaf3",leaf3_Img);
  green_leaf.scale = 0.08;
  green_leaf.velocityY= 2;
  green_leaf.x = Math.round(random(50,390)) 
  green_leaf.lifetime = 200;
 }

}