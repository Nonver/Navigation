var i = 1;

$(function(){
	
	$(document).ready(function(){
		var a = "%u6211%u6709%u4E00%u4E2A%u68A6%u60F3\n%u60F3%u53BB%u4E00%u4E2A%u5730%u65B9\n%u548C%u98CE%u4E00%u8D77%u98D8%u8361\n%u4F60%u53EF%u77E5%u662F%u4F55%u65B9\n%u5904%u5904%u9E1F%u8BED%u82B1%u9999\n%u5BF9%u7740%u5927%u6D77%u6B4C%u5531\n%u50CF%u5728%u68A6%u4E2D%u4E00%u6837";
		var b = "\u6211\u6709\u4e00\u4e2a\u68a6\u60f3\u005c\u006e\u60f3\u53bb\u4e00\u4e2a\u5730\u65b9\u005c\u006e\u548c\u98ce\u4e00\u8d77\u98d8\u8361\u005c\u006e\u4f60\u53ef\u77e5\u662f\u4f55\u65b9\u005c\u006e\u5904\u5904\u9e1f\u8bed\u82b1\u9999\u005c\u006e\u5bf9\u7740\u5927\u6d77\u6b4c\u5531\u005c\u006e\u50cf\u5728\u68a6\u4e2d\u4e00\u6837";
		var c = "我有一个梦想\n想去一个地方\n和风一起飘荡\n你可知是何方\n处处鸟语花香\n对着大海歌唱\n像在梦中一样\n\nQQ97470564";
console.log(c);
	})
	
	$(".a-so").click(function(){
		$(".sear").stop().slideToggle(300);
	})
	$(".p_li").hover(function(e){
		
		$(this).find(".top_ui").stop(true).slideToggle(250);
	});
})