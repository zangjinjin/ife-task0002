function isArray(arr) {
  if(arr.constructor===Array){ return ture;}
  else {return false;}
}
function isFunction(fn) {
  if(typeof(fn)=="function"){ return ture;}
  else {return false;}
}
// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(src) {
  if(src==''||typeof src!='object')
    return src;
  }
  if(src instanceof Date){
    var clone=new Date(src.getDate());
    return clone;
  }
  if(src instanceof Array){
    var clone=[];
    for(var i=0,len=src.length;i<len;i++){
      clone[i]=src[i];
    }
     return src;
    if(src instanceof Object){
      var clone={};
      for(var key in src){
        clone[key]=cloneObject(src[key]);
      }
      return clone;
    }
 
}
// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr) {
    var newarr=[];
    for(var i=0;i<arr.length;i++){
      if(newarr.indexOf(arr[i])==-1){
        newarr.push(arr[i]);
      }
    }
    return newarr;
}
// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
function simpleTrim(str){
	var len=str.length;
	for(var i = 0;i < len; i++){
		if(str[i]===' '||str[i]==='\t'){
		}else{
			break;
		}
	}
	if(i===len) {return '';}
	for(var j= len; j > 0; j--){
		if (str[j-1] === ' ' ||str[j-1] === '\t') {
		}else{
			break;
		}
	}
	return str.substring(i, j);
}
function trim(str){
	return str.replace(/^ \s+|\s+$/g,'');
}
// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
   for(var i=0;i<arr.length;i++){
		fn(arr[i],i);
   }
}
// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
    var num = 0;
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) { // 不去遍历继承来的对象的属性
                num++;
            }
    }
   return num;
}
// 判断是否为邮箱地址
function isEmail(emailStr) {
    var reg=/^(\.\w-)+@(\w-)+(\.[a-zA-Z0-9_-]+)+$/;
    console.log(reg.test(emailStr));
}
// 判断是否为手机号
function isMobilePhone(phone) {
   var rex=/^\d{11}$/;
   console.log(rex.test(phone));
}
