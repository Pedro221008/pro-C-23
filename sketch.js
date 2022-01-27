
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rotator1,rotator2 = fill();rectMode();ellipseMode();

function preload()
{
	
	
}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
	var plane_options={
		isIstatic: true
	}
	


	Engine.run(engine);
	rotator1 = bodies.rectangle(250,200,150,20,rotator_options);
	World.add(world,rotator1);
	rotator2 = bodies.rectangle(250,200,150,20,rotator_options);
	World.add(world,rotator2);
}


function draw() {
  rectMode(CENTER);
  background(144,238,144);
  Engine.update();
  drawSprites();
  rotator1();
 
}



