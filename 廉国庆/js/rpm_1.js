// 轮播图
window.onload = function () {

    // 获取这个大盒子
    var main_container = document.querySelector('.main_container');
    // 获取按钮
    // 右面
    var right_btn = document.querySelector('.right_btn');
    // 左面
    var left_btn = document.querySelector('.left_btn');
    // 获取ul   检测他的长度
    var main_container_ul = document.querySelector('.main_container ul');
    // 获取每一张ing的宽度
    var main_container_imgW = document.querySelector('.main_container .features_slider').offsetWidth;
    // 获取小圆点的父节点
    var main_container_bottom = document.querySelector('.main_container_bottom');

    // 定义一个变量类维护索引值
    var pageIndex = 0;

    // 动态创建小圆点
    (function showDotteds() {
        for (var i = 0; i < main_container_ul.children.length; i++) {
            var span = document.createElement('span');
            // 当前i=0 的时候给小圆点赋值样式
            if (i == 0) {
                span.className = 'active';
            }
            // 给每个span注册一个事件
            span.span_id = i;
            span.onclick = move;
            // 给每个span标签动态添加绑定一个ID值(pageIndex对应的值)
            main_container_bottom.appendChild(span);
        }
    })();

    // 点击span标签
    // 给每个span注册点击事件
    function move() {
        pageIndex = this.span_id;
        console.log(pageIndex)
        // 要改变ul的位置
        animation(main_container_ul,
            main_container_ul.offsetLeft, -pageIndex * main_container_imgW, 671, 0);
        // 点击的时候调用小圆点移动的样式
        set_main_container_bottom();
    }

    // 下一步   点击a标签的样式
    // 右面
    right_btn.onclick = function () {
        pageIndex++;
        if (pageIndex == 4) {
            pageIndex = 0;
            main_container_ul.style.left = '0px';
        }
        animation(main_container_ul, main_container_ul.offsetLeft, -pageIndex * main_container_imgW, 680, 20);
        set_main_container_bottom();
    }

    //左面
    left_btn.onclick = function () {
        if (pageIndex == 0) {
            pageIndex = 4;
            main_container_ul.style.left = -pageIndex * main_container_imgW; + 'px';
        }
        pageIndex--;
        animation(main_container_ul, main_container_ul.offsetLeft, -pageIndex * main_container_imgW, 680, 20);
        set_main_container_bottom();
    }

    // firstElementChild: 获取父元素中第一个子元素
    // cloneNode  克隆节点
    // true 可以克隆当前标签的内容
    var fs_li = main_container_ul.firstElementChild.cloneNode(true);
    //    appendChild : 在父元素末尾添加一个子元素
    main_container_ul.appendChild(fs_li);

    //    点点的样式
    // 当点击左右键的时候点点动
    function set_main_container_bottom() {
        // 先去掉点点样式
        for (var i = 0; i < main_container_bottom.children.length; i++) {
            main_container_bottom.children[i].className = '';
        }
        if (pageIndex == 4) {
            main_container_bottom.children[0].className = 'active';
        } else {
            main_container_bottom.children[pageIndex].className = 'active';
        }
    }

    // 定时器   使它实现自动播放
    var time_id = null;
    // 鼠标进入  
    main_container.onmouseenter = function () {
        clearInterval(time_id)
    }
    //鼠标离开的事件
    main_container.onmouseleave = function () {
        autoplay();
    }

    function autoplay() {
        time_id = setInterval(function () {
            //通过程序模拟用户点击右侧按钮
            right_btn.click();
        }, 2000);
    }




    // 介绍  
    var sections_li = document.querySelectorAll('.sections_introduce li');
    getDisplay_block(sections_li);




    //    新闻
    var Journalism_summary = document.querySelectorAll('.Journalism_content');
    getDisplay_block(Journalism_summary);

    function getDisplay_block(display) {
        for (var i = 0; i < display.length; i++) {
            display[i].onmouseenter = function () {
                this.querySelector('.summary').style.display = 'block';
            }
            display[i].onmouseleave = function () {
                this.querySelector('.summary').style.display = 'none';
            }
        }
    }




    // 阅读更多
    var sections_Read_box = document.querySelectorAll('.sections_Read_box');
    for (var i = 0; i < sections_Read_box.length; i++) {
        sections_Read_box[i].onmouseenter = function () {
            // 图片
            this.querySelector('img').style.transform = 'scale(1.2)';
            // +号盒子
            this.querySelector('.sections_Read_box_Z').style.width = '260px';
            // 文字
            this.querySelector('p').innerHTML = '阅读更多+';
        }
        sections_Read_box[i].onmouseleave = function () {
            this.querySelector('img').style.transform = '';
            // +号盒子
            this.querySelector('.sections_Read_box_Z').style.width = '';
            this.querySelector('p').innerHTML = '+';
        }
    }
    // 下面
    var Read_bottom = document.querySelector('.Read_bottom');
    Read_bottom.onmouseenter = function () {
        Read_bottom.querySelector('p').style.color = '#ccc';
        var back = Read_bottom.lastElementChild.lastElementChild;
        animation(back, 0, 400, 50, 0.1);
    }
    Read_bottom.onmouseleave = function () {
        Read_bottom.querySelector('p').style.color = '';
        var back = Read_bottom.lastElementChild.lastElementChild;
        animation(back, 400, 50, 150, 0);
    }

    // 季票
    // 获取按钮 
    // 向右移动
    var Season_ticket_right = document.querySelector('.Season_ticket_right');
    // 向左移动
    var Season_ticket_left = document.querySelector('.Season_ticket_left');
    //  上面总共的长度
    var Season_ticket_top_img = document.querySelector('.Season_ticket_top_img');
    //  获取img的宽度
    var St_t = document.querySelector('.St_t').offsetWidth;
    // 获取下面的图片
    var st_clicks = document.querySelectorAll('.st_clicks');
    // 定义一个变量
    var pageIndexW = 0;
    // 点击下面的小图
    for (var i = 0; i < st_clicks.length; i++) {
        // 循环的时候把所有的索引值保存到每个st_clicks的自定义属性中;
        st_clicks[i].setAttribute('index', i);
        st_clicks[i].onclick = function () {
            pageIndexW = this.getAttribute('index');
            animation(Season_ticket_top_img, Season_ticket_top_img.offsetLeft, -pageIndexW * St_t, 242, 0);
            st_clicks_dong();
        }
    }
    // 进去多出的12像素
    var St_t = St_t - 12;
    // 点击右面
    Season_ticket_right.onclick = function () {
        pageIndexW++;
        if (pageIndexW == 25) {
            pageIndexW = 0;
            Season_ticket_top_img.style.left = '0px';
        }
        animation(Season_ticket_top_img, Season_ticket_top_img.offsetLeft, -pageIndexW * St_t, 100, 20);
        st_clicks_dong();
    }
    // // 点击左面
    Season_ticket_left.onclick = function () {
        if (pageIndexW == 0) {
            pageIndexW = 25;
            Season_ticket_top_img.style.left = -pageIndexW * St_t + 'px';
        }
        pageIndexW--;
        animation(Season_ticket_top_img, Season_ticket_top_img.offsetLeft, -pageIndexW * St_t, 100, 20);
        st_clicks_dong();
    }
    // 克隆
    var fs_st = Season_ticket_top_img.firstElementChild.cloneNode(true);
    Season_ticket_top_img.appendChild(fs_st);

    // 上下联立
    function st_clicks_dong() {
        // 先去掉点点样式
        for (var i = 0; i < st_clicks.length; i++) {
            st_clicks[i].classList.remove('St_back');
        }
        st_clicks[pageIndexW].classList.add('St_back');
    }




    // 游戏
    // 后面盒子
    var Game_box_top = document.querySelector('.Game_box_top ul');
    // 后面盒子的每一张img
    var Game_top_img = document.querySelectorAll('.Game_box_top li');
    // 后面盒子的每一张img的高度
    var Game_top_imgH = document.querySelector('.Game_box_top li img').offsetHeight;
    // 前面盒子
    var Game_box_right = document.querySelector('.Game_box_right');
    // 前面盒子的每一张img
    var Game_right_img = document.querySelectorAll('.Game_box_right li');
    // 下面小圆点
    var Game_center_span = document.querySelectorAll('.Game_center span');
    // 定义一个变量类维护索引值
    var Game_pageIndex;
    for (var i = 0; i < Game_center_span.length; i++) {
        // console.log(Game_top_img[i]);
        (function (i) {
            Game_center_span[i].onclick = function () {
                for (var j = 0; j < Game_center_span.length; j++) {
                    Game_center_span[j].classList.remove('active');
                    Game_right_img[j].style.display = 'none';
                }
                Game_pageIndex = i;
                this.classList.add('active');
                Game_right_img[i].style.display = 'block';
                animation_Game(Game_box_top,
                    Game_box_top.offsetTop, -Game_pageIndex * Game_top_imgH, 200, 0.1);
            }
        })(i);
    }
    // // 定时器   使它实现自动播放
    // var time_id = null;
    // // 鼠标进入  
    // main_container.onmouseenter = function () {
    //     clearInterval(time_id);
    // }
    // //鼠标离开的事件
    // main_container.onmouseleave = function () {
    //     autoplay();
    // }

    // function autoplay() {
    //     time_id = setInterval(function () {
    //         //通过程序模拟用户点击右侧按钮
    //         Game_center_span.click();
    //     }, 2000);
    // }
    // function fadeIn(element, speed) {
    //     if (element.style.opacity != 1) {
    //         var speed = speed || 30;
    //         var num = 0;
    //         var st = setInterval(function () {
    //             num++;
    //             element.style.opacity = num / 10;
    //             if (num >= 10) {
    //                 clearInterval(st);
    //             }
    //         }, speed);
    //     }
    // }

    // function fadeOut(element) {
    //     if (element.style.opacity != 0) {
    //         var speed = speed || 30;
    //         var num = 10;
    //         var st = setInterval(function () {
    //             num--;
    //             element.style.opacity = num / 10;
    //             if (num <= 0) {
    //                 clearInterval(st);
    //             }
    //         }, speed);
    //     }
    ;
    // }
    // var i = function btnIn() {
    //     fadeIn(element, 100);
    // }
    // var m = function btnOut() {
    //     fadeOut(element, 100);
    // }





    // 以及更多
    // 图片
    var sections_More_box_img = document.querySelectorAll('.sections_More_box img');
    for (var i = 0; i < sections_More_box_img.length; i++) {
        sections_More_box_img[i].onmouseenter = function () {
            this.style.transform = 'scale(1.1)';
            // console.log(123);
        }
        sections_More_box_img[i].onmouseleave = function () {
            this.style.transform = '';
        }
    }
    //   下面文字
    var More_box_bottom = document.querySelector('.More_box_bottom');
    More_box_bottom.onmouseenter = function () {
        More_box_bottom.querySelector('p').style.color = 'Orange ';
        var back = More_box_bottom.lastElementChild;
        animation(back, 0, 130, 50, 0.2);
    }
    More_box_bottom.onmouseleave = function () {
        More_box_bottom.querySelector('p').style.color = '';
        var back = More_box_bottom.lastElementChild;
        animation(back, 130, 0, 50, 0.2);
    }





}