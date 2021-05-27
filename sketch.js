var dog, happyDog, database, foodS, foodStock, happyDogimg, dogImg; 
//Create variables here

function preload()
{
happyDogimg=loadImage("images/Happy.png");
dogImg= loadImage("images/dog.png");
	//load images here
}

function setup() {
	createCanvas(500, 500);
  database= firebase.database();
  dog= createSprite(250,250,20,20);
  dog.scale=0.3;
  dog.addImage(dogImg);

foodStock= database.ref("Food");
foodStock.on("value",readStock);


}


function draw() {  
background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage(happyDogimg);
  }

  drawSprites();
  //add styles here

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



