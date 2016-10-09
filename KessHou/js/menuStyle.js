function menuStyle(){
	if(window.outerWidth<=736){
		document.getElementById("MyMenu").style.display="none";
	}else{
		document.getElementById("MyMenu").style.display="inline";

	}
}
window.onload = function(){
	menuStyle();
}