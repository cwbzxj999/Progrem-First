$(function () {

    // 向下滑动鼠标效果
    // 定义初始索引
    var i = 1;
    // 定义一个定时器
    var time = setInterval(function () {
        // 淡入效果
        $(".line .img3,.img4").eq(i - 1).stop().fadeIn(900); //将前一张图片设为浅色
        if (i > 1) { //图片张数
            i = 0;
        }
        // 淡出效果
        $(".line img").eq(i).stop().fadeOut(1100); //将图片设为高亮
        i++;
    }, 1500);


    // 向下滑动鼠标2
    // 定义初始索引
    var i = 1;
    // 定义一个定时器
    var time = setInterval(function () {
        // 淡入效果
        $(".box2 .xh_box .img5,.img6").eq(i - 1).stop().fadeIn(900); //将前一张图片设为浅色
        if (i > 1) { //图片张数
            i = 0;
        }
        // 淡出效果
        $(".xh_box img").eq(i).stop().fadeOut(800); //将图片设为高亮
        i++;
    }, 800);



    // 向下滑动鼠标3
    // 定义初始索引
    var i = 1;
    // 定义一个定时器
    var time = setInterval(function () {
        // 淡入效果
        $(".box3 .x_box .hd .img7,.img8").eq(i - 1).stop().fadeIn(800); //将前一张图片设为浅色
        if (i > 1) { //图片张数
            i = 0;
        }
        // 淡出效果
        $(".box3 .x_box .hd img").eq(i).stop().fadeOut(800); //将图片设为高亮
        i++;
    }, 800);



    // 向下滑动鼠标4
    // 定义初始索引
    var i = 1;
    // 定义一个定时器
    var time = setInterval(function () {
        // 淡入效果
        $(".box4 .x_box .hd .img9,.img10").eq(i - 1).stop().fadeIn(900); //将前一张图片设为浅色
        if (i > 1) { //图片张数
            i = 0;
        }
        // 淡出效果
        $(".box4 .x_box .hd img").eq(i).stop().fadeOut(800); //将图片设为高亮
        i++;
    }, 800);


     // 向下滑动鼠标5
    // 定义初始索引
    var i = 1;
    // 定义一个定时器
    var time = setInterval(function () {
        // 淡入效果
        $(".box5 .x_box .hd .img11,.img12").eq(i - 1).stop().fadeIn(900); //将前一张图片设为浅色
        if (i > 1) { //图片张数
            i = 0;
        }
        // 淡出效果
        $(".box5 .x_box .hd img").eq(i).stop().fadeOut(800); //将图片设为高亮
        i++;
    }, 800);



     // 向下滑动鼠标6
    // 定义初始索引
    var i = 1;
    // 定义一个定时器
    var time = setInterval(function () {
        // 淡入效果
        $(".box6 .x_box .hd .img13,.img14").eq(i - 1).stop().fadeIn(900); //将前一张图片设为浅色
        if (i > 1) { //图片张数
            i = 0;
        }
        // 淡出效果
        $(".box6 .x_box .hd img").eq(i).stop().fadeOut(800); //将图片设为高亮
        i++;
    }, 800);




    //   鼠标触发显示



    //   模块三点击更改页面
    //   设置点击事件  
    $('.box3 .left_box ul li').click(function () {
        var index = $(this).index();
        // 显示该页面
        $('.agent_box .publ').eq(index).slideDown();
    });

    // 设置点击关闭按钮
    $('.p_x').click(function () {
        $('.agent_box .publ').slideUp();
    });


    // 模块四点击更改页面
    $('.box4 .left_box ul li').click(function () {
        var index = $(this).index();
        // 显示该页面
        $('.NY_box .publ').eq(index).slideDown();
    })

    // 设置点击关闭按钮
    $('.p_x').click(function () {
        $('.NY_box .publ').slideUp();
    })

    // 模块五鼠标放上图片放大效果
    $('.box5>div').each(function (i, e) {
        console.log(e)
        $(e).hover(function () {
            $(this).find('h5').stop().fadeToggle();
        });
    });

    // 模块六点击更改页面
    $('.box6 .left_box ul li').click(function () {
        var index = $(this).index();
        // 显示该页面
        $('.NYX_box .publ').eq(index).slideDown();
    })

    // 设置点击关闭按钮
    $('.p_x').click(function () {
        $('.NYX_box .publ').slideUp();
    })


    // 显示二维码
    $('.footer_1 ul .li_1').hover(function () {
        $('.footer_1 ul .li_1 .qr').stop().slideToggle();
    })

    $('.footer_1 ul .li_2').hover(function () {
        $('.footer_1 ul .li_2 .qr1').stop().slideToggle();
    })






});
