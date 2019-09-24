window.onload=function () {
   //按钮
    var lbtn = document.querySelector('.left_anniu');
    var rbtn = document.querySelector('.right_anniu');
    console.log(lbtn);
    //轮播图获取
    var lunbo= document.querySelector('.lunbo');
    console.log(lunbo);
    //提示获取
    var dotteds = document.querySelector('.lunbobottom_text');
    var bottom_text=document.querySelectorAll('.lunbobottom_text li');
    this.console.log(bottom_text);
    (function showDotteds() {
          for(var i=0;i<lunbo.children.length;i++){
              if(i ==0){
                  bottom_text.className='active';
              }
              bottom_text.indexpage =i;
              bottom_text.onclik = move;
              dotteds.appendChild(bottom_text);
              
          }
    })();
    //点击
    function move() {
        index=this.indexpage;
        console.log(index);
    }
};