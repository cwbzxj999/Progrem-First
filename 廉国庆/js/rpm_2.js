// 声明一个变量  定时器的ID的值是null
var timeID = null;
// element  :要移动的标签
// current： 当前位置
// target ： 要移动到的位置
// step ： 要走多少步
// time : 运动时间
function animation_Game(element, current, target, step, time) {
    //始终要保证 current值和当前元素的实际位置保持一致
    current = element.offsetLeft;
    if(element.timeID) {
        //说明页面中已经有定时器了，立即将该定时器清掉
        clearInterval(element.timeID);
        element.timeID = null;
    }
    //让box开始移动
    element.timeID = setInterval(function(){
            if(current > target) {   
                 step = -Math.abs(step);
            }
            // 极值法
            if( Math.abs(current-target) <= Math.abs(step)) {
                // 如果到达终点那么起始位置和终点位置相同
                current = target;
                //清除定时器
                clearInterval(element.timeID);
            }else {
                current += step;
            }
            element.style.top = current + 'px';
        }, time)
}