function start(){
	document.getElementById("text").innerHTML=Tone;
	setTimeout(function(){ document.getElementById("_click").href='javascript:one();'; }, 1000);
}
function one(){
	document.getElementById("text").innerHTML=Ttwo;
	setTimeout(function(){document.getElementById("_click").href='javascript:two();';}, 1000);
}
function two(){
	document.getElementById("text").innerHTML=Tthree;
	setTimeout(function(){document.getElementById("_click").href='javascript:three();';}, 1000);
}
function three(){
	document.getElementById("text").innerHTML=Tfour;
	setTimeout(function(){document.getElementById("_click").href='javascript:four();';}, 1000);
}
function four(){
	document.getElementById("text").innerHTML=Tfive;
	document.getElementById("_click").href='javascript:five();';
}
function five(){
	document.getElementById("_click").href='javascript:End();';
	document.getElementById("text").innerHTML=Tfive;
}
function End(){
	document.getElementById("_click").href='javascript:End();';
	document.getElementById("text").innerHTML="哈哈哈根本不是遊戲XD";
}



































































var	Tone = "遊戲開始瞜,繼續點我<br/>喔對了!!<br/>不要太快,我有寫code讓他慢慢來.";
var	Ttwo = "<br/><br/><br/><br/><br/>其實....";
var	Tthree = "<br/><br/><br/><br/><br/><br/><br/><br/><br/>我想告訴妳";
var	Tfour = "嗯...讓我想一下怎麼說";
var	Tfive = "寫程式超灀der<br/>(o　　Wo)b";