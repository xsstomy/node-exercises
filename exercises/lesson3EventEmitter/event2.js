const EventEmitter = require('events').EventEmitter;

const emitter = new EventEmitter();

const lister1 = function() {
    console.log('listener1');
}

const lister2 = function() {
    console.log('listener2');
}


emitter.addListener('connection', lister1);

emitter.on('connection', lister2);

var eventListeners = require('events').EventEmitter.listenerCount(emitter, 'connection');

console.log('eventListeners1 = ' + eventListeners);

// 提交connection
emitter.emit('connection');

emitter.removeListener('connection', lister1);

console.log('listener1 不再受监听!');

emitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(emitter,'connection')

console.log('eventListeners2 = ' + eventListeners);

console.log('程序执行完毕!');



