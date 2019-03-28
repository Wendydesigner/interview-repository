function debounce(fn, wait) {
    var timer = null;
    return function() {
        var content = this;
        if(timer) {
            clearTimeout(timer);
            timer = null;
        }
        var args = arguments;
        timer = setTimeout(()=> {
            fn.apply(content, args)
        }, wait)
    }
}
setInterval(debounce(fn, 500),1000) // 左<右


function throttle(fn, wait) {
    var lastTime = null;
    return function() {
        var nowTime = new Date().getTime();
        if(nowTime - lastTime > wait || !lastTime) {
            fn();
            lastTime = nowTime;
        }
    }
}
setInterval(throttle(fn, 500), 1000) // 取最大值进行