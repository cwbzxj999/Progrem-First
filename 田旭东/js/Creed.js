  // 左边logo移入效果
        // 选中标签
    var left_logo=document.querySelector('.left_logo');
    left_logo.onmouseenter=function(){
        this.style.background='#555555';
    }
        // logo移除效果
    left_logo.onmouseleave=function(){
        this.style.background='';
    }
    // 右边用户移入事件
    var user=document.querySelector('.user img');
    user.onmouseenter=function(){
        this.className='big';
    }
    // 鼠标移出
    user.onmouseleave=function(){
        this.className='';
    }

    // 选中所有的li标签给每个li注册事件
    $('.buttom .left_float .li_index').click(function(){
        // 得到所有li的索引
       var index= $(this).index();
       $(this).css('color','black').siblings().css('color','');
    //    选中所有的w1标签
    $('.w1').eq(index).stop().show('linear').siblings('.w1').stop().hide();
    })
    
    // 原生ji轮播图
    // 获取右边的按钮
    var right=document.querySelector('.right');
    var left=document.querySelector('.left');
    var banner=document.querySelector('.banner');
    var vary_big=document.querySelector('.vary_big');
    var w2=document.querySelector('.w2');
    // 获取三张图片的宽度
    var img_x=w2.offsetWidth;
    // 定义一个变量，来设置一次走多少
    var img_index=0;
    // 设置点击事件
    right.onclick=function(){
        left.style.display='block';
        left.parentElement.style.display='block';
        img_index++;
        if(img_index==4){
        this.style.display='none';
        this.parentElement.style.display='none';
        return;
        }else{
            animation(vary_big,img_x,-img_index*img_x,1000,20);
        }
       

    } 

    // 给左边按钮设置点击事件
        left.onclick=function(){
        right.style.display='block';
        right.parentElement.style.display='block';
        img_index--;
        if(img_index==-1){
        this.style.display='none';
        this.parentElement.style.display='none';
        return;
        }
          animation(vary_big,img_x,-img_index*img_x,800,20);
    } 
    // 给轮播图的文字设置一些样式
        // 选中banner
        $('.banner').hover(function(){
            var index=$(this).index();
            $('.class_raze').eq(index).fadeIn(1000);
            $('.banner_img img').eq(index).stop().animate({
                width:'100%',
                height:200
            })
        },function(){
            var index=$(this).index();
            $('.class_raze').eq(index).hide();
            $('.banner_img img').eq(index).stop().animate({
                width:500,
                height:400
            })
        })
    // 录播图结束
    // 写三个图片的特效
    // 第一个
    $('.position_one2').hover(function(){
            var index=$(this).index();
            $('.position_one1').css({
                'top':0,
            });
            $('.position_one2_size1').stop().fadeIn(3000);
            $('.position_one2_size').stop().animate({
                bottom:'50%'           
             })
            $(this).css({
                'top':0,
                'width':320,
                background:'black',
                opacity: 0.6
            });
    },function(){
        $('.position_one1').css({
            'top':10,
        },2000);
        $('.position_one2_size1').stop().fadeOut(1000);
        $('.position_one2_size').stop().animate({
            bottom:'20%'
         },2000)
        $(this).css({
            'top':15,
            'width':300,
            background:'',
        })
    })
        // 第二章
$('.position_one2').mouseenter(function(){
    $('.position_one3').css('top',0);
})
$('.position_one2').mouseleave(function(){
    $('.position_one3').css('top',10);
})

// 第三章
$('.position_one2').mouseenter(function(){
    $('.position_one4').css('top',0);
})
$('.position_one2').mouseleave(function(){
    $('.position_one4').css('top',10);
})

// 尾部轮播图开始
// animation(element, current, target, step, time)
    // 第一步获取你要操作的父元素
    var foot_big=document.querySelector('.foot_big')
    // 第二部获取从哪里开始 也就是每张图片的宽度
    var foot_img_width=document.querySelector('.foot_img'). offsetWidth;
    // 第三步定义一个变量设置图片每一走多少
    var img_id=0;
    // 封装一个根据li创建的小圆点
    var li=document.querySelectorAll('.foot_big li');
    var yuan=document.querySelector('.yuan');
    function getCreat(){
        for(i=0; i<li.length; i++){
            var span=document.createElement('span');
            // 把span添加到他的父元素中
            yuan.appendChild(span);
            yuan.firstElementChild.className='pulic';
        }
    }
    // 封庄一个每个小圆点添加样式的函数
    function getTjia(){
        for(var i=0; i<yuan.children.length; i++){
            yuan.children[i].className='';
        }
       yuan.children[img_id].className='pulic';
    }
    getCreat();

// 先给左边的按钮设置一个点击事件
var right_img=document.querySelector('.right_img1');
right_img.onclick=function(){
    img_id++;
    // 判断如果图片到了第四个那么就让它回到第一个
    if(img_id==4){
        img_id=0;
        foot_big.style.left='0px';
    }else{
        animation(foot_big,foot_img_width,-img_id*foot_img_width,200,20);
     
    }
    getTjia()
    }

    // 给右边的按钮设置一个点击事件
    left_img=document.querySelector('.left_img1');
    left_img.onclick=function(){
    // 判断如果当前图片到了第一张那么就让它变成第四张

    if(img_id==0){
        img_id=4;
        foot_big.style.left=-img_id* foot_img_width+'px';
    }
    img_id--;
    animation(foot_big,foot_img_width,-img_id*foot_img_width,200,20);
    getTjia()
    }

    // 给每一span设置点击事件
    // 获取每一张图片
    for(var i=0; i<yuan.children.length; i++){
        // 定义一个变量用来接受i的值
        yuan.children[i].index=i;
        yuan.children[i].onclick=function(){
            img_id= this.index;
            if(img_id==0){
                img_id=0;
                foot_big.style.left='0px';
            }
            animation(foot_big,foot_img_width,-img_id*foot_img_width,200,20);
            getTjia()
        }
       
    }
    
    foot_big.onmouseenter=function(){
        clearInterval(timid);
    }
    foot_big.onmouseleave=function(){
        autoPlay();
    }
    var timid=null;
    function autoPlay() {
    timid=setInterval(function(){
    right_img.click();
    },3000);
}
    autoPlay();

    //   返回顶部部分
    $(window).scroll(function(){
        if($(document).scrollTop()>=2000){
            $('.footer').fadeIn(500);
        }else{
            $('.footer').fadeOut(500);
        }
        // 给footer设置一个点击事件 
    })
    $('.footer').click(function(){
       
        $('html').animate({
            scrollTop:0
        
        },500);
    })
    // 获取元素距离页面的宽度
//   返回顶部结束

// 两个框的动画效果
$(window).scroll(function(){
    var d=$(document).scrollTop(); 
    if(d>=4800){
        $('.foot_move strong,u').show(500);
        $('.foot_one').show(500);
        $('.foot_two').show(1500);
        $('.foot_three').show(2000);
        $('.foot_four').show(3000);
     
    }else{
        $('.foot_move strong,u').fadeOut(1000);
        $('.foot_one').hide();
        $('.foot_two').hide();
        $('.foot_three').hide();
        $('.foot_four').hide();
   
    }
})