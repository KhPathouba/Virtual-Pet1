//Create variables here
var dog, dogImg;
var dogImg1;
var database;
function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png ")
  dogImg1 = loadImage("images/dogImg1.png")
}

function setup() {
  database=firebase.database();
  createCanvas(500, 500);
  dog = createSprite(250, 250, 90, 90);
  dog.addImage(dogImg);
  dog.scale= 0.2
  foodStock=database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
  background(46, 139, 87);
  drawSprites();
  //add styles here
if(keyDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogImg1);
}
textSize(20);
text("Press UP_ARROW key to feed the drago Milk", 150, 50);

}

function readStock(data){
  foodS=data.val();

}

function writeStock(x){
if(x<=0){
  x=0;
}
else{
  x=x-1;
}
database.ref('/').update({
  Food:x
})

}