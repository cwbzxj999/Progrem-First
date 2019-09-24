  
  
//   //------------------------------轮播图-------------------------------------------//

         var aLinks = document.querySelectorAll('.top_nav li a');
         // 2. 给每一个a标签注册点击事件

         for(var i = 0; i < aLinks.length; i++) {
               
               aLinks[i].onmouseover = function() {

                    //先将所有的a标签中的样式去掉 （排他思想）
                    for(var j = 0; j < aLinks.length; j++) {
                        //  aLinks[j].classList.remove('change');

                          aLinks[j].className = '';
                    }

                    //给当前点击的a标签添加active类样式
                    // this.classList.add('active');
                       this.className = 'change';
               }
               aLinks[i].onmouseout = function() {
                   this.className = '';
               }
         }

         var lis = document.querySelectorAll('.top_nav li');
         var ull = document.querySelector('.sub_inner');
         for (var i = 0; i < lis.length; i++) {

            lis[i].onmouseover = function() {
                ull.style.display = 'block';
            }
            ull.onmouseover = function() {
                ull.style.display = 'block';
           
            }
            lis[i].onmouseout = function() {
                ull.style.display = 'none';
            }
            ull.onmouseout = function() {
                ull.style.display = 'none';
            }

         }



      


        //______________________________-轮播-----------------------
          //按钮
        

         //按钮
         var lbtn = document.querySelector('.lb .btns a:nth-child(1)');
         var rbtn = document.querySelector('.lb .btns a:nth-child(2)');
         //列表
         var ul = document.querySelector('.lb ul');
         //小圆点
         var dotteds = document.querySelector('.dotteds');
        
         //1.页面加载显示小圆点
         (function showDotteds() {
             for(var i = 0; i < ul.children.length; i++) {
                  var span = document.createElement('span');
                  if(i == 0) {
                      span.className = 'active';
                  }
                  span.indexpage = i;
                  span.onclick = move;
                  dotteds.appendChild(span);
             }
         })();

         //点击小圆点
         function move() {
              index = this.indexpage;
              animation(ul, ul.offsetLeft, -index*650,50, 20);
              dottedMove();
         }

         var index = 0;
         //点击下一页按钮
         rbtn.onclick = function() {
            if(index == 4) {
                index = 0;
                ul.style.left = '0px';
            }
            index++;
            animation(ul, ul.offsetLeft, -index*650,50, 20);
            //小圆点跟随改变
            dottedMove();
         }

         function dottedMove() {
           for(var i = 0; i < dotteds.children.length; i++) {
                dotteds.children[i].className = '';
            }
            if(index == 4) {
               dotteds.children[0].className = 'active';
            }else {
               dotteds.children[index].className = 'active';
            }
         }

         //点击上一页按钮
         lbtn.onclick = function() {
             if(index == 0) {
                index = 4;
                ul.style.left = -index*750+'px';
             }
             index--;
             animation(ul,ul.offsetLeft, -index*650, 50, 20);
             dottedMove();
         }

         //将第一个li动态的复制到ul的末尾
         var newNode = ul.firstElementChild.cloneNode(true); 
              ul.appendChild(newNode);
         
         
         //自动播放
         var lb = document.querySelector('.lb');

          lb.onmouseenter = function() {
              clearInterval(id);
          }

          lb.onmouseleave = function() {
              autoPlay();
          }

         var id = null;

         function autoPlay() {
              id = setInterval(function(){
                  rbtn.click();
              },2000)
         }
        
         autoPlay();


         var zhuan = document.querySelector('#div');
         zhuan.onclick = function() {
             
           
             confirm('恭喜你获奖了下载即刻领取');
         }


       




    var Canvas = {};
    Canvas.anim = {
    init:function(){
    var canvas = document.getElementById('canvas');
  
    //设置画布
    this.ctx = canvas.getContext('2d');
    this.letters = '*******************';
    this.cw = canvas.width; //获取画布宽
    this.ch = canvas.height;//获取画布高
    this.particles = [];
    },
    //执行动画
    render:function(){
    this.ctx.clearRect(0,0,this.cw,this.ch);  
    //字母的属性
    //设置x轴中心点
    var particle = {
    x:this.cw/2, 
    y:this.ch,
    xSpeed:(Math.random()*20) - 10,
    ySpeed:(Math.random()*20) - 10,
    size:10,
    character:this.letters[Math.floor(Math.random() * this.letters.length)],
    /*color:[155, 100, 50, .7]*/
    color:function getRandomColor() {
    return '#' +
    (function(color) {
    return(color += '0123456789abcdef' [Math.floor(Math.random() * 16)]) &&
    (color.length == 6) ? color : arguments.callee(color);
    })('');
    }
     
     
    }
    this.particles.push(particle);
    this.drawParticle();
    },
    //绘制字母
    drawParticle:function(){
    var c = this.ctx;
    var particleCount = this.particles.length;
    for(var i = 0;i < particleCount;i++){
    var particle = this.particles[i];
    //设置颜色hsla值
     var h = particle.color[0],
    s = particle.color[1] + '%',
    l = particle.color[2] + '%',
    a = particle.color[3];
    var hsla = 'hsla('+h+','+s+','+l+','+a+')';
    //设置颜色文字
    c.font = "20px sans-serif"; 
    c.fillStyle = particle.color();
    c.fillText(particle.character,particle.x,particle.y);
    //设置运动轨迹
    particle.x += particle.xSpeed;
    particle.y += particle.ySpeed;
    particle.y *= 0.98;
    // document.body.style.backgroundColor = particle.color();
    }
    this.fadeParticle();
    },
    //背景透明
    fadeParticle:function(){
    this.ctx.fillStyle = particle.color();
    this.ctx.fillRect(0,0,this.cw,this.ch);
    }
    }
    Canvas.anim.init();
    setInterval(function(){
    Canvas.anim.render();
    },20);
     
    $(function(){
        Carousel.init($("#carousel"));
        $("#carousel").init();
    });
   



      

       



























