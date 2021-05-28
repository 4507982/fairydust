var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairy,fairyImg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy her
	e
	fairyimg = loadAnimation("images/fairyimage1.png,fairyimage2.png");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
play.sound(joyMusic.mp3);
	//create fairy sprite and add animation for fairy
fairy=createSprite(200,200,80,20);
fairy.addAnimation(fariyimage1.png,fariyimage2.png);
star = createSprite(random(20,750),100, 40,40);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x = starBody.position.x 
  star.y = starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy

  if (star.isTouching(fairy)){
	star.isStatic=true;
  }
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if(keyCode === LEFT_ARROW){
        fairy.velocityX = -5;
	}
		if(keyCode === right_ARROW){
			fairy.velocityX = 5;
		}		
}