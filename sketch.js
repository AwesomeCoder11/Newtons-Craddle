
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	roof1 = new Roof(400,100,700,30);
	
	bobObject1 = new Bob(140,300,70);

	bobObject2 = new Bob(280,300,70);
	
	bobObject3 = new Bob(420,300,70);
	
	bobObject4 = new Bob(560,300,70);
	
	bobObject5 = new Bob(700,300,70);

	rope1 = new Rope(bobObject1.body,{x:70,y:100});
	rope2 = new Rope(bobObject2.body,{x:140,y:100});
	rope3 = new Rope(bobObject3.body,{x:210,y:100});
	rope4 = new Rope(bobObject4.body,{x:280,y:100});
	rope5 = new Rope(bobObject5.body,{x:350,y:100});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(1110);
  
  drawSprites();
 roof1.display();
 bobObject1.display();
 bobObject2.display();
 bobObject3.display();
 bobObject4.display();
 bobObject5.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
}



