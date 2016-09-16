$(function(){

    //////////預設值//////////
    //參數
    var $body = $("body"),
        $stage = $("#stage"),
        $screen = $("#screen"),
        $player = $("#player"),
        $point = $("#point"),
        $information = $("#information"),
        $warm = $("#warm"),
        $enemy = $("#enemy"),
        $gameover = $("#gameover"),
        $stairs = $("#stairs"),
        sceen_width = $screen.width(),
        sceen_height = $screen.height(),
        player_width = $player.width(),
        player_height = $player.height(),
        edge_width = ( (sceen_width - player_width*5) / 2),

        sx_l = parseInt($screen.offset().left), //螢幕left座標
        sx_r = sx_l + $screen.width(), //螢幕right座標
        sx_m = sx_l + $screen.width()/2, //螢幕mid座標

        sy_t = parseInt($screen.offset().top), //螢幕top座標
        sy_b = sy_t + $screen.height(), //螢幕bottom座標

        edge_l = sx_l + 30 + edge_width,
        edge_r = sx_r - player_width,
        edge_t = sy_t,
        edge_b = sy_b - player_height;

    //player 初始位置
    $player.css("left", ($screen.width()-$player.width())/2+"px");
    $player.css("top", $screen.height()-$player.height());

    //////////使用者操作//////////

    //滑鼠點擊
    $body.mousedown(function(e){
        var px_l = parseInt($player.offset().left), //角色left座標
            px_r = px_l + $player.width(), //角色right座標
            px_m = px_l + $player.width()/2, //角色mid座標
            mx = e.pageX,   //點擊座標
            my = e.pageY;   //點擊座標

        //console.log(sx_l, sx_r, sx_m, px_l, px_r, px_m, mx);
        $point.html('[當前座標] : ' + 'X:' + mx + ' , ' + 'Y:' + my + " | ");

        //滑鼠移動
        /*
        var x = parseInt($player.css("left"));
        if (mx > sx_m){
            parseInt($player.css("left", x+80));
        }
        if (mx < sx_m){
            parseInt($player.css("left", x-80));
        }
        */
    })
    //鎖定右鍵選單
    $body.contextmenu(function(e){
        e.preventDefault();
    })
    //鍵盤
    //var moveleft=2, moveright=2, moveup=7, movedown=0;
    $body.keypress(function(e){
        var $key = String.fromCharCode(e.keyCode),
            px_l = parseInt($player.offset().left), //角色left座標
            px_t = parseInt($player.offset().top), //角色top座標
            px_m = px_l + $player.width()/2; //角色mid座標

        console.log('[Key]:', $key, '[Left座標] :', px_l, '[Top座標] :', px_t);
        $information.html('[Key] : ' + $key + ' , [Left座標] : ' + px_l + ' , [Top座標] : ' + px_t);

        switch ($key) {
            case 'a':
                if(px_l!=edge_l){
                    left_action(), $warm.html('');
                }else{warm();}
                break;
            case 'd':
                if(px_l!=edge_r){
                    right_action(), $warm.html('');
                }else{warm();}
                break;
            
            case 'w':
                if(px_t!=edge_t){
                    jump_action(), $warm.html('');
                }else{warm();}
                break;
            
            case 's':
                if(px_t!=edge_b){
                    down_action(), $warm.html('');
                }else{warm();}
                break;
            default:
                break;
        }

        /*
        //console.log(moveleft, moveright);
        switch ($key) {
            case 'a':
                if(moveleft!=0){
                    moveleft--;
                    moveright++;
                    left_action(), $warm.html('');
                }else{warm();}
                break;
            case 'd':
                if(moveright!=0){
                    moveright--;
                    moveleft++;
                    right_action(), $warm.html('');
                }else{warm();}
                break;
            case 'w':
                if(moveup!=0){
                    moveup--;
                    movedown++;
                    jump_action(), $warm.html('');
                }else{warm();}
                break;
            case 's':
                if(movedown!=0){
                    movedown--;
                    moveup++;
                    down_action(), $warm.html('');
                }else{warm();}
                break;
            default:
                break;
        }
        */

        function warm() {
            console.log("無法移動!!!"), $warm.html('無法移動!!!');
        }

    })

    //////////人物動作//////////
    var delayTime = 50;
    //Jump
    var jmp;
    function jump_action() {
        $player.css({"background-image":"url(player_j.png)"});
        jmp = window.setTimeout(jump_start, delayTime);
    }
    function jump_start() {
        var y = parseInt($player.css("top"));
        parseInt($player.css("top", y-80));
        jump_stop();
    }
    function jump_stop() {
        $player.css({"background-image":"url(player_n.png)"});
        window.clearTimeout(jmp);
    }

    //Down
    var dwn;
    function down_action() {
        $player.css({"background-image":"url(player_j.png)"});
        dwn = window.setTimeout(down_start, delayTime);
    }
    function down_start() {
        var y = parseInt($player.css("top"));
        parseInt($player.css("top", y+80));
        down_stop();
    }
    function down_stop() {
        $player.css({"background-image":"url(player_n.png)"});
        window.clearTimeout(dwn);
    }

    //Left
    var lft;
    function left_action() {
        $player.css({"background-image":"url(player_j.png)"});
        lft = window.setTimeout(left_start, delayTime);
    }
    function left_start() {
        var x = parseInt($player.css("left"));
        parseInt($player.css("left", x-80));
        left_stop();
    }
    function left_stop() {
        $player.css({"background-image":"url(player_n.png)"});
        window.clearTimeout(lft);
    }

    //Right
    var rt;
    function right_action() {
        $player.css({"background-image":"url(player_j.png)"});
        rt = window.setTimeout(right_start, delayTime);
    }
    function right_start() {
        var x = parseInt($player.css("left"));
        parseInt($player.css("left", x+80));
        right_stop();
    }
    function right_stop() {
        $player.css({"background-image":"url(player_n.png)"});
        window.clearTimeout(rt);
    }








    //////////障礙物//////////


    //建立障礙物
	/*
    function createEnemy() {
        $enemy_div = "<div id=\"enemy\" class=\"enemy\"></div>";
        $screen.append($enemy_div);

        $enemy_place = $screen.find(".enemy").each();
        $enemy_place.css("top", -($enemy.height()+320));
    }
    createEnemy();
	*/
	
    /*
    //生成障礙物
    function createEnemy(){
        $stage.append("<div id=\"enemy\" class=\"enemy\"></div>");
        var $enemy_place = $stage.find(".enemy:last"),
            et = $enemy_place.height();

        //障礙物起始位置
        $enemy_place.css("left", 0); //左右
        $enemy_place.css("top", 0-et); //上下
    }
    createEnemy();
	*/
	
	
    //生成新階梯
    //var c_t = setInterval(createStairs, 3000);
    createStairs();
	function createStairs(){
        $screen.append("<div id=\"stairs\" class=\"stairs\"></div>");
        var $stairs_space = $screen.find(".stairs:last");

        //新階梯起始位置
        $stairs_space.css("left", 190); //x軸位置
        $stairs_space.css("top", $screen.height());//y軸位置
    }
	

    //////////螢幕向上移動//////////
    
    //var mtd = setInterval(movetoDown,1000)
    function movetoDown(){
        st = $screen.find(".stairs:last");
        st_t = parseInt(st.css("top"));
        st_X = parseInt(st.css("left"));
		if(st_t!=0){
			st.css("top", st_t-80);
		}else{
			//生產新的平台或重設平台
			rendomST();
			st.css("top", st_t+640);
		}
	}
	function rendomST(){
		var rmst = Math.floor(Math.random()*5)+1;//+1是因為至少rmst要為1 
		//初始化隨機變數
		var strx = 0;
		console.log(rmst);
		switch(rmst){
			case 1:
				strx = 30;
				st.css("left", strx);
				break; 
			case 2:
				strx = 110;
				st.css("left", strx);
				break; 
			case 3:
				strx = 190;
				st.css("left", strx);
				break; 
			case 4:
				strx = 270;
				st.css("left", strx);
				break; 
			case 5:
				strx = 350;
				st.css("left", strx);
				break; 
		}
	}
	//debug
	//$player.css("left", -130);
	//debug
	var call_xy = setInterval(callxy,600)
	function callxy(){
		movetoDown()
		var player_Y = parseInt($player.css("top"));
		var player_X = parseInt($player.css("left"));
		var mtdY = parseInt(st.css("top"));
        var mtdX = parseInt(st.css("left"));
		console.log(mtdX,mtdY,"<<平台|||玩家>>",player_X,player_Y)
		if(player_Y+80 == mtdY){
			var player_Y = player_Y - 80;
		}
			//以下可用
		if (mtdY == player_Y&&mtdX == player_X){
			if(player_Y == 0){
				$player.css("top", 160);
				$player.css("left", -80);
				clearInterval(call_xy);
				lose();
			}else {
				$player.css("top", player_Y-80);
			}
		}else {
			if(player_Y != 560+80){
			$player.css("top", player_Y+80);
				//繼續游完
			}else{
				//輸
				clearInterval(call_xy);
				$player.css("left", -80);
				lose();
			}
			
		}
		function lose(){
			document.getElementById("titles").innerHTML="洨朋友 你輸惹<br/>開發者:<a href='https://skywei.wordpress.com/'>SkywAlKer</a>、<a href='https://zonetwelvecodingsecurity.wordpress.com'>ZoneTwelve</a>";
		}
		
			//以上可用
		/* */
		/*
		if (player_X = mtdX && player_Y = mtdY){
			console.log("玩家上升")
			$player.css("top", player_Y-80);
		}else {
			if(player_Y != 560+80){
				console.log("Y:",player_Y)
				$player.css("top", player_Y+80);
			}else {
				//玩家輸了 要不return false 或者 call function
				console.log("玩家輸了 , Y:",player_Y)
				clearInterval(call_xy);
				//close (call_xy);
				return false;
			}
		}
		*/
	}
 
    //var s_m = setInterval(screen_move, 1000);
    screen_move();
	function screen_move() {

        var y = parseInt($player.css("top"));
        px_t = parseInt($player.offset().top); //角色top座標
		
		console.log(y, px_t);
        st = $screen.find(".stairs:last");
        st_t = parseInt(st.css("top"));
		console.log("hihui",y,px_t)
        /*
        if(px_t!=edge_t){
            $player.css("top", y-80);
        }
		
        if (parseInt($player.css("top"))+80==st_t  &&  parseInt($player.css("left"))-30 == parseInt(st.css("left"))){
            var onlytop = parseInt($player.css("top"));
            console.log(onlytop);
            if(onlytop !=560){
                console.log("onlytop 跟你說跨殺小"+onlytop);
            }
            $player.css("top", y-80);

        }else{
            $player.css("top",y+80)
        }
        //console.log(st_t,parseInt($player.css("top"))+80);
        //console.log(parseInt($player.css("top")));

        st.css("top", st_t-80);
		*/
    }

    /*
    var timer = setInterval(function(){

    }, 5000);
    */

    //////////遊戲結束//////////
	/*
    function GameOver_action(){
        $screen.append("<div id=\"gameover\" calss=\"gameover\">GameOver</div>");
        console.log($gameover.css("top"));
        $gameover.click(function () {
            $(this).remove();
        })
    }
    //GameOver_action();
	//下降邏輯
	*/
})
