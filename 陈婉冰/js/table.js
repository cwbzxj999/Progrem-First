//获取所有第一层table栏a标签
var alink1 = document.querySelectorAll('.table_one>a');

for (var i = 0; i < alink1.length; i++) {
    alink1[i].onmouseenter = function () {
        //排他
        var dom = document.querySelector('.table_active');
        dom.classList.remove('table_active');
        this.classList.add('table_active');

        // 排它思想
        var all = document.querySelectorAll('.table_one_con .item')
        for (i = 0; i < all.length; i++) {
            all[i].style.display = 'none';
        }

        //用id名来设置事件，因为自定义属性值和id值设置的一样，所以先获取当前标签的自定义属性值，就等于id值

        var emId = this.dataset.tab1;

        //这是emId的值就是内容区域id的值
        //通过标签的ID值直接获取元素
        var element = document.getElementById(emId);

        //再显示盒子
        element.style.display = 'block';

    }

}


//获取所有第二层武器盒子table栏a标签
var alink2 = document.querySelectorAll('.table_one_con #o_one a');

for (var i = 0; i < alink2.length; i++) {
    alink2[i].onmouseenter = function () {
        //排他
        // var dom = document.querySelector('.table_active');
        // dom.classList.remove('table_active');
        // this.classList.add('table_active');

        // 排它思想
        var all = document.querySelectorAll('.tool_con .item')
        for (i = 0; i < all.length; i++) {
            all[i].style.display = 'none';
        }

        //用id名来设置事件，因为自定义属性值和id值设置的一样，所以先获取当前标签的自定义属性值，就等于id值

        var emId = this.dataset.tab2;

        //这是emId的值就是内容区域id的值
        //通过标签的ID值直接获取元素
        var element = document.getElementById(emId);

        //再显示盒子
        element.style.display = 'block';
    }

}

// 获取所有第二层模式盒子table栏a标签
var alink3 = document.querySelectorAll('.table_one_con #o_two a');

for (var i = 0; i < alink3.length; i++) {
    alink3[i].onmouseenter = function () {
        // 排他
        // var dom = document.querySelector('.table_active');
        // dom.classList.remove('table_active');
        // this.classList.add('table_active');

        // 排它思想
        var all = document.querySelectorAll('.method_con .item')
        for (i = 0; i < all.length; i++) {
            all[i].style.display = 'none';
        }

        //用id名来设置事件，因为自定义属性值和id值设置的一样，所以先获取当前标签的自定义属性值，就等于id值

        var emId = this.dataset.tab2;

        //这是emId的值就是内容区域id的值
        //通过标签的ID值直接获取元素
        var element = document.getElementById(emId);

        //再显示盒子
        element.style.display = 'block';
    }

}



// 获取所有第三层地图盒子table栏a标签

var alink4 = document.querySelectorAll('.table_one_con #o_three a');

for (var i = 0; i < alink4.length; i++) {
    alink4[i].onmouseenter = function () {
        // 排他
        // var dom = document.querySelector('.table_active');
        // dom.classList.remove('table_active');
        // this.classList.add('table_active');

        // 排它思想
        var all = document.querySelectorAll('.pic_con .item')
        for (i = 0; i < all.length; i++) {
            all[i].style.display = 'none';
        }

        //用id名来设置事件，因为自定义属性值和id值设置的一样，所以先获取当前标签的自定义属性值，就等于id值

        var emId = this.dataset.tab2;

        //这是emId的值就是内容区域id的值
        //通过标签的ID值直接获取元素
        var element = document.getElementById(emId);

        //再显示盒子
        element.style.display = 'block';
    }
}





