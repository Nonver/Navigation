$(function() {
	$(document).scroll(function() {
		var scrollTop = $(document).scrollTop();
		if (scrollTop > 80) {
			$('.nav').addClass("navr");
			$('.nav').removeClass("nav");
			$('.fff').css({
				'color': '#FFFFFF'
			});
		} else {
			$('.navr').addClass("nav");
			$('.navr').removeClass("navr");
			$('.fff').css({
				'color': '#000000'
			});
		}
	})
	// 锚点平滑效果
	$('a').click(function() {
		$('html,body').animate({
			scrollTop: ($($(this).attr('href')).offset().top - 80)
		}, 1000);
	});
	// 导航事件
	// 	var $navs = $('.time-1'), // 导航
	// 		$sections = $('.screen'), // 模块
	// 		$window = $(window),
	// 		navLength = $navs.length;
	// 
	// 	$window.on('scroll', function() {
	// 		var scrollTop = $window.scrollTop(),
	// 			len = navLength -1;
	// 
	// 		for (; len > -1; len--) {
	// 			var that = $sections.eq(len);
	// 			if (scrollTop >= that.offset().top) {
	// 				$navs.removeClass('current').eq(len).addClass('current');
	// 				break;
	// 			}
	// 		}
	// 	});
	//侧边栏
	var length = $('.sidebar-time').length;
	$(document).scroll(function() {
		for (let i = 0; i < length; i++) {
			let top = $('.screen').eq(i).offset().top - 140; //获取当前元素离顶部的距离
			let scrop = $(document).scrollTop(); //获取页面滚动条离顶部的距离
			console.log(scrop + ' ' + top);
			if (scrop > top) {
				$('.sidebar-time').css('color', '#666');
				$('.sidebar-time').eq(i).css('color', 'red');
			}else if(scrop > 1900){
				$('.sidebar-time').css('color', '#666');
				$('.time-5').css('color', 'red');
			}
		}
	})
})
