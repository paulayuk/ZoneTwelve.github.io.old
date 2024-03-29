/*
 * @name  Noise1D
 * @description Using 1D Perlin Noise to assign location.
 */
var xoff = 0.0;
var xincrement = 0.01; 

function setup() {
  createCanvas(500, 1600);
  background(0);
  noStroke();
}
var move = 0,type=0,i=0,j=0,k=1,l=0.1;
function draw() {
  fill(0, 10);
  rect(0,0,width,height);

  if(j<height&type==0){
	  j+=1.2*k
  }
  else{
	  j-=1.2*k;
  }
  console.log(j)
  if(i<height&&type == 0)
    i+=j/2;
  else if(i>0&&type == 1)
    i-=j/2;
  else if(i>=height&&type == 0)
    type = 1
  else 
    type =0;
  var n = i;
  fill(200);
  ellipse(width/2,n, 64, 64);
}
