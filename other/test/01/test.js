function encode(){
	var text = document.getElementById("de-text").value;
	var codeList = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	for (var i=0;i<codeList.length;i++){
		eval('text = text.replace(/'+codeList[i]+'/gi,"'+i+'")');
	}
	document.getElementById("en-text").value = text;
}