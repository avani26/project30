const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var poly,ground1,ground2;
var box1;
var box2;
var box3;
var box4;
var box5;
var box6;
var box7;
var box8;
var box9;
var box10;
var box11;
var box12;
var box13;
var box14;
var box15;
var box16;
var box17;
var box18;
var box19;
var box20;
var box21;
var box22;
var box23;
var box24;
var box25;

var ball;
var sling1;

function preload() {
poly = loadImage("polygon.png");
}

function setup(){
createCanvas(900,400);

engine=Engine.create();
world=engine.world;

ball= Bodies.circle(50,200,20);
World.add(world,ball);

sling1= new SlingShot(this.ball,{x:100,y:200});

ground1= new Ground(390,300,250,10);
ground2= new Ground(700,200,200,10);

box1= new Box(300,275,30,40);
box2= new Box(330,275,30,40);
box3= new Box(360,275,30,40);
box4= new Box(390,275,30,40);
box5= new Box(420,275,30,40);
box6= new Box(450,275,30,40);
box7= new Box(480,275,30,40);

box8= new Box(330,235,30,40);
box9= new Box(360,235,30,40);
box10= new Box(390,235,30,40);
box11= new Box(420,235,30,40);
box12= new Box(450,235,30,40);

box13= new Box(360,195,30,40);
box14= new Box(390,195,30,40);
box15= new Box(420,195,30,40);

box16= new Box(390,155,30,40);

box17= new Box(640,175,30,40);
box18= new Box(670,175,30,40);
box19= new Box(700,175,30,40);
box20= new Box(730,175,30,40);
box21= new Box(760,175,30,40);

box22= new Box(670,135,30,40);
box23= new Box(700,135,30,40);
box24= new Box(730,135,30,40);

box25= new Box(700,95,30,40);

}


   

function draw(){
    background(255);

    Engine.update(engine);

    ground1.display();
    ground2.display()
    
    imageMode(CENTER);
    image(poly,ball.position.x,ball.position.y,40,40);

    sling1.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();

}

function mouseDragged(){
Matter.Body.setPosition(this.ball,{
    x:mouseX,
    y:mouseY
})
}

function mouseReleased(){
sling1.fly();
}

