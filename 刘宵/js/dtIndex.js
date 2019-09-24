$(function () {
	showDiv();
	function showDiv () {

		var topVal = $(document).scrollTop();

		if (topVal >= $('.floor').offset().top) {

			$('.fixedtool').fadeIn();
		} else {
			$('.fixedtool').fadeOut();
		}
	}

	$(window).scroll(function () {

		showDiv();

		var top = $(document).scrollTop();
		$('.floor>div').each(function (i, elm) {

			if (top >= $(elm).offset().top) {
				$('.fixedtool li').eq(i).addClass('current').siblings().removeClass('current');
			}

		});

	});

	$('.fixedtool li').click(function () {

		var index = $(this).index();
		var topZhi = $('.floor>div').eq(index).offset().top;
		$('body,html').animate({
			scrollTop : topZhi
		},function () {
			$(this).addClass('current').siblings().removeClass('current');
		});

		

	});


});
$(function () {


	$('ul,li').hover(function () {

		$(this).siblings().stop().fadeTo(300, 0.5);

	},function () {

		$(this).siblings().stop().fadeTo(300,1);

	});


});