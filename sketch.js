var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var log1,log2,log3s;
//const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.rectangle(width/2 , 200 , 5 ,35, {restitution:0.9, isStatic:true,friction:0.01});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 log1=new Log(300,630,10,60);
	 log2=new Log(491,630,10,60);
     log3= new Log(395,658,184,10);
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
   packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  //console.log(log1.body.position.x); 
  log1.display();
  log2.display();
  log3.display();
  console.log(mouseX,mouseY);
  drawSprites();
 if(keyDown("DOWN_ARROW")){
	 Matter.Body.setStatic(packageBody,false);
 }
}
