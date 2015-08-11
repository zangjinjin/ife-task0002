var eventUtil={
	addHandler:function(element,type,handler){
		if(element.addEventListener){
			element.addEventListener(type,handler,false);
		}else if(element.attachEvent){
			element.attachEvent('on'+type,handler);
		}else{
			element['on'+type]=handler;
		}
	},
	removeHandler:function(element,type,handler){
		if(element.removeEventListener){
			element.removeEventListener(type,handler,false)
		}else if(element.detachEvent){
			element.detachEvent('on'+type,handler);	
		}else{
			element['on'+type]=null;
		}
	},
	getType:function(event){
		return event.type;
	}
	getElement:function(event){
		return event.target ||event.srcElement;
	}
	getEvent:function(event){
		return event?event:window.event;
	},
	preventDefalse:function(event){
		if(event.preventDefault){//方法判断时不加圆括号
			event.preventDefault();
		}else{
			event.returnValue=false;
		}
	},
	stopPropagation:function(event){
		if(event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancelBubble=false;
		}
	},
}
