








var h_icon = document.querySelector('.h_icon');

for ( var i = 0; i < h_icon.length; i++) {
    h_icon[i].onmouseenter = function() {
   
        var dom  = document.querySelector('.active');
        dom.classList.remove('active');
        this.classList.add ('active');
        var ri = document.querySelectorAll('.biao');
        //循环排他思想，隐藏元素；
                var le = document.querySelectorAll(' .h_icon');
                for (var i = 0; i < h_icon.length; i++) {
                    for (var j = 0; j < ri.length; j++) {
                        if (ri[j] == h_icon[i]) {
                            ri[j].style.display = 'block';
                        }
                    }
                }
          }
        }
        //获取元素，获取一组li
var lis = document.querySelectorAll('.h_icon');
//获取一组li
var items = document.querySelectorAll('.biao');
//获取类名为slide的div
var slide = document.querySelector('.hero');
//循环遍历每一个li注册onmouseenter ,并且每一个li添加一个index表示索引
for ( var i = 0 ; i < lis.length; i++) {
    lis[i].index = i;
    lis[i].onmouseenter = function () {
        //循环遍历吧所有的h_icon的类名设置为'',把 hero-person所有的的display设置为none/
for (var j= 0; j< lis.length; j++) {
    lis[j].className = '';
    items[j].style.display = 'none';
    var num = this.index;
//通过编号找到对应的hero-person，并且设置display
items[num].style.display = 'block';

         }

    }

}
