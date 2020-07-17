$(function() {
	var a = 1;
	fn();

	$("#btnTj").click(function() {
		var lenr = $('table tr').length;
		var number = $(".number").val(); //商品数量
		var Commodity = $(".Commodity").val(); //商品名称
		var type = $(".type").val(); //商品类型
		var trArr = "<tr class='tt'><td>" + lenr + "</td><td>" + type + "</td><td>" + Commodity +
			"</td><td class='sp_btn'><span class='glyphicon glyphicon-chevron-left btnLeft'></span><span class='shu'>" +
			number +
			"</span><span class='glyphicon glyphicon-chevron-right btnRight'></span></td><td><button class='btn btn-default del'>删除</button></td></tr>";
		$(".append").append(trArr);
	})
	//左数量点击事件
	$(document).on("click",".btnLeft",function(){
		var thisNumber = $(this).next().text();
		if (thisNumber > 1) {
			$(this).next().html(parseInt(thisNumber) - 1);
		} else {
			alert("数量不能低于1件！")
		}
	})
	//右数量点击事件
	$(document).on("click",".btnRight",function(){
		var thisNumber = $(this).prev().text();
		if (thisNumber >= 1) {
			$(this).prev().html(parseInt(thisNumber) + 1);
		}
	})
	//禁止删除点击事件
	$("#prohibit").click(function() {
		if (a == 1) {
			$(".del").attr({
				disabled: "disabled"
			});
			$("#prohibit").html("恢复删除");
			a = a - 1;
		} else {
			$(".del").removeAttr("disabled");
			$("#prohibit").html("禁止删除");
			a = a + 1;
		}

	})
	//删除按钮点击
	$(document).on("click", ".del", function() {
		$(this).parent().parent().remove();
		fn();
	})
})

function fn() {
	var len = $('table tr').length;
	for (var i = 1; i < len; i++) {
		$('table tr:eq(' + i + ') td:first').html(i);
	}
}
