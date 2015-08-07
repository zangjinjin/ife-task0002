// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
    element.className+=" "+newClassName;
}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
    element.className=element.className.replace(oldClassName," ");
}

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    return element.parentNode===siblingNode.parentNode;
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
    var left=element.offsetLeft;
    var top=element.offsetTop;
    var parent=element.offsetParent;
    while(parent!=null){
        let+=parent.offsetLeft;
        top+=parent.offsetTop;
        parent=parent.offsetParent;
    }
    var scrollLeft=document.body.scrollLeft+document.documentElement.scrollLeft;
    var scrollTop=document.body.scrollTop+document.documentElement.scrollTop;
    
    left-=scrollLeft;
    top-=scrollTop;
    
    return{
        left;
        top;
    }
}

// 实现一个简单的Query
function $(selector) {
    return document.querySelector(selector);
}
