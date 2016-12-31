jQuery(document).ready(function($){
	$('.menu').on('click', function(){
		if ($('.l-site').hasClass('is-open')) {
			$('.menu').removeClass('is-active');
			$('.l-site').removeClass('is-open');
		} else {
			$('.menu').addClass('is-active');
			$('.l-site').addClass('is-open');
		}
	});

	// Left Aside Menu Links
	var aside_text =[{
			nav_text:"收支簿",nav_url:"p1.html"
			},{
			nav_text:"儲蓄目標",nav_url:"p6.html"
			},{
			nav_text:"儲蓄分析",nav_url:"p10.html"
			},{
			nav_text:"3S分析",nav_url:"p12.html"
			},{
			nav_text:"類別分析",nav_url:"#0"
			},{
			nav_text:"個資設定",nav_url:"#0"
			},{
			nav_text:"我的心得",nav_url:"#0"
			},{
			nav_text:"我的金幣",nav_url:"#0"
			}
		];
	$.each(aside_text,function(index,obj)
	{
		aside_items = "<li class='nav-primary'>";
		aside_items += "<a href='" + obj.nav_url + "'>" + obj.nav_text + "</a>";
		aside_items += "</li>";
		$('#Nav_link').append(aside_items);
	});
	
	// btn login/logout
	inOut_btns = "<a class='btn btn-primary' href='login.html'><i class='fa fa-sign-in'></i> 登入 | 註冊</a>";
	inOut_btns += "<a class='btn btn-danger' href='logout.html'><i class='fa fa-sign-out'></i> 登出</a>";
	$('#log_inOut').append(inOut_btns);

});
