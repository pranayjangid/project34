const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var pend1,pend2,pend3,pend4,pend5;
var sling1,sling2,sling3,sling4,sling5;
function preload(){

}

function setup(){
 createCanvas(1800,800);
 engine = Engine.create();
 world = engine.world;

 pend1 = new Pendulum(200,200,80);
 sling1 = new Sling(pend1.body,{x:500,y:40})

 pend2 = new Pendulum(400,310,80);
 sling2 = new Sling(pend2.body,{x:600,y:40})

 pend3  = new Pendulum(600,360,80);
 sling3 = new Sling(pend3.body,{x:700,y:40})
 
 pend4  = new Pendulum(800,380,80);
 sling4 = new Sling(pend4.body,{x:800,y:40})
 
 pend5  = new Pendulum(1000,360,80);
 sling5 = new Sling(pend5.body,{x:900,y:40})
 
}

function draw(){
background(0);
Engine.update(engine);

pend1.display();
sling1.display();

pend2.display();
sling2.display();

pend3.display();
sling3 .display();


pend4.display();
sling4.display();

pend5.display();
sling5.display();


}


function mouseDragged(){
    Matter.Body.setPosition(pend1.body,{x:mouseX,y:mouseY})
}




