var x=0;
var y=0;
var PlayerWidth = 50
var PlayerHeight = 50
function start(){
	document.getElementById("Player").style.top=x;
	document.getElementById("Player").style.left=y;
	document.getElementById("Player").style.width=PlayerWidth;
	document.getElementById("Player").style.height=PlayerHeight;
	document.getElementById("startbutton").style.display="none";
}function showbutton(){
	document.getElementById("startbutton").style.display="black";
}



	/* 人物移動 */
	//若要添加邊界可從此修改
function MoveLeft(){
	if (x>=0){
		document.getElementById("Player").style.left=x-10;
		x-=10;
	}
}function MoveRight(){
	if (x+20+PlayerWidth<=window.innerWidth){
		document.getElementById("Player").style.left=x+10;
		x+=10;
	}
}function MoveUp(){
	if(y>=0){
		document.getElementById("Player").style.top=y-10;
		y-=10;
	}
}function MoveDown(){
	if(y+70+PlayerHeight<=window.innerHeight){
		document.getElementById("Player").style.top=y+10;
		y+=10;	
	}
}/* 人物移動End */


/* 鍵盤移動判斷 */

//偵測瀏覽器版本
var browser=navigator.appName;
if(browser=="Netscape"){//如果瀏覽器為Netscape或者Firefox
    //開始監聽鍵盤事件
    document.captureEvents(Event.KEYDOWN)
    document.onkeydown=function(event){
		
		switch(event.which){
			case 37:
				MoveLeft();
				break;
			case 38:
				MoveUp();
				break;
			case 39:
				MoveRight();
				break;
			case 40:
				MoveDown();
				break;
		}
    }
}
else{//假設瀏覽器不為Nescape則猜測為ie
    //開始監聽鍵盤事件
    document.onkeydown = function(){
		
		switch(event.which){
			case 37:
				MoveLeft();
				break;
			case 38:
				MoveUp();
				break;
			case 39:
				MoveRight();
				break;
			case 40:
				MoveDown();
				break;
		}
    }
}
/* 鍵盤移動判斷 */
console.log("Hello This script is running")
console.log(window.innerWidth)
console.log(window.innerHeight)
console.log("Hello This script is running")
