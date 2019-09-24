var btn_game = document.querySelector('.game');
var c = document.querySelector('.sports_extend');
var a = document.querySelector('.game_extend');
var b = document.querySelector('.permit');
var btn_sports = document.querySelector('.sports');
var btn_user = document.querySelector('.user_name');
btn_game.onclick = function () {
    // var b = this.children[1];
    // var d = btn_sports.children[1];
    if (a.style.display == 'block') {
        a.style.display = 'none';
        // b.style.background = 'url(imges/icon-sprite.png) no-repeat -144px -131px';
    } else {
        a.style.display = 'block';
        c.style.display = 'none';
        b.style.display = 'none'
        // b.style.background = 'url(imges/icon-sprite.png) no-repeat -144px -145px';
    }
}
btn_sports.onclick = function () {
    // var d = this.children[1];
    if (c.style.display == 'block') {
        c.style.display = 'none';
        // d.style.background = 'url(imges/icon-sprite.png) no-repeat -144px -144px';
    } else {
        a.style.display = 'none';
        c.style.display = 'block';
        b.style.display = 'none'
        // d.style.background = 'url(imges/icon-sprite.png) no-repeat -144px -131px';
    }
}
btn_user.onclick = function () {
    //  console.log(btn_user)
    if (b.style.display == 'block') {
        b.style.display = 'none';
    } else {
        b.style.display = 'block';
        a.style.display = 'none';
        c.style.display = 'none';
    }
}


/* 这是顶部大logo结束 */

//获取图片切换按钮
var tu_a = document.querySelector('.tu-a');
var tu_b = document.querySelector('.tu-b');

//获取大盒子
var box = document.querySelector('.con_lunbo_left1')
var ul = document.querySelector('.con_lunbo_left_big');
var dotteds = document.querySelector('.con_lunbo_left_sim')
//获取图片宽度
var imgW = document.querySelector('.con_lunbo_left1').offsetWidth;
//  console.log(imgW)
var PageIndex = 0;

//解决最后一张图片为空白的问题
var fs_li = ul.firstElementChild.cloneNode(true);

ul.appendChild(fs_li);
dotteds.children[PageIndex].className = 'active';

// 切换txt栏 
function setDotteds() {
    for (var i = 0; i < dotteds.children.length; i++) {
        dotteds.children[i].className = '';

    }
    if (PageIndex == 2) {

        dotteds.children[0].className = 'active';
    } else {
        dotteds.children[PageIndex].className = 'active';
    }
}

//开始设置点击图片切换效果
var time_id = null;
time_id = setInterval(autoplay, 3000);

function autoplay() {
    // clearInterval(time_id);
    // time_id = 0;
    if (PageIndex == 2) {
        PageIndex = 0;
        ul.style.left = -PageIndex * imgW + 'px';
    }
    PageIndex++;
    animation(ul, ul.offsetLeft, -PageIndex * imgW, 20, 20);
    setDotteds()

};

// box.onmouseover  = function (e) {
//     // clearInterval(time_id);
//     clearInterval(time_id);

//     e.stopPropagation();
//     console.log(time_id)
// }

// box.onmouseout  = function (e) {
//     time_id = setInterval(autoplay, 1000);  // 一定这么开
//     clearInterval(time_id);

//     e.stopPropagation();


// }


var bao = document.querySelector('.bao');
var baoW = document.querySelector('.bao').offsetWidth
// console.log(bao.offsetWidth )
// animation(bao,0,baoW,20,20)

window.setInterval(function () {
    // console.log($('.bao'))
    $('.bao').animate({
        left: -10000
    }, 200000, 'linear')
})
