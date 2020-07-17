$(function() {
// 获取当前的小时，分钟，秒
	setInterval(function() {
		var ss = new Date().getSeconds();
		if(ss == 1  ||  ss == 2 ||  ss == 3 ||  ss == 4 ||  ss == 5 ||  ss == 6 ||  ss == 7 ||  ss == 8 ||  ss == 9 ||  ss == 0){
			$("#second").html("0"+new Date().getSeconds());
			}else{
				$("#second").html(new Date().getSeconds());
			}
	}, 1000);
	setInterval(function() {
		var Hours = new Date().getHours();
		if(Hours == 1  ||  Hours == 2 ||  Hours == 3 ||  Hours == 4 ||  Hours == 5 ||  Hours == 6 ||  Hours == 7 ||  Hours == 8 ||  Hours == 9 ||  Hours == 0){
				$("#hour").html("0"+new Date().getHours());
			}else{
				$("#hour").html(new Date().getHours());
			}
	}, 1000); //实时监控
	setInterval(function() {
		var Minutes =new Date().getMinutes();
		if(Minutes == 1  ||  Minutes == 2 ||  Minutes == 3 ||  Minutes == 4 ||  Minutes == 5 ||  Minutes == 6 ||  Minutes == 7 ||  Minutes == 8 ||  Minutes == 9 ||  Minutes == 0){
				$("#minute").html("0"+new Date().getMinutes());
			}else{
				$("#minute").html(new Date().getMinutes());
			}
	}, 1000); //实时监控
/*--------------------------------------------*/

// 初始化小圆点开始
	var a = 1;
	// 初始化轮播图的开始
	var b = 1;
	setInterval(function() {
		if (a < 8) {
			$("b").removeClass("on");
			$(".b_" + a + "").addClass("on");
			a++;
		} else {
			a = 1;
		}
	}, 2000);
	setInterval(function() {
		if (b < 8) {
			$(".Rotation").attr("src", "img/lb/" + b + ".jpg");

			b++;
		} else {
			b = 1;
		}
	}, 2000);
/*-----------------------------------------------------------------------*/

// 菜单点击小圆点的切换
	$(".cur2").click(function() {
		$(".cur2").removeClass("cur");
		$(this).addClass("cur");
	})
	// 切换菜单
	$("#menu1").click(function() {
		$(".commodity").removeClass("Tow");
		$("#navigationX").addClass("Tow");
	})
	$("#menu2").click(function() {
		$(".commodity").removeClass("Tow");
		$("#navigationS").addClass("Tow");
	})
/*--------------------------------------------------------------------------*/	
})
