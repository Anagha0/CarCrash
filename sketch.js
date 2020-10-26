var car,carImage,wall,move;
var speed,weight;

function setup() {
  createCanvas(400,400);
  
  speed = random (55,80)
  weight = random(400,1500)

  car = createSprite(10,200,50,50)
  wall = createSprite(350,200,30,height/2)
  carImage = loadImage("Car.png");
  move = loadSound("moving.mp3");
  
  
}

function draw() {
  background(255,255,255); 
  car.addImage(carImage);
  car.scale = 0.18;
  //move.play()
 
  car.velocityX = speed;

  if(wall.x-car.x<car.width/2 + wall.width/2){
  	car.velocityX = 0;
  	var deformation = 0.5*weight*speed*speed/22509;

  	if(deformation>180){
  		background(255,0,0)
  		textSize(20)
  		fill("black")
  		text("Its a complete CRASH!",90,100)
  	}

    if(deformation<180 && deformation>100){
    	background(230,230,0)
    	textSize(20)
    	fill("black")
  		text("Few parts are damaged",90,100)
    	
    }

    if(deformation<100){
    	background(0,255,0)
    	textSize(20)
    	fill("black")
  		text("The car is almost fine!",90,100)
    	
    }
  }
  drawSprites();
}