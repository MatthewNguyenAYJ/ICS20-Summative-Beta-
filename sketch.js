var backgroundImg;

  function setup(){
  backgroundImg = loadImage("1391869903220.png");
  createCanvas(1080,640)

}
 
var blackHoleRadius = 350;

var blackHole = function(){
  //blackHole Interactive
  fill(25,29,35);
  stroke(1,25,29,45);
  strokeWeight(12);
  ellipse(575,280,blackHoleRadius,blackHoleRadius);
}

var fakeSquare = function() {
  //fake Square (for clicking)
  fill(25,29,35);
  noStroke();
  rect(449.5,155,250,250);
}

var blackholeText = function(){
  // text("BlackHole",270,235,200,480);
  fill(255,255,245);
  textSize(45);
  textFont();
}

function draw() {
  
  image(backgroundImg,10,10,1280,640); 
  
  fakeSquare();
  blackHole();
  blackholeText();
  
    if(mouseIsPressed) {
    
    blackHoleRadius +=450;
  }
}
