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
  ellipse(540,280,blackHoleRadius,blackHoleRadius);
}

var fakeSquare = function() {
  //fake Square (for clicking)
  fill(25,29,35);
  noStroke();
  rect(414.5,155,250,250);
}
var blackholeText = function(){
  fill(255,255,245);
 	text("BlackHole",445,270,200,480);
  textSize(45);
  textFont();

}

//levels and Scene
var  currentScene;



var bhAni = function(){
  for(var i=0; blackHoleRadius<3000; i++){
  blackHoleRadius+=5;
  }
};

function draw() {
  
  image(backgroundImg,10,10,1280,640); 
  
  
  
  fakeSquare();
  blackHole();
  blackholeText();
  blackHoleRadius+=1;
   
  mouseClicked= function(){
  setTimeout(bhAni(),8000);
  blackHoleRadius+=5;
  }
   
  }
  
  
