var click=0;
var player="Ｘ";
var gameArray=[];
var playerX=[],playerO=[];
function ibeenclick(This){
	if(click==10){return;}
	//console.log(This)
	var myId=event.currentTarget.id;
	for(var i=0;i<gameArray.length;i++){
		if(gameArray[i]==myId){
			return;
		}
	}
	gameArray.push(myId);
	if(player=="Ｏ")player="Ｘ";
	else player="Ｏ";
	change(myId,player);
}
function change(id,player){
	document.getElementById(id).innerHTML=player;
	click++;
	if(player=="Ｏ"){
		playerO.push(id);
		playerO.sort();//可以當 省資源用
		check(playerO);
		player="Ｘ";
	}
	else {
		playerX.push(id);
		playerX.sort();//可以當 省資源用
		check(playerX);
		player="Ｏ";
	}
	console.log("Ｏ",playerO,"	|	Ｘ",playerX)
	if(click<10)document.getElementById("title").innerHTML="換"+player+"選手";
	if(click==9){
		document.getElementById("title").innerHTML="遊戲結束｜平手";
		document.title= '~平手~';
	}
}
var winningConditions=[//贏的條件
		['1','2','3'],
		['1','4','7'],
		['1','5','9'],
		['2','5','8'],
		['3','6','9'],
		['3','5','7'],
		['4','5','6'],
		['7','8','9']
	];
function check(playerSteps){
	for(var win=0;win<winningConditions.length;win++){
		for(var i=0;i<playerSteps.length;i++){
			if(playerSteps[i]==winningConditions[win][0]){
				for(var i=0;i<playerSteps.length;i++){
					if(playerSteps[i]==winningConditions[win][1]){
						for(var i=0;i<playerSteps.length;i++){
							if(playerSteps[i]==winningConditions[win][2]){
								document.getElementById("win").innerHTML="Player	"+player+"	Won";
								click=10;
								document.title="Player	"+player+"	Won";
								return;
							}
						}
					}
				}
			}
		}
		
	}
}
