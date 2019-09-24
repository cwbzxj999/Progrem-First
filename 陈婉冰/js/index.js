//头部导航li摇晃效果
//获取所有li
var lis = document.querySelectorAll('.nav_center li');
for (var i = 0; i < lis.length; i++) {
    //给每个li注册鼠标进入事件
    lis[i].onmouseenter = function () {
        //排他思想
        var dom = document.querySelector('.a-swing');
        dom.classList.remove('a-swing');
        this.classList.add('a-swing');
    }
}



//动态列表转圈圈
var imgs = document.querySelectorAll('.list_bot img');
var alinks = document.querySelectorAll('.list_bot a');
for (var i = 0; i < alinks.length; i++) {
    //给每个a标签注册鼠标进入事件
    alinks[i].onmouseenter = function () {
        var dom = document.querySelector('.runaround');
        dom.classList.remove('runaround');
        this.firstElementChild.classList.add('runaround');
    }
}

//给四个盒子标题每个a标签加底边框
$(function () {
    $('#o_one a').mouseenter(function () {
        $(this).addClass('table_active').siblings().removeClass('table_active');
    });
    $('#o_two a').mouseenter(function () {
        $(this).addClass('table_active').siblings().removeClass('table_active');
    });

    $('.pic_title a').mouseenter(function () {
        $(this).addClass('table_active').siblings().removeClass('table_active');
    });






    $('.m_one_right img').mouseenter(function () {
        $(this).addClass('img_active');
    })
    $('.m_one_right img').mouseleave(function () {
        $(this).removeClass('img_active');
    })

    $('.pic_con img').mouseenter(function () {
        $(this).addClass('img_active');
    })
    $('.pic_con img').mouseleave(function () {
        $(this).removeClass('img_active');
    })


})


// 鼠标进入显示四个小框子盒子
var item_img = document.querySelectorAll('.m_r_item .item');
for (var i = 0; i < item_img.length; i++) {
    item_img[i].onmouseenter = function () {
        this.querySelector('.pic img').style.transform = 'scale(1.1)';
        this.querySelector('.pic_size').style.display = 'block';
    }
    item_img[i].onmouseleave = function () {
        this.querySelector('.pic img').style.transform = '';
        this.querySelector('.pic_size').style.display = 'none';
    }
}

// 显示底部隐藏二维码

//获取微博标签
var weibo = document.querySelector('.links .weibo');
//获取微信标签
var weixin = document.querySelector('.links .weixin');
//获取span标签
var weibo_span = document.querySelector('.links .weibo_span');
var weixin_span = document.querySelector('.links .weixin_span');



//鼠标进入微博按钮
weibo.onmouseenter = function () {
    weibo_span.style.display = 'block';
}
//鼠标离开
weibo.onmouseleave = function () {
    weibo_span.style.display = 'none';
}
// 鼠标进入微信按钮
weixin.onmouseenter = function () {
    weixin_span.style.display = 'block';
}
//鼠标离开
weixin.onmouseleave = function () {
    weixin_span.style.display = 'none';
}


//  小轮播图
var lbtn = document.querySelector('.news_btn .lbtn');
var rbtn = document.querySelector('.news_btn .rbtn');

var ul_turn = document.querySelector('.news_turn');
var dotted = document.querySelector('.dotted');

// 获取每张图片宽度等于当前盒子宽度
var imgW = document.querySelector('.news_left').offsetWidth;
// 定义一个变量储存索引
var news_index = 0;

// 动态创建小圆点
(function showDotted() {
    for (var i = 0; i < ul_turn.children.length; i++) {
        var span = document.createElement('span');
        if (i == 0) {
            span.className = 'news_active';
        }
        // 给每一个span标签添加一个id值
        span.span_id = i;
        // 注册事件
        span.onclick = span_click;
        // 将小圆点添加到span中
        dotted.appendChild(span);
    }
})();

// 每一个span的点击事件函数
function span_click() {
    news_index = this.span_id;
    if (news_index == 4) {
        news_index = 0;
        ul_turn.style.left = '0px';
    }
    // 点击span要改变ul的位置
    animation(ul_turn, ul_turn.offsetLeft, -news_index * imgW, 50, 20);
    // 给小圆点设置样式
    for (var i = 0; i < dotted.children.length; i++) {
        dotted.children[i].className = '';
    }
    this.className = 'news_active';

}

//开始设置右侧按钮点击事件
rbtn.onclick = function () {
    if (news_index == 4) {
        //代表用户看到的就是复制以后的最后一张
        news_index = 0;
        ul_turn.style.left = '0px';
    }
    news_index++;
    //要改变ul的位置
    animation(ul_turn, ul_turn.offsetLeft, -news_index * imgW, 30, 20);
    //设置小圆点的样式
    setDotted();
}
// 左侧
lbtn.onclick = function () {
    if (news_index == 0) {
        news_index = 4;
        ul_turn.style.left = -news_index * imgW + 'px';
    }
    news_index--;
    animation(ul_turn, ul_turn.offsetLeft, -news_index * imgW, 50, 20);
    setDotted();
}

// 解决最后一张空白，给ul动态添加一个li
var end_li = ul_turn.firstElementChild.cloneNode(true);
ul_turn.appendChild(end_li);

function setDotted() {
    for (var i = 0; i < dotted.children.length; i++) {
        dotted.children[i].className = '';
    }
    if (news_index == 4) {
        dotted.children[0].className = 'news_active';
    } else {
        dotted.children[news_index].className = 'news_active';
    }
}

// 自动播放
var box = document.querySelector('.news_turn');
box.onmouseenter = function () {
    clearInterval(id);
}
box.onmouseleave = function () {
    autoplay();
}
var id = null;

function autoplay() {
    id = setInterval(function () {
        rbtn.click();
    }, 2000)
}
autoplay();


// 侧边固定图片关闭效果
var fix_pic = document.querySelector('.fix_pic');
var close = document.querySelector('.close_btn');

$(function () {
    $('.close_btn').click(function () {
        // $(this).hide();
        $('.fix_pic,.close_btn').animate({
            width: 0,
        });
        // $('.fix_pic').fadeOut();
    });


    $('.nav_btn').click(function () {
        $('.nav_btn_box').toggle();
    })

})


// 给小三角注册点击事件
var span_s = document.querySelector('.nav_btn');
var btn_box = document.querySelector('.nav_btn_box');
var id = '';
span_s.onclick = function () {
    id = setTimeout(function () {
        span_s.lastElementChild.classList.toggle('on');
        // btn_box.classList.toggle('hide');
    })
}