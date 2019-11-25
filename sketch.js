let vol; 
let mic; //makes the mic a variable 
function setup(){
createCanvas (400,400);
  mic = new p5.AudioIn() 
  mic.start(); //turns the mic on
  
}
function draw(){

  vol = mic.getLevel(); // makes the volume of the sound a variable
  print(vol);
  background(200,200,255*vol); //makes the background color varible based on sound
  fill (255*vol,200,200);
  circle (30,30,vol*200); // draws a circle with size based on volume
  
  if (vol*100 >= 99 ) {
  	text ('You Won!',20,30); // if the volume reaches over .99 then you win
  } else 
  {  text ('Keep Yelling!',20,30); // if the volume does not reach over .99 then it prompts you to keep yelling
}

}