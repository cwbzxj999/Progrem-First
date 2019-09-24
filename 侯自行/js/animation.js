/**
 * 
 * @param {要移动的元素} element 
 * @param {要移动的距离} target 
 * @param {方向} arr
 * @param {回调函数} Function 
 */
function animate(element, target, arr, Function) {
	let arrs;
	if (element.timer) {
		clearInterval(element.timer);
	}
	if (arr == 'top') {
		arr = 'offsetTop';
		arrs = 'top'
	} else {
		arr = 'offsetLeft';
		arrs = 'left'
	}
	element.timer = setInterval(function () {
		var current = element[arr];
		var step = 5;
		if (current > target) step = -Math.abs(step);
		if (Math.abs(current - target) <= Math.abs(step)) {
			element[arr] = target + 'px';
			clearInterval(element.timer);
			if (Function) Function();
			return;
		}
		current += step;
		element.style[arrs] = current + 'px';
	}, 20)
}
