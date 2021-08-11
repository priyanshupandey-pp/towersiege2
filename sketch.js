const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var ground,box,ball;
var world,engine
function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
 ground= new Ground(360,290,250,10)
 ground1= new Ground(630,200,150,10)
 box17= new Box(629,180,30,40)
 box18= new Box(600,180,30,40)
 box19= new Box(630,180,30,40)
 box20= new Box(660,180,30,40)
 box21= new Box(630,180,30,40)
 box22= new Box(660,140,30,40)
 box23= new Box(630,140,30,40)
 box24= new Box(600,140,30,40)
 box25= new Box(615,100,30,40)
 box26= new Box(645,100,30,40)
 box27= new Box(630,60,30,40)
 box1= new Box(270,270,30,40)
 box2= new Box(300,270,30,40)
 box3= new Box(330,270,30,40)
 box4= new Box(360,270,30,40)
 box5= new Box(390,270,30,40)
 box6= new Box(420,270,30,40)
 box7= new Box(450,270,30,40)
 box8= new Box(300,235,30,40)
 box9= new Box(330,235,30,40)
 box10= new Box(360,235,30,40)
 box11= new Box(390,235,30,40)
 box12= new Box(420,235,30,40)
 box13= new Box(330,195,30,40)
 box14= new Box(360,195,30,40)
 box15= new Box(390,195,30,40)
 box16= new Box(360,155,30,40)
 ball= new Ball(200,200,20,20)
 slingshot = new SlingShot(ball.body,{x:130, y:200});
 ground2=new Ground(400,390,800,20)
 Engine.run(engine) 
}

function draw() {
  rectMode(CENTER);
  background("red");
  Engine.update(engine)
  ground.display()
  box1.display()
  box2.display() 
  box3.display() 
  box4.display() 
  box5.display() 
  box6.display() 
  box7.display()   
  box8.display()
  box9.display() 
  box10.display() 
  box11.display() 
  box12.display() 
  box13.display() 
  box14.display() 
  box15.display()
  box16.display()  
  box17.display()
  box18.display() 
  box19.display() 
  box20.display() 
  box21.display()
  box22.display()  
  box23.display()
  box24.display() 
  box25.display()
  box26.display()  
  box27.display()
  ball.display()
  slingshot.display()
  ground1.display()
  ground2.display();
  drawSprites();
}
function mouseReleased(){
   slingshot.fly();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
 }