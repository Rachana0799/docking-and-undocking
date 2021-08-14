var iss,spacecraft,sciimg,issimg,hasDocked,sciimg1,sciimg2,sciimg3,bg;
var hasDocked=false;

function preload(){
 issimg=loadImage("Docking-undocking/iss.png");
 sciimg=loadImage("Docking-undocking/spacecraft1.png");
 sciimg1=loadImage("Docking-undocking/spacecraft2.png");
 sciimg2=loadImage("Docking-undocking/spacecraft3.png");
 sciimg3=loadImage("Docking-undocking/spacecraft4.png");

bg=loadImage("Docking-undocking/spacebg.jpg")


}

function setup() {
  createCanvas(800,400);

  iss=createSprite(330,130);
iss.addImage(issimg);

spacecraft=createSprite(285,240)
spacecraft.addImage(sciimg)
spacecraft.scale=0.2;
iss.scale=0.5;

}

function draw() {
  background(bg); 
  if(!hasDocked){
    spacecraft.x=spacecraft.x + random(-1,1)

if(keyDown("UP_ARROW")){
  spacecraft.y=spacecraft.y-2;
}
if(keyDown("DOWN_ARROW")){
 spacecraft.y=spacecraft.y+2; 
 spacecraft.addImage(sciimg1)
}
if(keyDown("LEFT_ARROW")){
  spacecraft.addImage(sciimg3)
  spacecraft.x=spacecraft.x-2; 
 }

 if(keyDown("RIGht_ARROW")){
  spacecraft.addImage(sciimg2)
  spacecraft.x=spacecraft.x+2; 

  if(spacecraft.y<=(iss.y+70) && spacecraft.x<=(iss.x-10)){
    hasDocked=true;
    textSize(25);
    fill("white");
    text("Docking successful",200,200)
  }
 }

  }

  








  drawSprites();
}