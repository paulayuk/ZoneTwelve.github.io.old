var i = 1;


function newone(){
	if(i<=5){
		Marquee();
	}else if(i=6){
		i=1;
		Marquee();
	}
}
function Marquee(){
	console.log(i)
	switch (i){
		case 1:
		console.log("Now is",i);
		//document.getElementById("link5").style.fontSize = "3rem";
		//document.getElementById("link1").style.fontSize = "4rem";
		break;
		case 2:
		console.log("Now is",i);
		//document.getElementById("link1").style.fontSize = "3rem";
		//document.getElementById("link2").style.fontSize = "4rem";
		break;
		case 3:
		console.log("Now is",i);
		//document.getElementById("link2").style.fontSize = "3rem";
		//document.getElementById("link3").style.fontSize = "4rem";
		break;
		case 4:
		console.log("Now is",i);
		//document.getElementById("link3").style.fontSize = "3rem";
		//document.getElementById("link4").style.fontSize = "4rem";
		break;
		case 5:
		console.log("Now is",i);
		//document.getElementById("link4").style.fontSize = "3rem";
		//document.getElementById("link5").style.fontSize = "4rem";
		break;
	}
	i++;
	setTimeout(newone, 1000)
}
//var MenuMarquee = setInterval(newone,1000)
