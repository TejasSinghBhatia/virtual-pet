var dog,sadDog,happyDog;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  
  feed=createButton("feedTheDog")
  feed.position(700,95);
  feed.mousePressed(feedDog)

  addFood=createButton("addFood")
  addFood.position(800,95);
  addFood.mousePressed(addFood)

  foodObj=new Food

}

function draw() {
  background(46,139,87);
  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time
function feedDog(){
dog.addImage(happyDog);
if(foodObj.getFoodStock<=0)
}

//function to add food in stock
function addFood(){
foodS++;
database.ref('/').update({
Food:foodS
})
}