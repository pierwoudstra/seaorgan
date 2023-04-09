const big = 60;
const rbig = big-40;
let deltaiks;
let deltaij;

function setup() {
   // put setup code here
   createCanvas(windowWidth, windowHeight);
}

function iks(a,b,c) {
   if (mouseX <= a - rbig || mouseX >= a + rbig || mouseY <= b - rbig || mouseY >= b + rbig) {
      textSize(abs(80-(deltaiks+deltaij))+int(random()*6)+8);
      noStroke();
      fill(abs(255-(deltaiks+deltaij)*10),0,255,200);
      //max.outlet("value", 12);
      text("≈", a, b); 
   } else {
      fill(0,0,255);
      textSize(80);
      text("≈", a, b);
      stroke(255);
      fill(255);
   }
}

function draw() {
   // put drawing code here
   //background(255);
   
   background(70-mouseY/5,70-mouseY/5,255-mouseY/5,50);
   textAlign(CENTER, CENTER);
   fill(50,0,255,200);
   textSize(big);
   //text("o",mouseX,mouseY);
   
   
   for (i = 20; i < width; i+=width/11) {
      for (j = 0; j < height; j+=height/14){
         deltaiks = (abs(mouseX-i)/7)+10;
         deltaij = (abs(mouseY-j)/7)+10;
         iks(i, j, big);
         
      }
   }
}