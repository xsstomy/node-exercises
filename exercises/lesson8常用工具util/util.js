const util = require('util');

function Base() {
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function() {
        console.log('hello' + this.name);
    }
}


Base.prototype.showName = function() {
    console.log(this.name);
}

function Sub() {
    this.name = 'sub';
}

util.inherits(Sub, Base); 
varobjBase = newBase(); 
objBase.showName(); 
objBase.sayHello(); 
console.log(objBase); 
varobjSub = newSub(); 
objSub.showName(); 
//objSub.sayHello(); 
console.log(objSub);

// util.inspect 将任意对象转换为字符串

// util.isArray(object) 判断对象是否为数组 

// util.isRegExp(object) 判断是否是正则表达式 

util.isRexExp(/$/);

// util.isDate(object) 判断是否是日期

util.isDate(new Date());

