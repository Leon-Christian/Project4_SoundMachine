let mic; //makes the mic a variabl
function setup(){
createCanvas (400,400);
  mic = new p5.AudioIn() 
  mic.start(); //turns the mic on
}
function draw(){
  background(200,200,255*vol); //makes the background color varible based on sound
  vol = mic.getLevel(); // makes the volume of the sound a variable
  fill (255*vol,200,200);
  circle (30,30,vol*200); // draws a circle with size based on volume
  
  if (vol*100 >= 99 ) {
  	text ('You Won!',20,30); // if the volume reaches over .99 then you win
  }
}