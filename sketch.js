var backgroundImg;

  function setup(){
  backgroundImg = loadImage("1391869903220.png");
  createCanvas(1280,640)

}
 
function draw() {
  
  //background
  
  image(backgroundImg,10,10,1280,640);  
  
  //blackHole Interactive
  fill(25,29,35);
  stroke(1,25,29,45);
  strokeWeight(12);
  ellipse(640,280,350,350);
  
  //Fake Square (for clicking)
  fill(25,29,35);
  noStroke();
  rect(515,155,250,250);
  
  // text("BlackHole",270,235,200,480);
  fill(255,255,245);
  textSize(45);
  textFont();

}
