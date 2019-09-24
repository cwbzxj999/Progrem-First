
    //获取按钮
    var lbtn = document.querySelector('.lbtn');
    var rbtn = document.querySelector('.rbtn');
    var btn= document.querySelector('.box btn');
    var box= document.querySelector('.box');
    //获取ul
    var ul = document.querySelector('.box ul');
    //获取每张图片的宽度 = 当前盒子的宽度
    var imgW = document.querySelector('.box').offsetWidth;
    //获取小圆点的父节点
    var dotteds = document.querySelector('.dotteds');
   
    //定义个变量用来维护索引值：
    var PageIndex = 0;
    //开始设置右侧按钮点击事件
    rbtn.onclick = function() {

         if(PageIndex == 9) {
             //代表用户看到的就是复制以后的最一张
             PageIndex = 0;
             ul.style.left = '0px';
         }
         PageIndex++;
         //要改变ul的位置
         animation(ul, ul.offsetLeft, -PageIndex*imgW, 200, 20);
         //设置小圆点的样式
         setDotteds();
    }

    lbtn.onclick = function() {
       if(PageIndex == 0) {
           PageIndex = 9;
           ul.style.left = -PageIndex*imgW + 'px'; 
       }
       PageIndex--;
       animation(ul, ul.offsetLeft, -PageIndex*imgW, 80, 20);
       setDotteds();

    }

    //解决最后一张图片空白，通过程序给ul中动态添加复杂一个li

    var fs_li = ul.firstElementChild.cloneNode(true);

    ul.appendChild(fs_li);

  
    
    function setDotteds() {
             for(var i = 0; i < dotteds.children.length; i++) {
                 dotteds.children[i].className = '';
             }
             if(PageIndex == 10) {
                 dotteds.children[0].className = 'active';
             }else {
                 dotteds.children[PageIndex].className = 'active';
             }
    }
    
    var time_id = null;
     box.onmouseenter =function(){
         clearInterval(time_id);
     }
     box.onmouseleave =function(){
         time_id=setInterval(function(){
             rbtn.click();
         },3000);
     }
  


     //获取div
     var div = document.querySelector('.content_neirong');
     //给div注册一个鼠标按下去的事件
     div.onmousedown = function(e) {
          //获取鼠标按下去的坐标： x =  鼠标距离网页左侧的距离 -  当前盒子距离网页左侧的距离
          var mouse_X = e.clientX - this.offsetLeft;
          //给整个文档注册一个鼠标移动事件
          document.onmousemove = function(e) {
              //获取鼠标移动后的位置
              var move_x = e.clientX;
              //计算盒子移动的距离 :  获取鼠标移动后的位置 - 获取鼠标按下去的坐标
              var x = move_x - mouse_X;
              //将移动后的位置设置给div

               if(x<=0&&x>=-1527){
                div.style.left = x +'px';
               }
          }
     }
     //给div注册一个鼠标挑起的事件
     div.onmouseup = function() {
          //将鼠标移动的事件清除
          document.onmousemove = null;
     }

     var aLinks = document.querySelectorAll('.row li');
        
     var boxs = document.querySelectorAll('.left_row li');
   
     //注册点击事件
     for(var i = 0; i < aLinks.length; i++) {
          aLinks[i].onmouseover = function() {
             //排他思想： 将所有的盒子先隐藏
             for(var j = 0; j < boxs.length; j++) {
                 
                  boxs[j].style.display = 'none';
             }
             //先获取点击当前标签中的自定义属性值
             var emId = this.dataset.nba;
             // emID其实就是内容区域标签的ID值
             var element = document.getElementById(emId);
             // 显示该盒子
             element.style.display = 'block';

          }
     }
 

