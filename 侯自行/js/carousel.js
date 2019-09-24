/* 严格模式 */
'use strict';
/**
 * @param {轮播图} carousel
 * @param {轮播图的容器} element 
 * @param {小圆点的class类} Class 
 */
function carousel(wrap, Class) {
    /*  获取元素  */
    var wrap = document.querySelectorAll(wrap)[0];
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
    var listBoxLength = listBox.children.length;
    addEventListenerr(wrap, 'mouseenter', function () {
        /* 清楚定时器 */
        clearInterval(timer);
    });
    addEventListenerr(wrap, 'mouseleave', function () {
        /* 清楚定时器*/
        timer = setInterval(timerId, 2000);
    });
    /* 克隆第一张图片 不克隆无法完成无缝轮播*/
    imgList.appendChild(imgList.children[0].cloneNode(true));
    /* 定时器 */
    timer = setInterval(timerId, 2000);
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
/**
 * @param {双翼轮播图 } doubleCarousel
 * @param {轮播图的容器} wrap 
 * @param {小圆点的clas类} Class 
 * @param {左按钮(上一张)} Left 
 * @param {右按钮(下一张)} Right 
 */
function doubleCarousel(wrap, Class, Left, Right) {
    var box = document.querySelectorAll(wrap)[0];
    var imgList = box.children[0];
    var btnList = box.children[1];
    var arrLeft = document.querySelectorAll(Left)[0];
    var arrRight = document.querySelectorAll(Right)[0];
    var index = 0;
    var imgWidth = box.clientWidth;
    var i = 0,
        len = imgList.children.length;
    for (; i < len; i++) {
        var li = document.createElement('li');
        btnList.appendChild(li);
        li.index = i;
        addEventListenerr(li, 'click', function () {
            animate(imgList, -this.index * imgWidth);
            for (var i = 0; i < len; i++) {
                btnList.children[i].classList.remove(Class);
            }
            this.classList.add(Class);
            index = this.index;
        });
        if (i === 0) {
            btnList.children[i].classList.add(Class);
        }
    }
    addEventListenerr(box, 'mouseover', function () {
        arrLeft.style.display = 'block';
        arrRight.style.display = 'block';
        clearInterval(timer);
    })
    addEventListenerr(box, 'mouseout', function () {
        arrLeft.style.display = 'none';
        arrRight.style.display = 'none';
        timer = setInterval(function () {
            arrRight.click();
        }, 2000)
    })
    addEventListenerr(arrLeft, 'click', function () {
        if (index === 0) {
            index = len;
            imgList.style.left = -index * imgWidth + 'px';
        }
        index--;
        if (index >= 0) {
            btnList.children[index].click();
        }
    })
    addEventListenerr(arrRight, 'click', function () {
        if (index === len) {
            index = 0;
            imgList.style.left = 0;
        }
        index++;
        if (index < len) {
            btnList.children[index].click();
        } else {
            animate(imgList, -index * imgWidth);
            for (i = 0; i < len; i++) {
                btnList.children[i].classList.remove(Class);
            }
            btnList.children[0].classList.add(Class);
        }
    })
    imgList.appendChild(imgList.children[0].cloneNode(true));
    timer = setInterval(function () {
        arrRight.click();
    }, 2000);

}
/**
 * 此函数必须引入jQuery插件
 * @param {jQuery轮播图} JqCarousel
 * @param {轮播图的容器} wrap 
 * @param {你要创建的标签(如果加内容,单独设置)} Create 
 * @param {小圆点的clas类} Class 
 */
function JqCarousel(wrap, Create, Class) {
    //最大的容器
    var _wrap = $(wrap);
    //图片的列表
    var imgList = _wrap.children(':eq(0)');
    //小圆点的列表
    var listBox = _wrap.children(":eq(1)");
    //左右按钮的容器
    var arrBox = _wrap.children(":eq(2)");
    //左按钮
    var LeftBtn = arrBox.children(':eq(0)');
    //右按钮
    var RightBtn = arrBox.children(':eq(1)');
    //图片的长度
    var imgLength = imgList.children().length;
    //初始化索引
    var index = 0;
    //根据图片长度动态创建列表
    for (let i = 0; i < imgLength; i++) {
        //循环创建标签  加数字请修改
        $(Create).appendTo(listBox);
    }
    //小圆点集合  不能放在for循环(创建标签之上) 否则加载不出来
    var list = listBox.children();
    //默认第一个小圆点 加样式
    listBox.children(':first').addClass(Class);
    //移入移出事件
    _wrap.hover(function () {
        //移入清楚定时器
        clearInterval(timer);
        //移入显示按钮
        arrBox.stop().fadeIn(300);
    }, function () {
        //移出再次开启定时器
        timer = timer = setInterval(_Right, 2000);
        //移出按钮消失
        arrBox.stop().fadeOut(300);
    })
    //小圆点的点击事件
    list.click(function () {
        //每次点击获取当前的索引
        index = $(this).index();
        //当前的元素加class类名去掉其他的class类名
        $(this).addClass(Class).siblings().removeClass(Class);
        //根据小圆点的索引跳转到索引对应的图片
        imgList.children().eq(index).stop().fadeIn(700).siblings().fadeOut(500);
    });
    //左按钮的点击事件
    LeftBtn.click(function () {
        //当index索引等于零的时候
        if (index == 0) {
            //让索引等于图片的长度
            index = imgLength;
        }
        index--;
        //调用函数   传进去index索引
        Event(index);
    });
    //右按钮点击事件
    RightBtn.click(_Right);
    //右按钮对应的事件函数
    function _Right() {
        /* 和左按钮相同 */
        index++;
        if (index == imgLength) {
            index = 0;
        }
        Event(index)
    }
    //定时器
    var timer = setInterval(_Right, 2000);
    //图片的封装函数 小圆点的封装函数  节省空间 减少耦合度
    function Event(index) {
        return imgList.children().eq(index).stop().fadeIn(500).siblings().fadeOut(500),
            list.eq(index).addClass(Class).siblings().removeClass(Class);
    }
}


/**
 * 构造函数轮播图
 * @param {new carousel({options})} window
 */
/*(function (window) {
    function carousel(options) {
        this.box = options.box || '容器';
        this.right = options.right || '右边的箭头';
        this.left = options.left || '左边的箭头';
        this.btnColor = options.btnColor || 'class类调颜色';
        _this = this;
        _carousel.call(this);
    }

    function _carousel() {
        var box = document.getElementById(this.box);
        var imgList = box.children[0];
        var btnList = box.children[1];
        var arrLeft = document.getElementById(this.left);
        var arrRight = document.getElementById(this.right);
        var index = 0;
        var imgWidth = box.clientWidth;
        var i = 0,
            len = imgList.children.length;
        for (; i < len; i++) {
            var li = document.createElement('li');
            btnList.appendChild(li);
            li.index = i;
            setInnerText(li, i + 1);
            addEventListenerr(li, 'click', function () {
                animate(imgList, -this.index * imgWidth);
                for (var i = 0; i < len; i++) {
                    btnList.children[i].classList.remove(_this.btnColor);
                }
                this.classList.add(_this.btnColor);
                index = this.index;
            });
            if (i === 0) {
                btnList.children[i].classList.add(_this.btnColor);
            }
        }
        addEventListenerr(box, 'mouseover', function () {
            arrLeft.style.display = 'block';
            arrRight.style.display = 'block';
            clearInterval(timer);
        })
        addEventListenerr(box, 'mouseout', function () {
            arrLeft.style.display = 'none';
            arrRight.style.display = 'none';
            timer = setInterval(function () {
                arrRight.click();
            }, 2000)
        })
        addEventListenerr(arrLeft, 'click', function () {
            if (index === 0) {
                index = len;
                imgList.style.left = -index * imgWidth + 'px';
            }
            index--;
            if (index >= 0) {
                btnList.children[index].click();
            }
        })
        addEventListenerr(arrRight, 'click', function () {
            if (index === len) {
                index = 0;
                imgList.style.left = 0;
            }
            index++;
            if (index < len) {
                btnList.children[index].click();
            } else {
                animate(imgList, -index * imgWidth);
                for (i = 0; i < len; i++) {
                    btnList.children[i].classList.remove(_this.btnColor);
                }
                btnList.children[0].classList.add(_this.btnColor);
            }
        })
        imgList.appendChild(getFirstElementChild(imgList).cloneNode(true));
        timer = setInterval(function () {
            arrRight.click();
        }, 2000)
    }
    window.carousel = carousel;
})(window);


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
    }, 20)
}

//获取第一位  处理兼容
function getFirstElementChild(element) {
    if (element.firstElementChild) {
        return element.firstElementChild;
    } else {
        var node = element.firstChild;
        while (node && node.nodeType != 1) {
            node = node.nextSibling;
        }
        return node;
    }
}

//兼容
function setInnerText(element, content) {
    if (typeof element.InnerText == 'string') {
        element.InnerText = content;
    } else {
        element.textContent = content;
    }
}
