// 轮播图

//按钮
var lbtn = document.querySelector('.btns a:nth-child(1)');
var rbtn = document.querySelector('.btns a:nth-child(2)');
//列表
var ul = document.querySelector('ul');
//小圆点
var dotteds = document.querySelector('.dotteds');

var _w = parseInt($(window).width());//获取浏览器的宽度
$(".banner .box li img ").each(function(i){
var img = $(this);
var realWidth;//真实的宽度
var realHeight;//真实的高度
//这里做下说明，$("<img/>")这里是创建一个临时的img标签，类似js创建一个new Image()对象！
$("<img/>").attr("src", $(img).attr("src")).load(function() {
/*
如果要获取图片的真实的宽度和高度有三点必须注意
1、需要创建一个image对象：如这里的$("<img/>")
2、指定图片的src路径
3、一定要在图片加载完成后执行如.load()函数里执行
*/
realWidth = this.width;
realHeight = this.height;
//如果真实的宽度大于浏览器的宽度就按照100%显示
if(realWidth>=_w){
$(img).css("width","_w").css("height","auto");
}
console.log(_w);
// else{//如果小于浏览器的宽度按照原尺寸显示
// $(img).css("width",realWidth+'px').css("height",realHeight+'px');
// }
});
});




//1.页面加载显示小圆点
(function showDotteds() {
	for (var i = 0; i < ul.children.length; i++) {
		var span = document.createElement('span');
		if (i == 0) {
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
	animation(ul, ul.offsetLeft, -index * _w, 50, 20);
	dottedMove();
}

var index = 0;
//点击下一页按钮
rbtn.onclick = function () {
	if (index == 4) {
		index = 0;
		ul.style.left = '0px';
	}
	index++;
	animation(ul, ul.offsetLeft, -index * _w, 500, 20);
	//小圆点跟随改变
	dottedMove();
}

function dottedMove() {
	for (var i = 0; i < dotteds.children.length; i++) {
		dotteds.children[i].className = '';
	}
	if (index == 4) {
		dotteds.children[0].className = 'active';
	} else {
		dotteds.children[index].className = 'active';
	}
}

//点击上一页按钮
lbtn.onclick = function () {
	if (index == 0) {
		index = 4;
		ul.style.left = -index * _w+ 'px';
	}
	index--;
	animation(ul, ul.offsetLeft, -index * _w, 500, 20);
	dottedMove();
}

//将第一个li动态的复制到ul的末尾
var newNode = ul.firstElementChild.cloneNode(true);
ul.appendChild(newNode);


//自动播放
var box = document.querySelector('.box');

box.onmouseenter = function () {
	clearInterval(id);
}

box.onmouseleave = function () {
	autoPlay();
}

var id = null;

function autoPlay() {
	id = setInterval(function () {
		rbtn.click();
	}, 3000)
}

autoPlay();


// 导航  鼠标进入切换
$(function () {

	$('.list').mouseenter(function () {

		var i = $(this).index();
		console.log(this);
		$('.list .block').eq(i).show();

	});
	$('.list ').mouseleave(function () {
		var i = $(this).index();
		console.log(i);
		$('.list .block').eq(i).hide();

	});
})
//mid_imgs区域

// 按钮

// .mid_img .l_link  
$(function () {
	$('.mid_img .l_link').mouseenter(function () {
		$('.l_link ').stop().animate({
			fontSize: 20,
		})
	});
	$('.mid_img .l_link').mouseleave(function () {
		$('.l_link ').stop().animate({
			fontSize: '16'
		})
	});

	$('.mid_img .r_link').mouseenter(function () {
		$('.r_link ').stop().animate({
			fontSize: 20,
		})
	});
	$('.mid_img .r_link').mouseleave(function () {
		$('.r_link ').stop().animate({
			fontSize: '16'
		})
	});
})

//mid_show 区域
$(function () {
	$('.show-thems').mouseenter(function () {
		// console.log(this);
		var j = $(this).index();
		// console.log(i);
		// $('.show-thems').eq(j).stop().animate({
		// 	// width: 300,
		// 	height:330,
		// 	// marginRight:50
		// }, 500);
		$('.show-thems img').eq(j).stop().animate({

			height: 150,

		}, 500);
		$('.show-thems .one').eq(j).stop().hide();



	});
	$('.show-thems').mouseleave(function () {
		// console.log(this);
		var j = $(this).index();
		// console.log(i);

		// $('.show-thems').eq(j).stop().animate({
		// 	// width: 220,
		// 	height:220,
		// 	// marginRight:''

		// }, 500);
		$('.show-thems img').eq(j).stop().animate({
			width: 220,
			height: ''


		}, 500);

		$('.show-thems .one').eq(j).stop().show();
	});



})


//introduce区域
$(function () {
	$('.left_img .thems').mouseenter(function () {

		var i = $(this).index();
		// console.log(i);
		$('.left_img .thems .one').eq(i).stop().slideToggle();
		$('.left_img .thems h3').eq(i).stop().slideToggle();

	});
	$('.left_img .thems').mouseleave(function () {

		var i = $(this).index();
		// console.log(i);
		$('.left_img .thems .one').eq(i).stop().slideToggle();
		$('.left_img .thems h3').eq(i).stop().slideToggle();

	});
})



// mid_click区域
//背景颜色变宽 点击li 图片转换
//左侧

$(function () {
	// 鼠标进入li，先获取这个li的索引值，通过索引值找到对应div显示，其他隐藏
	// 事件 
	$('#left .l_lists').mouseenter(function () {
		// 索引值
		var index = $(this).index();
		// 显示，要找的和li索引值对应的div
		// $('#content div').eq(index).show();
		// 其他兄弟要隐藏
		// $('#content div').eq(index).siblings().hide();
		$('#r_box div').eq(index).show().siblings().hide();

		$('i').eq(index).stop().animate({
			width: 400
		}, 500)
	})
	$('#left .l_lists').mouseleave(function () {
		var index1 = $(this).index();
		$('i').eq(index1).stop().animate({
			width: 5
		}, 500)

	})
})


$(function () {
	// 鼠标进入li，先获取这个li的索引值，通过索引值找到对应div显示，其他隐藏
	// 事件 
	$('#box1 .l_lists ').mouseenter(function () {
		// 索引值
		var index = $(this).index();
		// 显示，要找的和li索引值对应的div
		// $('#content div').eq(index).show();
		// 其他兄弟要隐藏
		// $('#content div').eq(index).siblings().hide();
		$('#r_box div').eq(index).show().siblings().hide();

		$('i').eq(index).stop().animate({
			width: 400
		}, 500)
	})
	$('#left .l_lists').mouseleave(function () {
		var index1 = $(this).index();
		$('i').eq(index1).stop().animate({
			width: 5
		}, 500)

	})
})


// 右
$(function () {

	$('.right_box .box li').mouseenter(function () {
		// console.log(this);
		var i = $(this).index();
		// console.log(i);
		$('.right_box .box li .cover').eq(i).stop().slideToggle();

	});
	$('.right_box .box li').mouseleave(function () {
		// console.log(this);
		var i = $(this).index();
		// console.log(i);
		$('.right_box .box li .cover').eq(i).stop().slideToggle();

	});

})

// 返回顶部
$('.top_return').click(function () {

	$('top_return').animate({
		scrollTop: 400
	})
})