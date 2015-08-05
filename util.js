function isArray(arr) {
  if(arr.constructor===Array){ return ture;}
  else {return false;}
}
function isFunction(fn) {
  if(typeof(fn)=="function"){ return ture;}
  else {return false;}
}
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
function uniqArray(arr) {
    var newarr=[];
    for(var)
}
http://blog.csdn.net/chengxuyuan20100425/article/details/8497277
