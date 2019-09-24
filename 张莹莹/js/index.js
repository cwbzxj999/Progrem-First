// 封装动画
var timeID = null;
function animation(element, current, target, step, time) {
    current = element.offsetTop;
    if (element.timeID) {
        clearInterval(element.timeID);
        element.timeID = null;
    }
    //  定时器
    element.timeID = setInterval(function () {
        if (current > target) {
            step = -Math.abs(step);
        }

        if (Math.abs(current - target) <= Math.abs(step)) {
            current = target;
            clearInterval(element.timeID);
        } else {
            current += step;
        }
        element.style.top = current + 'px';
    }, time)
}

// 封装动画
var timesID = null;
function animations(element, current, target, step, time) {
    current = element.offsetLeft;
    if (element.timesID) {
        clearInterval(element.timesID);
        element.timesID = null;
    }
    //  定时器
    element.timesID = setInterval(function () {
        if (current > target) {
            step = -Math.abs(step);
        }

        if (Math.abs(current - target) <= Math.abs(step)) {
            current = target;
            clearInterval(element.timesID);
        } else {
            current += step;
        }
        element.style.left = current + 'px';
    }, time)
}

////////////////////////////////////////////////////////////////////
// 获取元素
var title_div = document.querySelector('.title-play');
var title_ply = document.querySelector('.titlebig-play');
var title_img = document.querySelectorAll('.titlebig-play img');
var title_boxHt = document.querySelector('.title-play a').offsetHeight;
// 定一个变量表示索引值
var PageIndex = 0;
var PageIndexjs;
// 自动循环播放函数
title_div.onclick = function () {
    if (PageIndex == 3) {
        PageIndex = 0;
        title_div.style.top = '0px';
    }
    PageIndex++;
    // 调用动画
    animation(title_div, title_div.offsetTop, -PageIndex * title_boxHt, 42, 10);
}

// 克隆轮播图第一个图片
var fs_li = title_div.firstElementChild.cloneNode(true);
title_div.appendChild(fs_li);
//通过程序模拟用户进入事件
var time_id = null;
time_id = setInterval(function () {
    //通过程序模拟用户进入
    title_div.click();
}, 2000);


// 点击小盒子大盒子出来
var title_a = document.querySelectorAll('.title-play a');
for (var i = 0; i < title_a.length; i++) {
    title_a[i].index = i;
    title_a[i].onmouseenter = function () {
        this.parentNode.style.display = 'none';
        title_img[this.index].style.display = 'block';
        title_img[this.index].parentNode.parentNode.style.display = 'block';
    }
}
// 离开div小盒子显示大盒子消失
title_ply.onmouseleave = function () {
    for (var j = 0; j < title_a.length; j++) {
        title_img[j].style.display = 'none';
    }
    this.style.display = 'none';
    title_div.style.display = 'block';
}

//////////////////////////////////////////////////////////////
// 下拉盒子
var title_box = document.querySelector('.title-box');
var title_boxs = document.querySelector('.title-boxs');
// 进入时下拉盒子展开
title_box.onmouseenter = function () {
    title_boxs.style.display = 'block';
    this.firstElementChild.style.color = '#FBB245';
}
// 离开时下拉盒子收起
title_box.onmouseleave = function () {
    this.firstElementChild.style.color = '#999';
    title_boxs.onmouseenter = function () {
        title_boxs.style.display = 'block';
    }
    title_boxs.onmouseleave = function () {
        title_boxs.style.display = 'none';
    }
    title_boxs.style.display = 'none';
}

////////////////////////////////////////////////////////////
// 导航栏下拉
var nav_li = document.querySelectorAll('.nav-li');
var nav_ul = document.querySelector('.nav-li ul');

for (var i = 0; i < nav_li.length; i++) {
    nav_li[i].onmouseenter = function () {
        this.lastElementChild.style.display = 'block';

    }

    nav_li[i].onmouseleave = function () {
        this.lastElementChild.style.display = 'none';
    }

}

/////////////////////////////////////////////////////////
// 获取图片的大小
var nav_play = document.querySelector('.nav-play');
var nav_width = nav_play.offsetWidth;
var navs_li = document.querySelectorAll('.navs-play li');
for (var i = 0; i < navs_li.length; i++) {
    navs_li[i].style.width = nav_width + 'px';
}



var navs_ul = document.querySelector('.navs-play');
var nav_step = 0;
// 解决最后一张图片空白
var navs_lis = navs_ul.firstElementChild.cloneNode(true);
navs_ul.appendChild(navs_lis);
// 自动轮播
var nav_id = null;
nav_id = setInterval(function () {
    if (nav_step == 6) {
        //代表用户看到的就是复制以后的最一张
        nav_step = 0;
        navs_ul.style.left = '0px';
    }
    nav_step++;
    //要改变ul的位置
    animations(navs_ul, navs_ul.offsetLeft, -nav_step * nav_width, 3000);
    setDotteds()
}, 5000);

// 点击按钮切换图片
var play_li = document.querySelectorAll('.play-dot a');

for(var i = 0; i < play_li.length; i++) {
    play_li[i].play_step = i;
    play_li[i].onclick = function(){

        for(var l = 0; l < play_li.length; l++){
            play_li[l].classList.remove('a_style');
        }
        this.classList.add('a_style');
        this.play_step
        nav_step = this.play_step;
        if(nav_step == 6) {
            //代表用户看到的就是复制以后的最一张
            nav_step = 0;
            navs_ul.style.left = '0px';
        }
        //要改变ul的位置
        animations(navs_ul, navs_ul.offsetLeft, -nav_step * nav_width, 3000);
    }
}
// 自动轮播时是按钮样式改变
function setDotteds() {
    for(var i = 0; i < play_li.length; i++) {
        play_li[i].className = '';
    }
    if(nav_step == 6) {
        play_li[0].className = 'a_style';
    }else {
        play_li[nav_step].className = 'a_style';
    }
}

//////////////////////////////////////////////////////////////////////////////
// 广告部分
// 多table栏切换
var news_nav = document.querySelectorAll('.news-list a');
var news_nli = document.querySelectorAll('.news-list li');
var bos = document.querySelectorAll('.publicc'); 
for(var s = 0;  s < news_nav.length; s++){
    
    news_nav[s].onclick = function(){
        
        for(var k = 0; k < news_nav.length; k++){
            news_nav[k].classList.remove('news_style');
        }

        for(var k = 0; k < bos.length; k++){
           bos[k].style.display ='none';
        } 

        this.classList.add('news_style');
        var restend = this.dataset.name;
        var dits = document.getElementById(restend);
        dits.style.display = 'block';
    }
}


// 第三个轮播图

// 获取ul
// animation(element, current, target, step, time)
var ul=document.querySelector('.box ul');
// 获取每张图片的宽度
var box=document.querySelector('.box').offsetWidth;
var li=document.querySelectorAll('.box li');
var img=document.querySelectorAll('.yuan img');
var img1=document.querySelectorAll('.a img');
var span=document.querySelectorAll('.a span')
var p=document.querySelectorAll('.a p');
// 定义一个变量每次走多少
var img_id=0;
// 选中p标签
var three=document.querySelectorAll('.a .three');
// 给每一个one注册一个事件
var one=document.querySelectorAll('.a');
var h3=document.querySelectorAll('.box h3')
for(var i=0; i<one.length; i++){
    
var li=document.querySelectorAll('.box li');
    for(var m = 0 ;m <li.length; m++){
        li[m].style.width=box+'px';
    }
    one[i].index=i;
    one[i].onclick=function(){
        for(var n=0; n<three.length;n++){
             three[n].style.display='none';
             span[n].style.display='block';
             p[n].style.display='block';
        }
        img_id=this.index;
        animations(ul, box, -img_id*box, 80, 30);
        h3[img_id].className='dong';
        three[this.index].style.display='block';
        span[this.index].style.display='none';
        p[this.index].style.display='none';
    }
}


/////////////////////////////////////////////////////////////////////////////////
// 内容部分
var topbtn = document.querySelector('.banner-top');
var bottombtn = document.querySelector('.banner-bottom');
var banners_ul = document.querySelector('.banners-play ul');
var banners_li = document.querySelectorAll('.banners-play li');
var imgW = banners_ul.firstElementChild.offsetHeight+14;
var banner_index = 0;

topbtn.onclick = function() {

    if(banner_index == 7) {
        //代表用户看到的就是复制以后的最一张
        banner_index = 0;
        banners_ul.style.top = '0px';
    }
    banner_index++;
    //要改变ul的位置
    animation(banners_ul, banners_ul.offsetTop, -banner_index*imgW, 98, 1);
}

bottombtn.onclick = function() {
    if(banner_index == 0) {
        banner_index = 7;
        banners_ul.style.top = -banner_index*imgW + 'px'; 
    }
    banner_index--;
    animation(banners_ul, banners_ul.offsetTop, -banner_index*imgW, 98, 1);
}

var fs_li = banners_ul.firstElementChild.cloneNode(true);
banners_ul.appendChild(fs_li);
           

// 自动播放

var time_id = null;

time_id = setInterval(function(){
     //通过程序模拟用户点击右侧按钮
     topbtn.click();

}, 4000);

///////////////////////////////////////////////////////
// 内容部分
// 盒子部分
var native_li = document.querySelector('.native-small li:first-child');
var native_litwo = document.querySelector('.native-small li:nth-child(2)');
var native_lithree = document.querySelector('.native-small li:nth-child(3)');
var native_lifour = document.querySelector('.native-small li:nth-child(4)');
var native_smallt = document.querySelector('.native-small li:first-child .native-smallt');
var native_smallb = document.querySelector('.native-small li:first-child .native-smallb');
var native_publicone = document.querySelectorAll('.native-small li:nth-child(2) .public');
var native_aone = document.querySelectorAll('.native-small li:nth-child(2) a');
var native_publictwo = document.querySelectorAll('.native-small li:nth-child(3) .public');
var native_atwo = document.querySelectorAll('.native-small li:nth-child(3) a');
var native_publicthree = document.querySelectorAll('.native-small li:nth-child(4) .public');
var native_athree = document.querySelectorAll('.native-small li:nth-child(4) a');
// 第一个小盒子
native_li.onmouseenter = function(){
    native_smallt.style.display = 'none';
    native_smallb.style.display = 'block';
}
native_li.onmouseleave = function(){
    native_smallt.style.display = 'block';
    native_smallb.style.display = 'none';
}
// 第二个小盒子
native_litwo.onmouseenter = function(){
    for(var j = 0; j < native_publicone.length; j++){
         native_publicone[j].style.display = 'none';
    }
    for(var i = 0; i < native_aone.length; i++){
        native_aone[i].style.display = 'block';
    }
    
}
native_litwo.onmouseleave = function(){
    for(var i = 0; i < native_publicone.length; i++){
        native_publicone[i].style.display = 'block';
   }
    for(var i = 0; i < native_aone.length; i++){
        native_aone[i].style.display = 'none';
    }
}
// 第三个小盒子
native_lithree.onmouseenter = function(){
    for(var i = 0; i < native_publictwo.length; i++){
        native_publictwo[i].style.display = 'none';
   }
    for(var i = 0; i < native_atwo.length; i++){
        native_atwo[i].style.display = 'block';
    }
}
native_lithree.onmouseleave = function(){
    for(var i = 0; i < native_publictwo.length; i++){
        native_publictwo[i].style.display = 'block';
   }
    for(var i = 0; i < native_atwo.length; i++){
        native_atwo[i].style.display = 'none';
    }
}
// 第四个小盒子
native_lifour.onmouseenter = function(){
    for(var i = 0; i < native_publicthree.length; i++){
        native_publicthree[i].style.display = 'none';
   }
    for(var i = 0; i < native_athree.length; i++){
        native_athree[i].style.display = 'block';
    }
}
native_lifour.onmouseleave = function(){
    for(var i = 0; i < native_publicthree.length; i++){
        native_publicthree[i].style.display = 'block';
   }
    for(var i = 0; i < native_athree.length; i++){
        native_athree[i].style.display = 'none';
    }
}

//////////////////////////////////////////////////////////////////////

// tab栏切换和轮播图
var native_nav = document.querySelectorAll('.native-list a');
var native_bos = document.querySelectorAll('.native-playp'); 
for(var i = 0; i < native_nav.length; i++){
    native_nav[i].onclick = function(){
        for(var j = 0; j < native_nav.length; j++){
            native_nav[j].classList.remove('native_style');
            native_bos[j].style.display ='none';
        } 
        this.classList.add('native_style');
        var play_restend = this.dataset.name;
        var play_dits = document.getElementById(play_restend);
        play_dits.style.display = 'block';
    }
}


// 轮播图
//第一个盒子
var native_left = document.querySelector('.native-left');
var native_right = document.querySelector('.native-right');

// //获取ul
var natives_ul = document.querySelector('.natives-play ul');

// //获取每张图片的宽度 = 当前盒子的宽度
var natives_imgW = document.querySelector('.natives-li').offsetWidth+20;
// //定义个变量用来维护索引值：
var natives_PageIndex = 0;


  //开始设置右侧按钮点击事件
  native_right.onclick = function() {
    if(natives_PageIndex == 5) {
        //代表用户看到的就是复制以后的最一张
        natives_PageIndex = 0;
    }
    natives_PageIndex++;
    //要改变ul的位置
    animations(natives_ul, natives_ul.offsetLeft, -natives_PageIndex*natives_imgW, 10, 30);
}

native_left.onclick = function() {
  if(natives_PageIndex == 0) {
    natives_PageIndex =6;
  }
  natives_PageIndex--;
  animations(natives_ul, natives_ul.offsetLeft, -natives_PageIndex*natives_imgW, 10, 30);
}


//第二个盒子
var native_lft = document.querySelector('.native-playp:last-child .native-left');
var native_rit = document.querySelector('.native-playp:last-child .native-right');

// //获取ul
var natives_uls = document.querySelector('.native-playp:last-child .natives-play ul');

// //获取每张图片的宽度 = 当前盒子的宽度
var natives_imgWs = 205;
// //定义个变量用来维护索引值：
var natives_PageIndexs = 0;


  //开始设置右侧按钮点击事件
  native_rit.onclick = function() {
    if(natives_PageIndexs == 5) {
        //代表用户看到的就是复制以后的最一张
        natives_PageIndexs = 0;
    }
    natives_PageIndexs++;
    //要改变ul的位置
    animations(natives_uls, natives_uls.offsetLeft, -natives_PageIndexs*natives_imgWs, 10, 30);
}

native_lft.onclick = function() {
  if(natives_PageIndexs == 0) {
    natives_PageIndexs = 6;
  }
  natives_PageIndexs--;
  animations(natives_uls, natives_uls.offsetLeft, -natives_PageIndexs*natives_imgWs, 10, 30);
}

////////////////////////////////////////////

var box_left = document.querySelector('.box-right a');
box_left.onclick = function(){
    document.querySelector('.box-right .rightz').style.display = 'none';
    document.querySelector('.box-right .leftz').style.display = 'none';
    document.querySelector('.box-right .lefts').style.display = 'block';
}
document.querySelector('.box-right .lefts').onclick = function(){
    document.querySelector('.box-right .rightz').style.display = 'block';
    document.querySelector('.box-right .leftz').style.display = 'block';
    document.querySelector('.box-right .lefts').style.display = 'none';
}