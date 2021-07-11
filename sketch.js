const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var base,base2;
var bridge,jointPoint;
var stones = [];



function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground = new Base(0, height - 10, width * 2, 20, "#795548", true); 
  leftWall = new Base(200, height / 2 + 50, 300, 100, "#8d6e63", true); 
  rightWall = new Base(width - 200, height / 2 + 50, 300, 100, "#8d6e63", true);
  bridge = new Bridge(20, { x: width / 2 - 500, y: height / 2 }); 
  jointPoint = new Base(width - 350, height / 2 + 10, 40, 20, "#8d6e63", true);
  Matter.Composite.add(bridge.body,jointPoint);
  jointlink = new Link(bridge,jointPoint);

  for(var i = 0;i <= 8; i++) {
    var x = random(width/2 -200,width/2 +300);
    var y = random(-10,140);
    var stone = new Stone(x,y,80);
    stones.push(stone);
  }
}

function draw() {
  background(51);
  Engine.update(engine);
 
  ground.display();
  leftWall.display();
  rightWall.display();
  bridge.show();

  for(var i = 0;i <= 8; i++) {
    stones[i].display();
  }
 
}