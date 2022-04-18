var forestimg,forest
var shinchanimg,shinchan



function preload(){
  forestimg = loadAnimation("forest.gif")
  shinchanimg = loadAnimation("shin1.png","shin2.png")
}
function setup(){
  createCanvas(900,400) 
  forest = createSprite(450,200,900,400)
  forest.addAnimation("moving",forestimg)
  forest.scale=1.75

  shinchan = createSprite(78,298,20,20)
  shinchan.addAnimation("running",shinchanimg)
}
function draw(){ 
 background("blue") 
 drawSprites()
 text("X"+mouseX+","+"Y"+mouseY,mouseX,mouseY);
}