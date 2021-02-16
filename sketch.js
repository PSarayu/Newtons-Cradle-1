
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const con= Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);

  engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bobs(100,300,50)
	bob2=new Bobs(150,300,50)
	bob3=new Bobs(200,300,50)
	bob4=new Bobs(250,300,50)
	bob5=new Bobs(300,300,50)
  roof=new Roof(200,100,600,50)
  //rope1=new Chain(bob1.body,roof.body,100,18000)
  rope1=new Chain(bob1.body,roof.body,100,120)
  rope2=new Chain(bob2.body,roof.body,150,120)
  rope3=new Chain(bob3.body,roof.body,200,120)
  rope4=new Chain(bob4.body,roof.body,250,120)
  rope5=new Chain(bob5.body,roof.body,300,120)
	Engine.run(engine)  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}



