// 输入框事件
// 获取
var year = document.querySelector('.year input');
var month = document.querySelector('.month input');
var day = document.querySelector('.day input');
var btn = document.querySelector('.btn');
var s_btn = document.querySelector('.s_btn');
var select = document.querySelector('#country')
var alert = document.querySelector('.alert');
var al_txt = alert.children[0];

// 获取时间函数
function getTime() {
    d = new Date();

    y = d.getFullYear();
    return y;
}

// 注册下拉框右侧按钮点击事件
s_btn.addEventListener('click', function () {
    select.click();
});

// 注册提交按钮点击事件
btn.onclick = function () {
    // 判断年不满足
    if (isNaN(year.value) || year.value.length < 4 || year.value < 0 || year.value > getTime()) {
        // 判断月不满足
        if (isNaN(month.value) || month.value.length < 1 || month.value < 0 || month.value > 12) {
            // 判断日期不满足
            if (isNaN(day.value) || day.value.length < 1 || day.value < 0 || day.value > 31) {
                alert.style.display = 'block';
                al_txt.innerText = '年份无效，月份无效,日期无效';
                year.style.background = 'rgba(255,156,0,.7)';
                year.style.border = "1px solid rgba(255,156,0,.7)";

                month.style.background = 'rgba(255,156,0,.7)';
                month.style.border = "1px solid rgba(255,156,0,.7)";

                day.style.background = 'rgba(255,156,0,.7)';
                day.style.border = "1px solid rgba(255,156,0,.7)";
            } else {
                // 日期满足
                alert.style.display = 'block';
                al_txt.innerText = '年份无效，月份无效';

                year.style.background = 'rgba(255,156,0,.7)';
                year.style.border = "1px solid rgba(255,156,0,.7)";

                month.style.background = 'rgba(255,156,0,.7)';
                month.style.border = "1px solid rgba(255,156,0,.7)";

                day.style.background = '';
                day.style.border = '';
            }
        } else {
            // 月满足
            if (isNaN(day.value) || day.value.length < 1 || day.value < 0 || day.value > 31) {
                // 日期不满足
                alert.style.display = 'block';
                al_txt.innerText = '年份无效，日期无效';

                year.style.background = 'rgba(255,156,0,.7)';
                year.style.border = "1px solid rgba(255,156,0,.7)";

                month.style.background = '';
                month.style.border = '';

                day.style.background = 'rgba(255,156,0,.7)';
                day.style.border = "1px solid rgba(255,156,0,.7)";
            } else {
                // 日期满足
                alert.style.display = 'block';
                al_txt.innerText = '年份无效';

                year.style.background = 'rgba(255,156,0,.7)';
                year.style.border = "1px solid rgba(255,156,0,.7)";

                month.style.background = '';
                month.style.border = '';

                day.style.background = '';
                day.style.border = '';
            }

        }
    } else {
        // 年满足
        if (isNaN(month.value) || month.value.length < 1 || month.value < 0 || month.value > 12) {
            // 月，日期不满足
            if (isNaN(day.value) || day.value.length < 1 || day.value < 0 || day.value > 31) {
                alert.style.display = 'block';
                al_txt.innerText = '月份无效,日期无效';

                year.style.background = '';
                year.style.border = '';

                month.style.background = 'rgba(255,156,0,.7)';
                month.style.border = "1px solid rgba(255,156,0,.7)";

                day.style.background = 'rgba(255,156,0,.7)';
                day.style.border = "1px solid rgba(255,156,0,.7)";
            } else {
                // 月不满足，日期满足
                alert.style.display = 'block';
                al_txt.innerText = '月份无效';

                year.style.background = '';
                year.style.border = '';

                month.style.background = 'rgba(255,156,0,.7)';
                month.style.border = "1px solid rgba(255,156,0,.7)";

                day.style.background = '';
                day.style.border = '';
            }
        } else {
            // 月满足
            if (isNaN(day.value) || day.value.length < 1 || day.value < 0 || day.value > 31) {
                // 日期不满足
                alert.style.display = 'block';
                al_txt.innerText = '日期无效';

                year.style.background = '';
                year.style.border = '';

                month.style.background = '';
                month.style.border = '';

                day.style.background = 'rgba(255,156,0,.7)';
                day.style.border = "1px solid rgba(255,156,0,.7)";

            } else {
                // 日期满足 未完善
                if (getTime() - year.value >= 16) {
                    alert.style.display = 'block';
                    al_txt.innerText = '验证成功';
                    window.location.href = '../路通/lt.html';

                    year.style.background = '';
                    year.style.border = '';

                    month.style.background = '';
                    month.style.border = '';

                    day.style.background = '';
                    day.style.border = '';
                } else {
                    alert.style.display = 'block';
                    al_txt.innerText = '未成年';

                    year.style.background = 'rgba(255,156,0,.7)';
                    year.style.border = "1px solid rgba(255,156,0,.7)";

                    month.style.background = 'rgba(255,156,0,.7)';
                    month.style.border = "1px solid rgba(255,156,0,.7)";

                    day.style.background = 'rgba(255,156,0,.7)';
                    day.style.border = "1px solid rgba(255,156,0,.7)";
                }

            }
        }
    }

}