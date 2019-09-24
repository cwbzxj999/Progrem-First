$(function () {
    // 鼠标放上div显示文字
    // 鼠标放入显示文字
    $('.dianti').hover(function () {
        $('.dianti ul .wenzi').stop().slideToggle(500);
    });



    // 放入小盒子给当前盒子添加样式
    // 放入当前盒子给兄弟元素添加样式
    $('.dianti ul li .div').hover(function () {
        $(this).toggleClass("css").siblings().toggleClass("scc");;
    });
    // 放入当前文字给兄弟元素添加样式
    $('.dianti ul li .wenzi').hover(function () {
        $(this).toggleClass('scc').siblings().toggleClass("css");
    });

    // 点击电梯导航，页面到达指定的位置
    $('.dianti ul li').click(function () {
        // 求出这个盒子距离文档顶部的位置
        // 把scrollTop设置成这个位置，那么这个效果实现
        // 点击li 获取索引值
        var index = $(this).index();
        // 找到对应div及其到顶部的位置
        var topZhi = $('.floor>div').eq(index).offset().top;
        // // 修改卷起的距离
        // 变化太快
        //动画加给元素
        $('html,body').animate({
            scrollTop: topZhi
        });
        // 在该页面显示当前li>div标签添加类
        $(this).find('.div').addClass('jqbg').parent().siblings().find('.div').removeClass('jqbg');
    });
    $('.dianti ul li .div').eq(0).addClass('jqbg');
    // 每次刷新回到顶部
    $('html,body').animate({
        scrollTop : 0,
    },1000);


})