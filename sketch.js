var bullet, wall;

var speed, weight, destruction, thickness;



function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  bullet = createSprite(50, 200, 50, 5)
  bullet.shapeColor = 'green'
  wall = createSprite(700, 200, thickness, height/2)
  wall.shapeColor = 'lightblue'



  speed  = random(55, 90)
  weight = random(400, 1500)
  thickness = random(22, 83)

  wall.debug = true

  bullet.debug = true

}


function draw() {
  background(255, 255, 255);  
  
  //bullet.x = World.mouseX
  //bullet.y = World.mouseY
  
  //console.log(bullet.x - wall.x) 
  //console.log(bullet.y - wall.y) 
  
  bullet.velocityX = speed


  if(bullet.x - wall.x < wall.width/2 + bullet.width/2
     && bullet.y - wall.y < wall.height/2 + bullet.height/2
     && wall.x - bullet.x < wall.height/2 + bullet.height/2
     && wall.y - bullet.y < wall.height/2 + bullet.height/2){
      console.log('collided')
      
      destruction = (speed*speed*0.5*weight)/thickness*thickness*thickness
      
      if(destruction<=10){
        wall.shapeColor = 'green'
        bullet.velocityX = 0

      }
      
      if(destruction>=10){
        wall.shapeColor = 'red'
        bullet.velocityX = 0

          
      }
      
      else{
        wall.shapeColor = 'yellow'
        bullet.velocityX = 0
      }

  }
  
  

  drawSprites();
}

