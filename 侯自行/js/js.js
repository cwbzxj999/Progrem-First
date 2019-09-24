var lis = document.querySelectorAll('.main_3');
for (var i = 0; i < lis.length; i++) {
    lis[i].onmouseenter = function () {
        this.children[0].style.transform = 'translateZ(50px)';
        this.children[0].style.transition = 'all 0.1s linear';
    }
    lis[i].onmouseleave = function () {
        this.children[0].style.transform = 'translateZ(0)';
        this.children[0].style.transition = 'all 0.1s linear';
    }
}
$(".btn_1,.btn-1,.button_1,.nav_svg .nav_btn").hover(function () {
    $(this).css('filter', 'brightness(120%) contrast(120%)');
}, function () {
    $(this).css('filter', 'brightness(100%) contrast(100%)');
})
$(".btn_3").hover(function () {
    $(this).css('filter', 'brightness(160%) contrast(160%)');
}, function () {
    $(this).css('filter', 'brightness(100%) contrast(100%)');
})
$(".btn_2").hover(function () {
    $(this).css('filter', 'brightness(140%) contrast(140%)');
}, function () {
    $(this).css('filter', 'brightness(100%) contrast(100%)');
})


$('ul .list').hover(function () {
    $(this).stop().fadeTo(100, 1).siblings().stop().fadeTo(100, 0.1);
}, function () {
    $(this).stop().fadeTo(100, 1).siblings().stop().fadeTo(100, 1);
})




{


    /**
     * @param {轮播图} carousel
     * @param {轮播图的容器} element 
     * @param {小圆点的class类} Class 
     */
    function carousel(wrap, Class) {
        /*  获取元素  */
        var wrap = document.querySelector(wrap);
        /* 获取图片列表容器 */
        var imgList = wrap.children[0];
        /* 获取小圆点容器 */
        var listBox = wrap.children[1];
        /* 获取图片的length */
        var imgListLength = imgList.children.length;
        /* 获取可视窗口宽度 */
        var imgWidth = wrap.offsetWidth;

        /* 定义全局循环初始值 */
        let i = 0,
            index = 0;
        for (i; i < imgListLength; i++) {
            /* 循环创建标签 */
            var list = document.createElement('li');
            /* 加到列表容器里 */
            listBox.appendChild(list);
            // 
            list.classList.add('btn-bg1');
            /* 把i赋值给变量方便实用 */
            list.index = i;
            /* 增加点击事件 */
            addEventListenerr(list, 'click', function () {
                /* 动画 点击小圆点执行动画 */
                animate(imgList, -this.index * imgWidth);
                /* 循环清楚所有   排他思想*/
                for (i = 0; i < imgListLength; i++) {
                    listBox.children[i].classList.remove(Class);
                }
                /* 当前元素加类名 */
                this.classList.add(Class);
            });
            /* i==0就是默认  默认第一个加类名 */
            if (i == 0) {
                listBox.children[i].classList.add(Class);
            }
        }
        /* 定义小圆点的长度 */
        // var listBoxLength = listBox.children.length;
        addEventListenerr(wrap, 'mouseenter', function () {
            /* 清楚定时器 */
            clearInterval(timer);
        });
        addEventListenerr(wrap, 'mouseleave', function () {
            /* 清楚定时器*/
            timer = setInterval(timerId, 7000);
        });
        /* 克隆第一张图片 不克隆无法完成无缝轮播*/
        imgList.appendChild(imgList.children[0].cloneNode(true));
        /* 定时器 */
        timer = setInterval(timerId, 7000);
        /* 定时器函数 */
        function timerId() {
            /* 判断index是否等于图片的长度 */
            if (index == imgListLength) {
                //如何从第6个图,跳转到第一个图
                //设置index=0
                index = 0;
                //把imgList的位置还原成开始的默认位置
                imgList.style.left = 0;
            }
            index++;
            /* 动画 */
            animate(imgList, -index * imgWidth);
            /* 判断小圆点是否等于listBox.children.length */
            if (index == listBox.children.length) {
                /* 小圆点第第一位加上类名 */
                listBox.children[0].classList.add(Class);
                /* 小圆点最后一位删除类名 */
                listBox.children[listBox.children.length - 1].classList.remove(Class);
            } else {
                /*清楚所有的类名 排他思想 */
                for (i = 0; i < listBox.children.length; i++) {
                    listBox.children[i].classList.remove(Class);
                }
                /* 随着index加上类名 */
                listBox.children[index].classList.add(Class);
            }
        }

    }

    carousel('.video', 'btn-bg2');


    /* 动画函数*/
    function animate(element, target) {
        if (element.timer) {
            clearInterval(element.timer);
        }
        element.timer = setInterval(function () {
            var current = element.offsetLeft;
            var step = 10;
            if (current > target) step = -Math.abs(step);
            if (Math.abs(current - target) <= Math.abs(step)) {
                element.style.left = target + 'px';
                clearInterval(element.timer);
                if (Function) Function();
                return;
            }
            current += step;
            element.style.left = current + 'px';
        }, 10)
    }


    /* 事件兼容 */
    function addEventListenerr(element, eventName, eventFunction) {
        if (element.addEventListener) {
            element.addEventListener(eventName, eventFunction, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + eventName, eventFunction);
        } else {
            element['on' + eventName] = eventFunction;
        }
    }
}