
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var box;
var ground;
var ball;




function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
  
	ground = new Ground;
	box=new Dustbin;
	ball=new Ball;
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  box.display();
  ball.display();
  

  drawSprites();
 
}

function keyPressed() {
	if(keyCode===UP_ARROW) {
	Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
	}
}

