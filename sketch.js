var backgroundImg;

  function setup(){
  backgroundImg = loadImage("244.jpg");
  createCanvas(1920,1080)

}
 
function draw() {
  
  //background
  
  image(backgroundImg,10,10,1920,1080);  
  
  //blackHole Interactive
  fill(25,29,35);
  stroke(1,25,29,45);
  strokeWeight(12);
  ellipse(960,540,575,575);
  
  //Fake Square (for clicking)
  fill(25,29,35);
  noStroke();
  rect(758.5,340.5,400,400);
  
  // text("BlackHole",270,235,200,480);
  fill(255,255,245);
  textSize(45);
  textFont();

}
