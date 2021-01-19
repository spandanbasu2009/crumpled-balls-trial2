
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world;
var engine;
var paper,dustbinPart1,dustbinPart2,dustbinPart3,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,580,17);
	dustbinPart1 = new Dustbin(600,640,150,20);
	dustbinPart2 = new Dustbin(530,570,20,130);
	dustbinPart3 = new Dustbin(670,570,20,130);
	ground = new Ground(400,650,800,10);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  paper.display();
  dustbinPart1.display();
  dustbinPart2.display();
  dustbinPart3.display();
  ground.display();

  keyPressed();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}



