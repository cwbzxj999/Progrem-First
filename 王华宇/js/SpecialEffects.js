// 内容，视频区域特效！！！！！！！！！！！！！！！！！！！！！！！！！！     

//视频区域····················································

// 实现红色圆球特效
//1. 先让副球放大倍数 
//2. 背景颜色改变为黑色
//3. 文字抖动
// 视频区域上鼠标进入小红球球
$('#s3').mouseover(function () {
    // 放大副球背熟
    $('#ss3').addClass('sss3');
    // 背景颜色
    $('#a1').css({
        background: '#000'
    });

    $('#a1').addClass('aa1');

});
// 视频区域鼠标离开小红球球
$('#s3').mouseout(function () {
    // 放大副球背熟
    $('#ss3').removeClass('sss3');

    // 背景颜色
    $('#a1').css({
        background: 'red'
    });

    $('#a1').removeClass('aa1');
});


//视频区域鼠标进入小图标
$('#s4').mouseover(function () {
    $('#s4 a').addClass('a_img');
    $('.ss4').addClass('sss4');
    $('#s6').addClass('ss6');
});
//视频区域鼠标离开小图标
$('#s4').mouseout(function () {
    $('#s4 a').removeClass('a_img');
    $('.ss4').removeClass('sss4');
    $('#s6').removeClass('ss6');
});




// 内容区域左边图片·············································
// 内容区域左图片上鼠标进入小红球球
$('#p3').mouseover(function () {
    // 放大副球背熟
    $('#pp3').addClass('ppp3');
    // 背景颜色
    $('#pp4').css({
        background: '#000'
    });

    $('#pp4').addClass('sp_sp');

    // $('#a1').addClass('aa1');

});
// 内容区域左图片上视频上鼠标离开小红球球
$('#p3').mouseout(function () {
    // 放大副球背熟
    $('#pp3').removeClass('ppp3');

    // 背景颜色
    $('#pp4').css({
        background: 'red'
    });

    $('#pp4').removeClass('sp_sp');
});



// 内容区域左图片鼠标进入 圆圈 实现放大效果

$('.l_text,#p3,#pp3').mouseover(function () {

    $('.round1').stop().css({
        transform: 'scaleX(1.4)',
        transition: 'all .15s linear',
        height: '510px'
    });

    $('.round11').stop().css({
        // display : 'block',
        transform: 'scale(2.4)',
        transition: 'all .15s linear',
        height: '510px',
        opacity: '.5'
    });

    $('.l_img').stop().css({
        overflow: 'hidden'
    });

    $('#p3').stop().animate({
        top: 520
    }, 150);

    $('#pp3').stop().animate({
        top: 520
    }, 150);

    $('#pp4').stop().animate({
        top: 560
    }, 150);

    $('#ppp').stop().show(500);

});

// 内容区域左图片鼠标离开 圆圈
$('.l_text,#p3,#pp3').mouseout(function () {

    $('.round1').stop().css({
        transform: 'scaleX(1)',
        transition: 'all .15s linear',
        height: '380px'
    });

    $('.round11').stop().css({
        transform: 'scale(1)',
        transition: 'all 0.13s linear',
        height: '380px',
        // display : 'none'
        opacity: '0'
    });

    $('.l_img').stop().css({
        overflow: 'none'
    });

    $('#p3').stop().animate({
        top: 400
    }, 150);

    $('#pp3').stop().animate({
        top: 400
    }, 150);

    $('#pp4').stop().animate({
        top: 440
    }, 150);

    $('#ppp').stop().hide(400);

});




//内容区域中上图片区域···········································
// 内容区域鼠标进入中上圆圈放的副圆圈2倍 主圆圈1.5倍
$('.yincang').mouseover(function () {
    $('.yinsi').addClass('yinsi1');
    $('.yinsi2').addClass('yinsi22');
    $('#m_pp').stop().show(500);
    $('#pp1,#pp11').stop().animate({
        left: 373
    }, 200)
});
// 内容区域鼠标离开中上图片上的圆圈
$('.yincang').mouseout(function () {
    $('.yinsi').removeClass('yinsi1');
    $('.yinsi2').removeClass('yinsi22');
    $('#m_pp').stop().hide(400);
    $('#pp1,#pp11').stop().animate({
        left: 410
    }, 200)
});

// 内容区域鼠标进入中上图片上的红球球

$('#pp1').mouseover(function () {
    $('.span_s').css({
        background: '#000'
    })
    $('.span_s').addClass('span__s');

    $('#pp11').addClass('pp11');
});

// 内容区域鼠标离开中上图片上的红球球

$('#pp1').mouseout(function () {
    $('.span_s').css({
        background: 'red'
    })
    $('.span_s').removeClass('span__s');

    $('#pp11').removeClass('pp11');
});





// 内容区域下图片区域············································

// 内容区域鼠标进入下圆圈放的副圆圈2倍 主圆圈1.5倍
$('.yincang1').mouseover(function () {
    $('.cang1').addClass('cang11');
    $('.cang2').addClass('cang22');
    $('#big_p').stop().show(500);
    $('#pp2, #pp22').stop().animate({
        left: 533
    }, 200)

});
// 内容区域鼠标离开下图片上的圆圈
$('.yincang1').mouseout(function () {
    $('.cang1').removeClass('cang11');
    $('.cang2').removeClass('cang22');
    $('#big_p').stop().hide(400);
    $('#pp2, #pp22').stop().animate({
        left: 570
    }, 200)
});


// 内容区域鼠标进入下图片上的红球球

$('#pp2').mouseover(function () {
    $('.span_p').css({
        background: '#000'
    })
    $('.span_p').addClass('span__p');

    $('#pp22').addClass('pp22');
});

// 内容区域鼠标离开下图片上的红球球

$('#pp2').mouseout(function () {
    $('.span_p').css({
        background: 'red'
    })
    $('.span_p').removeClass('span__p');

    $('#pp22').removeClass('pp22');
});




// 地球转动区域！！！！！！！！！！！！！！！！！！！！！！！！！！！！！

// 鼠标进去第一张图片·········································

$('.e_img_one').mouseover(function () {
    $('.e_text_one').stop().animate({
        top: 114,
        left: 0
    }, 150, 'linear');
    $(this).find('p').stop().fadeIn(700);
    $(this).find('img').animate({
        top: 5,
        left: 5
    }, 20)
});

//鼠标离开第一张图片           

$('.e_img_one').mouseout(function () {
    $('.e_text_one').stop().animate({
        top: 266
    }, 150, 'linear');
    $(this).find('p').stop().fadeOut(200);
    $(this).find('img').animate({
        top: 0,
        left: 5
    }, 100)
});






// 鼠标进去第二张图片·········································

$('.e_img_two').mouseover(function () {
    $('.e_text_two').stop().animate({
        top: 114,
        left: 0
    }, 150, 'linear');
    $(this).find('p').stop().fadeIn(700);
    $(this).find('img').animate({
        top: 5,
        left: 5
    }, 20)
});

//鼠标离开第二张图片           

$('.e_img_two').mouseout(function () {
    $('.e_text_two').stop().animate({
        top: 266
    }, 150, 'linear');
    $(this).find('p').stop().fadeOut(200);
    $(this).find('img').animate({
        top: 0,
        left: 5
    }, 100)
});




// 鼠标进去第三张图片·········································

$('.e_img_three').mouseover(function () {
    $('.e_text_three').stop().animate({
        top: 114,
        left: 0
    }, 150, 'linear');
    $(this).find('p').stop().fadeIn(700);
    $(this).find('img').animate({
        top: 5,
        left: 5
    }, 20)
});

//鼠标离开第三张图片           

$('.e_img_three').mouseout(function () {
    $('.e_text_three').stop().animate({
        top: 266
    }, 150, 'linear');
    $(this).find('p').stop().fadeOut(200);
    $(this).find('img').animate({
        top: 0,
        left: 5
    }, 100)
});

// 调用
function Rotate() {
    this.initialize.apply(this, arguments);
}
// 原型
Rotate.prototype = {
    // 这个类的构造函数
    initialize: function (id) {
        var _this = this;
        // 判断类型
        this.wrap = typeof id === "string" ? document.getElementById(id) : id;
        // 获取元素了 把获取的元素放到定义的容器中
        this.oUl = this.wrap.getElementsByTagName("ul")[0];
        this.aLi = this.wrap.getElementsByTagName("li");
        this.prev = this.wrap.getElementsByTagName("pre")[0];
        this.next = this.wrap.getElementsByTagName("pre")[1];
        this.time = null;
        this.a = [];
        // 定一个值
        this.num = 3;
        this._doPrev = function () {
            // 劫持当前对象方法 返回出去把
            return _this.doPrev.apply(_this)
        };
        this._doNext = function () {
            return _this.doNext.apply(_this)
        };
        this.options = [{
            width: 240,
            height: 389,
            top: 152,
            left: 0,
            zIndex: 1
        }, {
            width: 240,
            height: 389,
            top: 152,
            left: 0,
            zIndex: 2
        }, {
            width: 240,
            height: 389,
            top: 152,
            left: 150,
            zIndex: 3
        }, {
            width: 240,
            height: 445,
            top: 124,
            left: 338,
            zIndex: 4
        }, {
            width: 240,
            height: 389,
            top: 152,
            left: 618,
            zIndex: 3
        }, {
            width: 240,
            height: 389,
            top: 152,
            left: 784,
            zIndex: 2
        }, {
            width: 240,
            height: 389,
            top: 152,
            left: 400,
            zIndex: 1
        }, ];
        // 循环遍历li 让li索引值和这个空数组绑定
        for (var i = 0; i < this.aLi.length; i++) this.a[i] = this.aLi[i];
        // 在这个新数组的开头添加 要把这个里面值清了 要做后面的值
        this.a.unshift(this.a.pop());
        // 调用一下
        this.setUp();
        // 给当前的prev添加点击事件
        this.addEvent(this.prev, "click", this._doPrev);
        this.addEvent(this.next, "click", this._doNext);
        this.doImgClick();
        this.time = setInterval(function () {
            _this.doNext()
        }, 1500);
        this.wrap.onmouseover = function () {
            clearInterval(_this.time)
        };
        this.wrap.onmouseout = function () {
            _this.time = setInterval(function () {
                _this.doNext()
            }, 1500);
        }
    },
    doPrev: function () {
        this.a.unshift(this.a.pop());
        this.setUp()
    },
    doNext: function () {
        this.a.push(this.a.shift());
        this.setUp()
    },
    doImgClick: function () {
        var _this = this;
        for (var i = 0; i < this.a.length; i++) {
            this.a[i].onclick = function () {
                if (this.index > _this.num) {
                    for (var i = 0; i < this.index - _this.num; i++) _this.a.push(_this.a.shift());
                    _this.setUp()
                } else if (this.index < _this.num) {
                    for (var i = 0; i < _this.num - this.index; i++) _this.a.unshift(_this.a.pop());
                    _this.setUp()
                }
            }
        }
    },
    setUp: function () {
        var _this = this;
        var i = 0;
        for (i = 0; i < this.a.length; i++) this.oUl.appendChild(this.a[i]);
        for (i = 0; i < this.a.length; i++) {
            this.a[i].index = i;
            if (i < 7) {
                this.css(this.a[i], "display", "block");
                this.doMove(this.a[i], this.options[i], function () {
                    _this.doMove(_this.a[_this.num].getElementsByTagName("img")[0], {
                        opacity: 100
                    }, function () {
                        _this.doMove(_this.a[_this.num].getElementsByTagName("img")[0], {
                            opacity: 100
                        }, function () {
                            _this.a[_this.num].onmouseover = function () {
                                _this.doMove(this.getElementsByTagName("div")[0], {
                                    bottom: 0
                                })
                            };
                            _this.a[_this.num].onmouseout = function () {
                                _this.doMove(this.getElementsByTagName("div")[0], {
                                    bottom: -100
                                });
                            }
                        })
                    })
                });
            } else {
                this.css(this.a[i], "display", "none");
                this.css(this.a[i], "width", 0);
                this.css(this.a[i], "height", 0);
                this.css(this.a[i], "top", 152);
                this.css(this.a[i], "left", this.oUl.offsetWidth / 2)
            }
            if (i < this.num || i > this.num) {
                this.css(this.a[i].getElementsByTagName("img")[0], "opacity", 30)
                this.a[i].onmouseover = function () {
                    _this.doMove(this.getElementsByTagName("img")[0], {
                        opacity: 100
                    })
                };
                this.a[i].onmouseout = function () {
                    _this.doMove(this.getElementsByTagName("img")[0], {
                        opacity: 35
                    })
                };
                this.a[i].onmouseout();
            } else {
                this.a[i].onmouseover = this.a[i].onmouseout = null;
            }
        }
    },
    addEvent: function (oElement, sEventType, fnHandler) {
        return oElement.addEventListener ? oElement.addEventListener(sEventType, fnHandler, false) : oElement.attachEvent("on" + sEventType, fnHandler)
    },
    css: function (oElement, attr, value) {
        if (arguments.length == 2) {
            return oElement.currentStyle ? oElement.currentStyle[attr] : getComputedStyle(oElement, null)[attr]
        } else if (arguments.length == 3) {
            switch (attr) {
                case "width":
                case "height":
                case "top":
                case "left":
                case "bottom":
                    oElement.style[attr] = value + "px";
                    break;
                default:
                    oElement.style[attr] = value;
                    break
            }
        }
    },
    doMove: function (oElement, oAttr, fnCallBack) {
        var _this = this;
        clearInterval(oElement.time);
        oElement.time = setInterval(function () {
            var bStop = true;
            for (var property in oAttr) {
                var iCur = parseFloat(_this.css(oElement, property));
                property == "opacity" && (iCur = parseInt(iCur.toFixed(2) * 100));
                var iSpeed = (oAttr[property] - iCur) / 5;
                iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
                if (iCur != oAttr[property]) {
                    bStop = false;
                    _this.css(oElement, property, iCur + iSpeed)
                }
            }
            if (bStop) {
                clearInterval(oElement.time);
                fnCallBack && fnCallBack.apply(_this, arguments)
            }
        }, 30)
    }
};

// 鼠标进去第四张图片·········································

$('.e_img_four ').mouseover(function () {
    $('.e_text_four').stop().animate({
        top: 114,
        left: 0
    }, 150, 'linear');
    $(this).find('p').stop().fadeIn(700);
    $(this).find('img').animate({
        top: 5,
        left: 5
    }, 20)
});

//鼠标离开第四张图片           

$('.e_img_four ').mouseout(function () {
    $('.e_text_four').stop().animate({
        top: 266
    }, 150, 'linear');
    $(this).find('p').stop().fadeOut(200);
    $(this).find('img').animate({
        top: 0,
        left: 5
    }, 100)
});




// 轮播图区域！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！






// 轮播图购物车区域！！！！！！！！！！！！！！！！！！！！！！！！！！
// 点击轮播图人物

// 点击当前图片 显示对应的div

$('#ro_img1').click(function () {
    $('.shop_one').slideDown(1000);
});
$('.shop_one #sp3').click(function () {
    $('.shop_one').fadeOut(1000);
});


$('#ro_img2').click(function () {
    $('.shop_two').slideDown(1000);
});
$('.shop_two #sp3').click(function () {
    $('.shop_two').fadeOut(1000);
});


$('#ro_img3').click(function () {
    $('.shop_three').slideDown(1000);
});
$('.shop_three #sp3').click(function () {
    $('.shop_three').fadeOut(1000);
});


$('#ro_img4').click(function () {
    $('.shop_four').slideDown(1000);
});
$('.shop_four #sp3').click(function () {
    $('.shop_four').fadeOut(1000);
});


$('#ro_img5').click(function () {
    $('.shop_five').slideDown(1000);
});
$('.shop_five #sp3').click(function () {
    $('.shop_five').fadeOut(1000);
});


$('#ro_img6').click(function () {
    $('.shop_six').slideDown(1000);
});
$('.shop_six #sp3').click(function () {
    $('.shop_six').fadeOut(1000);
});


$('#ro_img7').click(function () {
    $('.shop_seven').slideDown(1000);
});
$('.shop_seven #sp3').click(function () {
    $('.shop_seven').fadeOut(1000);
});



// 导航栏右侧红盒子特效！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！1


$('.red_box ').mouseover(function () {
    $(this).css({
        // background : 'red'
        background: 'rgba(255, 255, 255, .1)'
    }).addClass('red_o');
});
$('.red_box ').mouseout(function () {
    $(this).css({
        background: ''
    }).removeClass('red_o');
});


$('.red_box_sm ').mouseover(function () {
    $(this).css({
        background: '#000'
        // background : ''
    }).addClass('red_box_sssm');
});
$('.red_box_sm ').mouseout(function () {
    $(this).css({
        background: ''
    }).removeClass('red_box_sssm');
});

// 底部视频!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!111111111

// // 鼠标进入voo视频 弹出隐藏图
$('#voo').mouseover(function () {
    $('.imgaa').animate({
        top: 0
    }, 10);
    $('.imgaa').slideDown(200);
});
// 鼠标离开voo视频 隐藏图
$('#voo').mouseout(function () {
    $('.imgaa').animate({
        top: 0
    }, 10);
    $('.imgaa').fadeOut(200);
});



// // 鼠标进入voo视频 弹出隐藏图
$('#vdd').mouseover(function () {
    $('.imgbb').animate({
        top: 0
    }, 10);
    $('.imgbb').slideDown(200);
});
// 鼠标离开voo视频 隐藏图
$('#vdd').mouseout(function () {
    $('.imgbb').animate({
        top: 0
    }, 10);
    $('.imgbb').fadeOut(200);
});



// // 鼠标进入voo视频 弹出隐藏图
$('#vbb').mouseover(function () {
    $('.imgcc').animate({
        top: 0
    }, 10);
    $('.imgcc').slideDown(200);
});
// 鼠标离开voo视频 隐藏图
$('#vbb').mouseout(function () {
    $('.imgcc').animate({
        top: 0
    }, 10);
    $('.imgcc').fadeOut(200);
});



// 点击视频弹出大视频 并且有遮挡层
// 1111111111
$('#voo').click(function () {
    $('.fix_video1').stop().fadeIn();
    $('.y').addClass('yy');

})

// 点击删除按钮移除类名
$('#img_data1').click(function () {
    $('.y').removeClass('yy');
    $('.fix_video1').stop().fadeOut();
    $('#video_a')[0].pause();
});
//22222222222
$('#vdd').click(function () {
    $('.fix_video2').stop().fadeIn();
    $('.y').addClass('yy');
})

// 点击删除按钮移除类名
$('#img_data2').click(function () {
    $('.fix_video2').stop().fadeOut();
    $('.y').removeClass('yy');
    $('#video_b')[0].pause();
});
//33333333333
$('#vbb').click(function () {
    $('.fix_video3').stop().fadeIn();
    $('.y').addClass('yy');
})

// 点击删除按钮移除类名
$('#img_data3').click(function () {
    $('.fix_video3').stop().fadeOut();
    $('.y').removeClass('yy');
    $('#video_c')[0].pause();
});


// 底部动画 ！！！！！！！！！！！！！！！！！！！！！！！！！！1

$('#foot_img5').mouseover(function () {
    $('#foot_img5').addClass('foot_img77');
});
$('#foot_img5').mouseout(function () {
    $('#foot_img5').removeClass('foot_img77');
});



// 页面到达一个区域文字闪动
// 1111111111111111111111111111111111
showPlay();

function showPlay() {
    // 页面滚动出去一段距离，让电梯导航显示
    // 获取卷起距离
    var topVal = $(document).scrollTop();

    // 判断
    if (topVal >= $('.video_big_box1').offset().top - 500) {
        // 让盒子显示
        $('.video_big_box1 .l_vid_tx').children().addClass('dong_text');
    } else {
        $('.video_big_box1 .l_vid_tx').children().removeClass('dong_text');
    }
}
// 22222222222222222222222222222222222222222222
showPlay1();

function showPlay1() {
    // 页面滚动出去一段距离，让电梯导航显示
    // 获取卷起距离
    var topVal = $(document).scrollTop();

    // 判断
    if (topVal >= $('.video_big_box2').offset().top - 500) {
        // 让盒子显示
        $('.video_big_box2 .m_vid_tx').children().addClass('dong_text1');
    } else {
        $('.video_big_box2 .m_vid_tx').children().removeClass('dong_text1');
    }
}

// 333333333333333333333333333333333333333333333333
showPlay2();

function showPlay2() {
    // 页面滚动出去一段距离，让电梯导航显示
    // 获取卷起距离
    var topVal = $(document).scrollTop();

    // 判断
    if (topVal >= $('.video_big_box3').offset().top - 500) {
        // 让盒子显示
        $('.video_big_box3 .b_vid_tx').children().addClass('dong_text2');
    } else {
        $('.video_big_box3 .b_vid_tx').children().removeClass('dong_text2');
    }
}


// 添加滚动事件，加给window
$(window).scroll(function () {

    showPlay();
    showPlay1();
    showPlay2();
});






// 切换语言区域！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！

var flag = true;
$('.foot_top').on('click', function () {
    if(flag == true) {
    $('.none_yuyan').slideDown();
    $('#footer_bx').css({
        zIndex: 0
    })
    $('#foot_img5').css({
        zIndex: 0
    })
    flag = false;
    } else {
        $('.none_yuyan').fadeOut();
    $('#footer_bx').css({
        zIndex: 3
    })
    $('#foot_img5').css({
        zIndex: 3
    })
    flag = true;
    }
    
});


// 点击其他a标签弹框
$('.none_yuyan a').each(function (i, elm) {
    $(elm).click(function () {
        if ($(elm).prop('id') != 'a_tiao') {
            alert('暂不支持，敬请期待！');
        }
    })
});