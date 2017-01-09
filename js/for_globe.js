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
			nav_ico:"book",nav_text:"收支簿",nav_url:"p1.html"
			},{
			nav_ico:"bullseye",nav_text:"儲蓄目標設定",nav_url:"p6.html"
			},{
			nav_ico:"dot-circle-o",nav_text:"支出預算設定",nav_url:"p17.html"
			},{
			nav_ico:"line-chart",nav_text:"分析-儲蓄目標",nav_url:"p10.html"
			},{
			nav_ico:"bar-chart",nav_text:"分析-支出預算",nav_url:"p9.html"
			},{
			nav_ico:"area-chart",nav_text:"分析-3S",nav_url:"p12.html"
			},{
			nav_ico:"pie-chart",nav_text:"分析-類別",nav_url:"p18.html"
			},{
			nav_ico:"wpforms",nav_text:"我的心得",nav_url:"p16.html"
			},{
			nav_ico:"database",nav_text:"我的金幣",nav_url:"p15.html"
			},{
			nav_ico:"vcard-o",nav_text:"我的個資",nav_url:"p14.html"
			}
		];
	$.each(aside_text,function(index,obj)
	{
		aside_items = "<li class='nav-primary'>";
		aside_items += "<a href='" + obj.nav_url + "'><i class='fa fa-" + obj.nav_ico + "'></i> " + obj.nav_text + "</a>";
		aside_items += "</li>";
		$('#Nav_link').append(aside_items);
	});
	
	// btn login/logout
	inOut_btns = "<a class='btn btn-primary' href='login.html'><i class='fa fa-sign-in'></i> 登入 | 註冊</a>";
	inOut_btns += "<a class='btn btn-danger' href='logout.html'><i class='fa fa-sign-out'></i> 登出</a>";
	$('#log_inOut').append(inOut_btns);

});
