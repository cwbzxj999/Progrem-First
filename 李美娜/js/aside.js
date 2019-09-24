

$(function () {
	showDiv();
	function showDiv () {
		// 页面滚动出去一段距离，让电梯导航显示
		// 获取卷起距离
		var topVal = $(document).scrollTop();

		// 判断
		if (topVal <= $('.section2').offset().top || topVal >= 3000) {
			// 让盒子显示
			$('.right-nav').fadeOut();
		} else {
			$('.right-nav').fadeIn();
		}
    }
    


	// 添加滚动事件，加给window
	$(window).scroll(function () {

		showDiv();
    })
})



$(function () {
	showDiv();
	function showDiv () {
		// 页面滚动出去一段距离，让电梯导航显示
		// 获取卷起距离
		var topVal = $(document).scrollTop();

		// 判断
		if (topVal >= $('.tren').offset().top) {
			// 让盒子显示
			$(' .trn_content ').fadeIn();
		} 
    }
    


	// 添加滚动事件，加给window
	$(window).scroll(function () {

		showDiv();
    })
})