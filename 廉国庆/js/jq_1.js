// 入口函数
$(function () {
   //   轮播图内容
   $('.main_container ul').mouseenter(function () {
      $(this).find('.featured_slider_description').addClass('details_box').find('.featured_slider_details').fadeIn();

   });
   $('.main_container ul').mouseleave(function () {
      $(this).find('.featured_slider_description').removeClass('details_box').find('.featured_slider_details').css('display','none')

   });


   // // 游戏
   // // 后面的大盒子
   // $('.Game_box_top ul')
   // // 右面的盒子
   // $('Game_box_right ul')
   // // 小点点
   // console.log($('.Game_box_dian span').length)
   // $('Game_box_dian  span').click(function(){
      
   //    console.log($(this));
   // });
   
});