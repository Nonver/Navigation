$("#button").click(function(){
	/* 获取留言内容 */
	var text = $("#textar").val();
	/* 获取登录的昵称 */
	var Id = $("#dLabel").text();
	$("#media").append("<div class='media well'><div class='media-left'><a href='#'><img class='media-object' src='img/logo2.jpg' alt='"+ Id +"'></a></div><div class='media-body'><h4 class='media-heading'>"+ Id +"</h4><p>"+ text +"</p></div></div>");
})

/* 添加用户 */
var UId = $('.uid').last();
var shu = parseInt(UId.text());
var shu2 = parseInt("1");
var sun = shu+shu2;
$("#btn_tj").click(function(){
	
	$("#tbody_nr").append("<tr><th scope='row'  class='uid'>"+ sun +"</th><td>"+ $("#name_tj").val() +"</td><td>"+ $("#emil_tj").val() +"</td><td><div role='presentation' class='dropdown'><button class='btn btn-default dropdown-toggle' href='#' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>操作<span class='caret'></span></button><ul class='dropdown-menu'><li><a href='#'>编辑</a></li><li><a href='#'>删除</a></li><li><a href='#'>锁定账号</a></li><li><a href='#'>修改密码</a></li></ul></div></td></tr>");
	
})


/* 添加文章 */
var myDate = new Date();
var year=myDate.getFullYear();   //获取当前年
var month=myDate.getMonth()+1;   //获取当前月
var date=myDate.getDate();       //获取当前日
$("#btn_fb").click(function(){
	$("#tbody_wznr").append("<tr><th scope='row' class='nr'>"+ $("#textfb").val() +"</th><td>"+ $("#dLabel").text() +"</td><td>"+ year+"/"+month+"/"+date+"</td><td><div role='presentation' class='dropdown'><button class='btn btn-default dropdown-toggle' href='#' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>操作<span class='caret'></span></button><ul class='dropdown-menu'><li><a href='#'>删除</a></li><li><a href='#'>修改</a></li><li><a href='#'>保存草稿</a></li></ul></div></td></tr>");
	
})
/* 保存草稿 */
$("#btn_cg").click(function(){
	$("#tbody_cgnr").append("<tr><th scope='row' class='nr'>"+ $("#textfb").val() +"</th><td>"+ $("#dLabel").text() +"</td><td>"+ year+"/"+month+"/"+date+"</td><td><div role='presentation' class='dropdown'><button class='btn btn-default dropdown-toggle' href='#' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>操作<span class='caret'></span></button><ul class='dropdown-menu'><li><a href='#'>删除</a></li><li><a href='#'>修改</a></li><li><a href='#' class='fb'>发布</a></li></ul></div></td></tr>");
	
})
/* 草稿发布 */
$(".fb").click(function(){
	$("#tbody_wznr").append("<tr><th scope='row' class='nr'>"+ $("#textfb").val() +"</th><td>"+ $("#dLabel").text() +"</td><td>"+ year+"/"+month+"/"+date+"</td><td><div role='presentation' class='dropdown'><button class='btn btn-default dropdown-toggle' href='#' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>操作<span class='caret'></span></button><ul class='dropdown-menu'><li><a href='#'>删除</a></li><li><a href='#'>修改</a></li><li><a href='#'>保存草稿</a></li></ul></div></td></tr>");
	
})

/* 添加标签 */
$("#tjb").click(function(){
	$("#taglist").append("<div class='alert alert-warning alert-dismissible pull-left' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button><strong>"+ $("#bq").val() +"</strong></div>");
})