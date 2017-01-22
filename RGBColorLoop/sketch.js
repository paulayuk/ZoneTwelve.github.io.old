var p1,myColorR,myColorG,myColorB;
function setup() {
	createCanvas(window.screen.width, window.screen.height*.8);
	noStroke();
	// noLoop();
	p1 = [width/2,height];
	myColorR = 0;
	myColorG = 0;
	myColorB = 0;
}

function draw() {
	// if(myColorR <255&myColorG != 255 & myColorB != 255)myColorR++
	// else if(myColorR == 255&myColorG<255 & myColorB != 255)myColorG++
	// else if(myColorG == 255&myColorR>0 & myColorB != 255)myColorR--
	// else if(myColorR == 0&myColorG == 255&myColorB < 255)myColorB++
	// else if(myColorB == 255 &myColorG == 255 &myColorR <255)myColorR++
	// else {myColorR = 0;myColorG = 0;myColorB = 0}
	background(myColorR,myColorG,myColorB);
	var plusFunc = ColorPlus(myColorR,myColorG,myColorB)
	console.log(plusFunc);
	myColorR = plusFunc[0]
	myColorG = plusFunc[1]
	myColorB = plusFunc[2]
	line(30, 20, 85, 75);
}
function ColorPlus(A,B,C){
	if(A < 255)A++
	else if(A == 255 & B < 255){
		A = 0;
		B++;
	}else if(A == 255 & B == 255 & C <255){
		A = 0;
		B = 0;
		C++;
	}else{
		A = 0
		B = 0
		C = 0
	}
	return [A,B,C]
}