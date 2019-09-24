// 第一层事件
// 动画函数
function animation(element, current, target, step, time) {
     //current位置等于当前元素的位置
     current = element.offsetLeft;
     //将已经存在的定时器清掉
     if (element.timeID) {
          clearInterval(element.timeID);
          element.timeID = null;
     }
     element.timeID = setInterval(function () {
          //如果移动到了目标位置，那么就停止累加，同时要停止定时器
          if (current > target) {
               step = -Math.abs(step);
          }
          if (Math.abs(current - target) <= Math.abs(step)) {
               current = target;
               clearInterval(element.timeID);
          } else {
               current += step;
          }
          //赋值
          element.style.left = current + 'px';
     }, time)
}

// 获取事件源
var ul = document.querySelector('.banner ul');
var imgW = document.querySelector('.banner').offsetWidth;
var lbtn = document.querySelector('.lbtn');
var rbtn = document.querySelector('.rbtn');


// 注册下一页按钮
var index = 0;
rbtn.addEventListener('click', function () {
     if (index == 5) {
          // 代表看到的就是原来的第一张
          index = 0;
          ul.style.left = '0px';
     }
     index++;
     animation(ul, ul.offsetLeft, -index * imgW, 50, 20);
})
// 注册上一页按钮
lbtn.addEventListener('click', function () {
     if (index == 0) {
          // 代表看到的就是复制以后的第一张
          index = 5;
          ul.style.left = -index * imgW + 'px';
     }
     index--;
     animation(ul, ul.offsetLeft, -index * imgW, 50, 20);
})

// 自动播放       
var box1 = document.querySelector('.box1');
var id = null;

//设置定时器
function setBom() {
     id = setInterval(function () {
          // 通过程序模拟用户点击按钮
          rbtn.click();
     }, 9000);
     id = null;
}
setBom();

// 添加滚动事件
// $(window).scroll(function () {
//      // 顶部动态图标及下方进度条显示隐藏
//      var topVal = $(document).scrollTop();
//      console.log(topVal);
//      if (topVal > $('.box2').offset().top) {
//           $('.top-logo').stop().fadeIn(1000);
//           $('.slider-progress').stop().fadeOut(1000);
//      } else {
//           $('.top-logo').stop().fadeOut(1000);
//           $('.slider-progress').stop().fadeIn(1000);
//      }

// })
// 添加鼠标离开事件
$('.banner').mouseleave(function () {
     $('.top-logo').stop().fadeIn(1000);
     $('.slider-progress').stop().hide();
})
$('.banner').mouseenter(function () {
     $('.top-logo').stop().fadeOut(1000);
     $('.slider-progress').stop().fadeIn();
})

// 导航栏事件
$('.active').click(function () {
     $('.nav_bkg').stop().slideDown(700);
})
$('.banner,.banner3,.bg,.box5,.box6').click(function () {
     $('.nav_bkg').stop().slideUp(700);
})

// 第三层事件
// 轮播图
var uls = document.querySelector('.banner3 ul');
var imgWs = document.querySelector('.banner3').offsetWidth;
var lbtns = document.querySelector('.lbtn3');
var rbtns = document.querySelector('.rbtn3');
var btnl = document.querySelector('.banner3 .btn-left');
var btnr = document.querySelector('.banner3 .btn-right');


// 注册下一页按钮
var indexs = 0;
rbtns.addEventListener('click', function () {
     if (indexs < 2) {
          indexs++;
          animation(uls, uls.offsetLeft, -indexs * imgWs, 200, 20);
     }

})
// 注册上一页按钮
lbtns.addEventListener('click', function () {
     if (indexs > 0) {
          indexs--;
          animation(uls, uls.offsetLeft, -indexs * imgWs, 200, 20);
     }

})

// 添加鼠标进入事件
var cover = document.querySelector('.cover');
$('.character').hover(function () {
     $(this).find('.cover').stop().animate({
          opacity: 0
     }).parent().siblings().children('.cover').stop().animate({
          opacity: 1
     });
     $(this).find('.mid').stop().animate({
          opacity: 1
     }).parent().siblings().children('.mid').stop().animate({
          opacity: 0
     });
})

// 人物简介点击事件
// var butt = document.querySelectorAll('.butt');
// var cov = document.querySelector('.cov');
// var bg_gif = document.querySelector('.bg_gif');
// var id = null;
// for (var i = 0; i < butt.length; i++) {
//      butt[i].addEventListener('click', function () {
//           cov.style.display = 'block';
//           bg_gif.style.display = 'block';
//           id = setTimeout(function () {
//                bg_gif.style.display = 'none';
//           }, 2000)
//      })
//      id = null;
// }

// 人物简介点击事件
var id = null;
$('.butt').each(function (index, elm) {
     $(elm).click(function () {

          $('.cov').eq(index).show().siblings('.cov').hide();
          $('.bg_gif').show();
          id = setTimeout(function () {
               $('.bg_gif').hide();
          }, 2000)
          id = null;
     })
})


// 人物简介关闭事件
// var c_close = document.querySelector('.c_close');
// c_close.onclick = function () {
//      cov.style.display = 'none';
// }

// 人物简介关闭事件
$('.c_close').click(function () {
     $(this).parent().hide();
})


// 第四层事件
// 引用区域
var quotes = document.querySelector('.list-quotes');

id = setInterval(function () {
     var li=quotes.firstElementChild;
     quotes.appendChild(li);                               
}, 3000)
id = null;


// 第五层事件
// 遮盖层鼠标事件
// 鼠标进入
$('.cov').css('display', 'none');
$('.ho').mouseenter(function () {
     $(this).find('.cov').stop().fadeIn();
});
// 鼠标移除
$('.ho').mouseleave(function () {
     $(this).find('.cov').stop().fadeOut();
})

// 鼠标点击打开图片区
$('.ho').each(function (i, elm) {
     $(elm).click(function () {
          $('.g_cov').eq(i).show().siblings('.cov').hide(); 
     })
})

// 鼠标点击删除图片区
$('.g_close').click(function () {
     $(this).parent().hide();
})

var overflow=document.querySelector('.overflow');
var imgWg = document.querySelector('.gallery').offsetWidth;
var lbtn_g = document.querySelector('.lbtn5');
var rbtn_g = document.querySelector('.rbtn5');
var btnl_g = document.querySelector('.gallery .btn-left');
var btnr_g = document.querySelector('.gallery .btn-right');
// 注册下一页按钮
var indexs = 0;
rbtn_g.addEventListener('click', function () {
     if (indexs < 2) {
          indexs++;
          animation(overflow, overflow.offsetLeft, -indexs * imgWg, 50, 20);
     }

})
// 注册上一页按钮
lbtn_g.addEventListener('click', function () {
     if (indexs > 0) {
          indexs--;
          animation(overflow, overflow.offsetLeft, -indexs * imgWg, 50, 20);
     }

})