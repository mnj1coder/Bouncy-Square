const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,body1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);

    var abc = {restitution:1};
    body1 = Bodies.rectangle(100,100,40,40,abc);
    World.add(world,body1);

    console.log(body1);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    rectMode(CENTER);
    rect(body1.position.x,body1.position.y,40,40);

}