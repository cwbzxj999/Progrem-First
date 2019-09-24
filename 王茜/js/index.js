//topnav 高亮显示


    $('.nav_left li').hover(function () {
        console.log(1);
        

        $(this).siblings().stop().fadeTo(300, 0.5);

    },function () {

        $(this).siblings().stop().fadeTo(300,1);

    });



    
//box1 里两个button 加晃动效果 
var body_box = document.querySelector('.body_box video');
var btn_l = document.querySelector('.box1 .a_l');
var btn_r = document.querySelector('.box1 .a_r');

    body_box.onmouseenter = function() {
        // console.log(1);
        btn_l.style.animation = 'rotate1 1s linear infinite'
        btn_r.style.animation = 'rotate1 1s linear infinite'
    }
    body_box.onmouseleave = function() {
        // console.log(1);
        btn_l.style.animation = '';
        btn_r.style.animation = '';
    }


// 侧边固定导航效果实现


$('.ce').mouseenter(function() {
    // console.log( $('.ce li').eq(this));
    $(this).find('li').stop().animate({
        width:135
    },500)
     
})
$('.ce').mouseleave(function() {
    // console.log( $('.ce li').eq(this));
    $(this).find('li').stop().animate({
        width:35
    },500)
     
})

$('.ce').on('mouseenter', 'li', function () {
    $(this).find('i').stop().animate({
        width: 100
    }, 200)
})
$('.ce').on('mouseleave', 'li', function () {
    $(this).find('i').stop().animate({
        width: 0
    }, 200)
})






//新闻部分遮罩盒子效果实现
$('.pub').mouseenter(function () {
    $(this).find('.public').stop().animate({
        top: 0,
        height: 180
    }, 200)
})
$('.pub').mouseleave(function () {
    $(this).find('.public').stop().animate({
        top: 130,
        height: 50
    }, 200)
})

// var box3 = document.querySelector('.box3 .pub');0
// var box3_pub = document.querySelector('.box3 .text1');

// box3.onmouseenter = function() {
//     box3_pub.innerText = 'aaaaaaa';
// }
// box3.onmouseleave = function() {

// }





//查看全部新闻按钮效果实现
$('.box3 .btn1').mouseenter(function () {
    $(this).siblings('i').stop().animate({
        width: 180
    }, 300)
})
$('.btn .btn1').mouseleave(function () {


    $(this).siblings('i').stop().animate({
        width: 0
    }, 300)
})

//鼠标进入英雄小图 小图放大1.2倍  并且上面大图跟着变
var heros = document.querySelectorAll('.heros li');

var simg = document.querySelectorAll('.heros img');
// console.log(simg);   


//鼠标进入英雄小图 小图放大1.2倍
for (var i = 0; i < heros.length; i++) {
    // console.log(heros[0]);

    heros[i].onmouseenter = function () {
        this.classList.add('fd');
        this.lastElementChild.previousElementSibling.style.display = 'block';
        this.style.background = 'orange';
    }
    heros[i].onmouseleave = function () {
        this.classList.remove('fd');
        this.lastElementChild.previousElementSibling.style.display = 'none';
        this.style.background = ' rgba(51,51,51,.9)';

    }

}

var bimg = document.querySelector('.bg img');
// console.log(bimg.src);
var bimg_newsrc = bimg.src.substr(bimg.src.lastIndexOf('/') + 1);
// console.log(bimg_newsrc);

var hores_ul = document.querySelector('.heros');

hores_ul.onmouseenter = function () {
    for (var i = 0; i < simg.length; i++) {
        simg[i].onmouseenter = function () {
            //   console.log(this.src);
            var src = this.src;
            // console.log(src);
            var new_src = src.substr(src.lastIndexOf('/') + 1);
            // console.log(new_src);
            var bimg_newsrc = 'd' + new_src;
            // bimg.src = " 'img/'+ bimg_newsrc";
            // bimg.src=" img/dh19.png " 
            var bimg_newsrc = 'd' + new_src;

            bimg.src = "img/" + bimg_newsrc;
            // console.log(bimg_newsrc);
        }

    }

}


// 鼠标移入li   获取box5中 heros中 span里面的文字内容 把他赋值给  hero sp1 em 中 让他在上面对应区域显示

$('.heros li').mouseenter(function () {

    //鼠标进入li 上面盒子显示对应英雄的名字
    var a = $(this).find('.name').text();
    //  console.log(a);
    $('.hero .sp1 em').text(a);

    //鼠标进入li 上面盒子显示对应英雄的介绍
    var b = $(this).find('.jieshao').text();
    // console.log(b);
    $('.hero .sp2').text(b);

})



//top键  滚动条距离到300出现
$(window).scroll(function () {

    var a = $('body,html').scrollTop();

    if (a >= 300) {
        $('.btn_top').fadeIn();
    } else {
        $('.btn_top').fadeOut();
    }
})


//暂停键  来回切换图片 点击视频暂停
var videL = document.getElementById('video-bg');
var button = document.getElementById('button');

var img1 = document.querySelector('.box2 .img1');

button.onclick = function() {
    // console.log(img1.src);
    var src =img1.src;
            // console.log(src);
    var new_src = src.substr(src.lastIndexOf('/') + 1);
    // console.log(new_src);
    if(new_src == 'zt.png') {
        img1.src = "img/bf.png";
        // console.log( img1.src);
    }else {
        img1.src = "img/zt.png";
    }
    if (videL.paused) {
        videL.play();
    } else {
        videL.pause();
    }
    

}
  
    // if (button.style.background = 'url("img/zt.png")') {
    //     button.style.background = 'url("img/bf.png")';
    //     button.style.backgroundSize = 'cover';
        
    // // }else {
    // //     // console.log(1);
        
    // //     button.classList.remove('box2_cover');
    // //     button.classList.add('box2');
    // }else {
    //     console.log();
        
    //     button.style.background = 'url("img/zt.png") no-repeat'
    //               button.style.backgroundSize = 'cover';
    // }


//     if (button.style.background = 'url("img/bf.png")' ) {
//         button.onclick = function () {
//           button.style.background = 'url("img/zt.png") no-repeat'
//           button.style.backgroundSize = 'cover';
//     } 
//  }


//box6  新闻盒子边框特效
$(".remen ul li").hover(function () {
    var index = $(this).index();
    $(".jia").eq(index).stop().animate({
        "width": "318px"
    }, 600);
    $(".wb").eq(index).stop().animate({
        "width": "318px"
    }, 600);
    $(".hl").eq(index).stop().animate({
        "height": "180px"
    }, 600);
    $(".hr").eq(index).stop().animate({
        "height": "180px"
    }, 600);
    $(".bd").eq(index).css({
        "display": "none"
    });
    $(".remen ul li a").eq(index).css({
        "display": "block"
    });
}, function () {
    $(".bd").css({
        "display": "block"
    });
    $(".remen ul li a").css({
        "display": "none"
    });
    $(".wb").stop().animate({
        "width": 0
    }, 1000);
    $(".hl").stop().animate({
        "height": 0
    }, 1000);
    $(".hr").stop().animate({
        "height": 0
    }, 1000);
    $(".jia").stop().animate({
        "width": 0
    }, 1000);
});






