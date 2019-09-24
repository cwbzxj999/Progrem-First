window.onload=function () {
$('.w111_nav a').click(function () {
// 添加current类
$(this).addClass('aa').siblings().removeClass('aa');
// 获取索引值
var index = $(this).index();
// 根据索引值找div
$('.w111_public').eq(index).show().siblings().hide();

});



$('.w111_nav a').click(function () {
    // 添加current类
    $(this).addClass('aa').siblings().removeClass('aa');
    // 获取索引值
    var index = $(this).index();
    // 根据索引值找div
    $('.w111_public1').eq(index).show().siblings().hide();
    
    });


    $('.w111_nav a').click(function () {
        // 添加current类
        $(this).addClass('aa').siblings().removeClass('aa');
        // 获取索引值
        var index = $(this).index();
        // 根据索引值找div
        $('.w111_public2').eq(index).show().siblings().hide();
        
        });
        $('.w111_nav a').click(function () {
            // 添加current类
            $(this).addClass('aa').siblings().removeClass('aa');
            // 获取索引值
            var index = $(this).index();
            // 根据索引值找div
            $('.w111_public3').eq(index).show().siblings().hide();
            
            });
};