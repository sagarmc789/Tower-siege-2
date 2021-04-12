const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon;


function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,400,250,10);
  stand2 = new Stand(900,200,200,10);
 
  //level one
  block1 = new BoxImage(300,275,30,40);
  console.log(block1);
  block2 = new BoxImage(330,275,30,40);
  block3 = new BoxImage(360,275,30,40);
  block4 = new BoxImage(390,275,30,40);
  block5 = new BoxImage(420,275,30,40);
  block6 = new BoxImage(450,275,30,40);
  block7 = new BoxImage(480,275,30,40);
  //level two
  block8 = new BoxImage(330,235,30,40);
  block9 = new BoxImage(360,235,30,40);
  block10 = new BoxImage(390,235,30,40);
  block11 = new BoxImage(420,235,30,40);
  block12 = new BoxImage(450,235,30,40);
  //level three
  block13 = new BoxImage(360,195,30,40);
  block14 = new BoxImage(390,195,30,40);
  block15 = new BoxImage(420,195,30,40);
  //top
  block16 = new BoxImage(390,155,30,40);
  
  //2nd group
  block17 = new BoxImage(960,100,30,40);
  block18 = new BoxImage(930,100,30,40);
  block19 = new BoxImage(900,100,30,40);
  block20 = new BoxImage(870,100,30,40);
  block21 = new BoxImage(840,100,30,40);
  block22 = new BoxImage(930,50,30,40);
  block23 = new BoxImage(900,50,30,40);
  block24 = new BoxImage(870,50,30,40);
  block25 = new BoxImage(900,1,30,40);


polygon=new Polygon(100,100)
  
slingShot=new Throw(polygon.body,{x:100,y:100})

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  
  fill("magenta");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  fill("cyan");
  block22.display();
  block23.display();
  block24.display();
  fill("lime")
  block25.display();
  
  
  
  slingShot.display();

polygon.display();

textSize(20)
fill("white")
text("DRAG AND RELEASE THE STONE TO LAUNCH IT...TRY TO DEMOLISH THE TOWERS",30,50)
text("PRESS SPACE FOR ANOTHER THROW",800,570)


drawSprites();

}
function mouseDragged(){

  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){

 slingShot.fly();
}

function keyPressed(){

  if(keyCode===32){

    Matter.Body.setPosition(polygon.body,{x:100,y:100})
    slingShot.attach(polygon.body);
  }
}