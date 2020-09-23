//creating sprite objects
var bullet,wall;
var speed,weight,thickness;

//creating the aliases for the bullet and wall sprites
var bulletRightEdge,wallLeftEdge

function setup() 
{
  //creating the canvas
  createCanvas(1600,400);

  //sprite objects and color
  bullet = createSprite(50, 200, 50, 50);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  //randomising speed, weight and thickness
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
}

function draw() 
{
  //adding background colr
  background(255,255,255);
  
  //randomising bullet velocityX using speed variable
  bullet.velocityX = speed;

  //detecting collision
  if(hasCollided(bullet,wall))
  {
    //halting bullet
    bullet.velocityX = 0;

    //calculating damage through a new variable
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    //determining color based on damage calculations
    if(damage>10)
    {
      bullet.shapeColor = "red";
    }
    else
    {
      bullet.shapeColor = "green";
    }
  }

  //drawing sprite objects on the screen
  drawSprites();
}
