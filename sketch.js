const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground;
var box1,box2,box3;
function setup() {
createCanvas(800, 400);
engine = Engine.create();
world = engine.world;
paper = new Paper(100,200,10);
ground = new Ground(400,335,800,20);
box1 = new Box(600,317,100,15);
box2 = new Box(550,295,15,60);
box3 = new Box(650,295,15,60);
Engine.run(engine); 
}
function draw() {
background("black");
if(keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:1,y:-6.5});
}
if(keyCode === DOWN_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:0,y:5});
}
paper.display();
ground.display();
box1.display();
box2.display();
box3.display();
drawSprites();
}