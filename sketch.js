
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground,a,b,c,engine,world,a1,img,img1;
function preload()
{
  img = loadImage("paper.png");
  img1 = loadImage("dustbingreen.png");
}

function setup() {
  a1 = 0
	createCanvas(1280, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ball = Bodies.circle(200,200,20,{restitution:0.4,density:1.2});
  World.add(world,ball);
	ground = Bodies.rectangle(640,390,1280,20,{isStatic:true});
	World.add(world,ground);
	a = new Can(1000,370,200,20);
	b = new Can(900,270,20,181);
	c = new Can(1100,270,20,181);

}


function draw() {
	
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(255);
  Engine.update(engine);  
  drawSprites();
 push(); 
  imageMode(CENTER);
  

  translate(ball.position.x,ball.position.y);
  //ellipse(ball.position.x,ball.position.y,15,15);
  rotate(ball.angle);
  image(img,0,0,60,60);
  
  pop();
  push();
  imageMode(CENTER);
  translate(1000,280);
  image(img1,0,0,200,200); 
 
  pop();
  rect(ground.position.x,ground.position.y,1280,15);
  //a.display();
  //b.display();
  //c.display();
   if(keyCode === UP_ARROW && a1 === 0)
   {
     a1 = 1
     Matter.Body.applyForce(ball,ball.position,{x:80,y:-85});
  }
}



