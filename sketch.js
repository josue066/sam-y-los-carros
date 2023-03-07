var boundary1;
var boundary2;
var sam;
var car1;
var car2;
var car3;
var car4;
var attempts = 0;
  
 function setup(){
   createCanvas(400, 400);
   //Crea los límites del juego
   boundary1 = createSprite(190,120,420,3);
   boundary2 = createSprite(190,260,420,3);
   //Crea al sprite del personaje y dale color
   sam = createSprite(20,190,13,13);
   sam.shapeColor = "green";
   
   //Crea los carros que funcionarán como obstáculos y pintalos de rojo
   car1 = createSprite(100,130,10,10);
   car1.shapeColor = "black";
   car2 = createSprite(215,130,10,10);
   car2.shapeColor = "gray";
   car3 = createSprite(165,250,10,10);
   car3.shapeColor = "blue";
   car4 = createSprite(270,250,10,10);
   car4.shapeColor = "#fa61b8";
   //Agrega velocidad  para hacer que los autos se muevan.
   car1.velocityY = 8;
   car2.velocityY = 8;
   car3.velocityY = -8;
   car4.velocityY = -8;
 }

  
  
function draw() {
   background("white");
  text("Intentos: " + attempts,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// Crea la función bounceoff para hacer que el auto rebote en los límites.
  car1.bounceOff(boundary1);
  car1.bounceOff(boundary2);
  car2.bounceOff(boundary1);
  car2.bounceOff(boundary2);
  car3.bounceOff(boundary1);
  car3.bounceOff(boundary2);
  car4.bounceOff(boundary1);
  car4.bounceOff(boundary2);
//Agregar la condición para hacer que Sam se mueva de izquiera a derecha.
if(keyDown("right")){
    sam.x = sam.x + 2;
  }
  if(keyDown("left")){
    sam.x = sam.x - 2;
  }
//Agregar la condición de reducir la vida de Sam si toca el carro.

if(
     sam.isTouching(car1)||
     sam.isTouching(car2)||
     sam.isTouching(car3)||
     sam.isTouching(car4))
  {
     sam.x = 20;
     sam.y = 190;
     attempts = attempts + 1;
  }
  
 drawSprites();
}
