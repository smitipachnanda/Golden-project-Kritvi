const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var saviour;
var saviourImage;
var corona = []

function preload() {
saviourImage= loadImage("ppe.png");
}

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
    world = engine.world;

  saviour= createSprite(380,780,50,50)
 saviour.addImage(saviourImage);

 if(frameCount % 150 === 0){
 for(var i=0; i<100; i++){
  corona.push(new Obstacles(random(0,600), random(0,600)));
 }
}
}

function draw() {
  background(0); 
  Engine.update(engine);

  if (keyDown(RIGHT_ARROW)) {
    saviour.velocityX = 3;
    saviour.velocityY = 0;
  }

  if (keyDown(LEFT_ARROW)) {
    saviour.velocityX = -3;
    saviour.velocityY = 0;
  }

  if (keyDown(UP_ARROW)) {
    saviour.velocityY = -3;
    saviour.velocityX = 0;
  }

  if (keyDown(DOWN_ARROW)) {
    saviour.velocityY = 3;
    saviour.velocityX = 0;
  }

 // for (var i in corona){

    
     // if(saviour.intersects(corona[i])) {
    //  saviour.x = 380;
    // saviour.y = 780;
   // }

  //}
  //camera.position.x= displayWidth/2
  //camera.position.y= saviour.y

  for(var i=0; i<100; i++){
  corona[i].display();
  corona[i].update();
  }
  drawSprites();
  
 
}

/*function masks() {
  
}*/

function intersects(other){

  var d = dist(saviour.x,saviour.y,other.x,other.y)
  if(d< saviour.x + other.x){
    return true;
  }
  else{
    return false;
  }

}