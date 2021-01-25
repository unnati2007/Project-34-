const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
  backgroundImage = loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(1250, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400, 500, 1300, 15);

  box1 = new Box(700,-30,50,50);                 
  box2 = new Box(700, -400, 50, 50);
  box3 = new Box(700, -400, 50, 50);
  box4 = new Box(700, -400, 50, 50);
  box5 = new Box(700, -400, 50, 50);
  box6 = new Box(700, -400, 50, 50);
  box7 = new Box(700, -400, 50, 50);
  box8 = new Box(770, -400, 50, 50);
  box9 = new Box(770, -400, 50, 50);

  boxes1 = new Box(770, -400, 50, 50);
  boxes2 = new Box(770, -400, 50, 50);
  boxes3 = new Box(770, -400, 50, 50);
  boxes4 = new Box(840, -400, 50, 50);
  boxes5 = new Box(840, -400, 50, 50);
  boxes6 = new Box(840, -400, 50, 50);
  boxes7 = new Box(840, -400, 50, 50);
  boxes8 = new Box(840, -400, 50, 50);
  boxes9 = new Box(840, -400, 50, 50);

  bo1 = new Box(910, -400, 50, 50);
  bo2 = new Box(910, -400, 50, 50);
  bo3 = new Box(910, -400, 50, 50);
  bo4 = new Box(910, -400, 50, 50);

  hero = new Hero(370,60,270,70);

  fly = new Fly(hero.body,{x:400,y:20});
  monster = new Monster(948,0,2,350);
}

function draw() {
  background(backgroundImage);
  Engine.update(engine);
  
  ground.display()
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  boxes1.display();
  boxes2.display()
  boxes3.display()
  boxes4.display()
  boxes5.display()
  boxes6.display()
  boxes7.display()
  boxes8.display()
  boxes9.display()
  bo1.display();
  bo2.display();
  bo3.display();
  bo4.display();
  hero.display();
  fly.display()
  monster.display();
}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY })
}