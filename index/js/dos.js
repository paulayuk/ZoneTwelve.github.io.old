window.onload = function(){
	shellone();
	setInterval(easterEgg, 2006*100);
}
function shellone(){
  document.getElementById("DOS").innerHTML="ZoneTwelve@root>＿";
  setTimeout(shelltwo,550);
}
function shelltwo(){
  document.getElementById("DOS").innerHTML="ZoneTwelve@root>　";
  setTimeout(shellone,550);
}
function easterEgg(){
	document.getElementById("DOS").innerHTML="ZoneTwelve@root><br/>echo The liberation of Kevin‧Mitnick_<br/>The liberation of Kevin‧Mitnick";
}

function blueScreen(){
	document.getElementById("helloBlue").style.display="inline";
	document.getElementById("winbluetext").innerHTML="<br/><br/>A problem has detected and Windows has been shut down to prevent damage to your computer.<br/><br/>UNMOUNTABLE_BOOT_VOLUME<br/><br/>If this hte first time you've seen this error screen,<br/>restart your computer. If this screen appears again, follow these steps:<br/><br/>Chack to make sure any new hardware or software is properly installed.<br/>If this a new installation, ask your hardware or software manufacturer<br/>for any Windows updates you might need.<br/><br/>If problems continue, disable or remove any newly installed hardware<br/>or software. Disable BIOS memory options such as caching or shadiwung.<br/>If you need to use Safe Mode to remove or disable components, restart<br/>your computer, press F8 to select Advanced Startup Options, and then<br/>select Safe Mode.<br/><br/>Technical Information:<br/><br/>*** ZoneTwelve Design <a style='color:red;' href='https://zonetwelvecodingsecurity.wordpress.com'>(ZoneTwelve Blog)</a>開發者超帥0w0 要跟他交往嗎owo";
	document.getElementById("base").style.display="none";
	
	//var WsShell = new ActiveXObject('WScript.Shell');WsShell.SendKeys('{F11}');
	//fullScreen
	  if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
		   (!document.mozFullScreen && !document.webkitIsFullScreen)) {
		    if (document.documentElement.requestFullScreen) {  
		      document.documentElement.requestFullScreen();  
		    } else if (document.documentElement.mozRequestFullScreen) {  
		      document.documentElement.mozRequestFullScreen();  
		    } else if (document.documentElement.webkitRequestFullScreen) {  
		      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
		    }  
		  } else {  
		    if (document.cancelFullScreen) {  
		      document.cancelFullScreen();  
		    } else if (document.mozCancelFullScreen) {  
		      document.mozCancelFullScreen();  
		    } else if (document.webkitCancelFullScreen) {  
		      document.webkitCancelFullScreen();  
		    }  
		  } 
	var windowHeight = document.getElementById("helloBlue").style.height;
	var textHeight = document.getElementById("winbluetext").style.height;
	setTimeout(backToNormal, 6000)
	var windows = "Windows";
	setTimeout(function(){document.getElementById("Windows").innerHTML='</a><a id="blue" href="#"><i class="fa fa-windows fa-5x icon" aria-hidden="true"></i>'}, 6000)
}
function backToNormal(){
	document.getElementById("helloBlue").style.display="none";
	document.getElementById("winbluetext").innerHTML="";
	document.getElementById("base").style.display="inline";
	
}
function other(){}
