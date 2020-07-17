$(function() {
	refer();
	$("#refer").click(function() {
		refer();
	})

	$("#btnAdd").click(function() {
		var goodsname = $("#goodNameadd").val();
		var price = $("#addprice1").val();
		var description = $("#descriptiondd").val();
		var quantity = $("#addquantity").val();


		$.ajax({
			// 参数地址和方式
			type: "post",
			url: "goodsadd.php",
			//传递函数
			data: {
				"goodsname": goodsname,
				"price": price,
				"description": description,
				"quantity": quantity
			},
			// 返回函数
			success: function(data) {
				if (data == 1) {
					$('#myModaladd').modal('toggle');
					$('#myModaladd input').val("");
					refer();

				} else {
					alert("添加失败");
				}
			}

		})
	})

	$('#myModalAlert').on('show.bs.modal', function(e) {
		// 获取当前点击的按钮
		var btnThis = $(e.relatedTarget);

		// closest("tr") 获取最近的父级元素tr 
		// find("td") 获取最近的父级元素之下的所以td
		// eq(0) 筛选获取第几个，0表示第一个，.text() 获取的是文本值
		var goodsId = btnThis.closest("tr").find("td").eq(0).text();
		var goodsName = btnThis.closest("tr").find("td").eq(1).text();
		var price = btnThis.closest("tr").find("td").eq(2).text();
		var quantity = btnThis.closest("tr").find("td").eq(3).text();
		var description = btnThis.closest("tr").find("td").eq(4).text();

		/* 数据渲染 把获取到的未来的数据赋值到现有的文本里，变成text的文本值 */

		$("#goodsId").val(goodsId);
		$("#goodNameAlert").val(goodsName);
		$("#priceAlert").val(price);
		$("#quantityAlert").val(quantity);
		$("#descriptioAlert").val(description);
	})

	$("#btnAlert").click(function() {

		var goodsId = $("#goodsId").val();
		var goodsName = $("#goodNameAlert").val();
		var price = $("#priceAlert").val();
		var quantity = $("#quantityAlert").val();
		var descriptioAlert = $("#descriptioAlert").val();

		$.ajax({
			type: "post",
			url: "goodsalert.php",
			data: {
				"goodsId": goodsId,
				"goodsName": goodsName,
				"price": price,
				"quantity": quantity,
				"descriptioAlert": descriptioAlert
			},
			success: function(data) {
				if (data == 1) {
					$('#myModalAlert').modal('toggle');
					refer();
				} else {
					alert("修改失败");
				}
			}
		})
	})
	
	$(document).on("click",".del",function(){
		var goodsId = $(this).closest("tr").find("td").eq(0).text();
		
		if(confirm("确定删除吗？")){
			$.ajax({
				type:"post",
				url:"goodsDel.php",
				data:{
					"goodsId":goodsId,
				},
				success:function(data){
					if(data == 1){
						alert("删除成功");
						refer();
					}else{
						alert("删除失败");
					}
				}
			})
		}
	})

})



// 全局函数
function refer() {
	var goodName = $("#goodName").val();
	var describe = $("#describe").val();
	var price1 = $("#price1").val();
	var price2 = $("#price2").val();
	$.ajax({
		type: "post",
		url: "goods.php",
		data: {
			"goodName": goodName,
			"describe": describe,
			"price1": price1,
			"price2": price2
		},
		success: function(data) {
			$('.tt').nextAll().remove();
			$('.tt').after(data);
		}
	})
}
