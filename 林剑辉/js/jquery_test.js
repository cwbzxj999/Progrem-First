$(function () {
    $('.sports_extend li').mouseenter(function () {
        $(this).stop().animate({
            width: 283
        }).find('div').css('display', 'block');
        $(this).parent('ul').css('width', '1300px');
    })

    $('.sports_extend li').mouseleave(function () {
        $(this).stop().animate({
            width: 190
        }).find('div').css('display', 'none');

    })
    /* 这是顶部大logo开始 */
    //logo导航栏定位 
    var logo_nav = $(document).scrollTop();

    var logo_title = $('.logo_title');
    if (logo_nav >= logo_title.offset().top) {
        $('.logo_title ul').addClass('fixed');
        // console.log($('.logo_title ul'))
    } else {
        $('.logo_title ul').removeClass('fixed');
    }
    $(window).scroll(function () {
        var logo_nav = $(document).scrollTop();
        var logo_title = $('.logo_title');
        if (logo_nav >= logo_title.offset().top) {
            $('.logo_title ul').addClass('fixed');
            // console.log($('.logo_title ul'))
        } else {
            $('.logo_title ul').removeClass('fixed');
        }
    })
})


$('.logo_title>ul>li').each(function (i, elm) {
    $(elm).hover(function () {
        $(this).find('.logo_title_sim').toggle();
    });
})
/* 这是顶部大logo结束 */
// 这是中间内容开始
// 这是内容轮播图开始-1

    // $('.tu_b').mouseenter(function () {
    //     // $(this).addClass('active').siblings('.tu_a').removeClass('active');
    //     $('.con_lunbo_left_big').stop().animate({
    //         left : -638
    //     },1000);
    //     $('.txt_b').stop().show().siblings().hide();
    // });
    // $('.tu_a').mouseenter(function () {
    //     // $(this).addClass('active').siblings('.tu_b').removeClass('active');
    //     $('.con_lunbo_left_big').stop().animate({
    //         left : -1276
    //     },1000);
    //     $('.txt_a').stop().show().siblings().hide();
    // });

// 这是内容轮播图结束-1
// 这是中间内容结束
// 这是侧边栏开始

var gotop = $('.gotop').offset().top;
if (gotop > 660) {
    $('.gotop').show();
}else {
    $('.gotop').hide();
};
$(window).scroll(function() {
    var nnn = $('.sidebar').offset().top;
    if (nnn > 390) {
        $('.gotop').show();
        
    }else {
        $('.gotop').hide();
        // console.log(gotop)
        
    };
})


$('.dianji').click(function () { 
    $(this).siblings('ol').stop().slideToggle();
});
// 这是侧边栏结束

// --入口函数--end



$('.media-a').click(function () { 
    // console.log($('.vidbox_a'))
    $('.vidbox_a').stop().show();
});

$('.media-b').click(function () { 
    // console.log($('.vidbox_a'))
    $('.vidbox_b').stop().show();
});
$('.guangbi').click(function() {
    // console.log (111)
    $('.vidbox_a').stop().hide();
    $('.vidbox_b').stop().hide();
})



$('.dateList li').each(function( i, elm) {
    
})