// const EventEmitter = require('events').EventEmitter;

// const event = new EventEmitter();

// event.on('some_event', function() {
//     console.log('some_event 事件触发!');
// });

// console.log(Date.now());
// setTimeout(function(){ 
    
//     event.emit('some_event');
//     console.log(Date.now());
//  }, 1000);

//=========================================================
const EventEmitter = require('events').EventEmitter;

const emitter = new EventEmitter();

emitter.on('some_event', function(arg1 ,arg2) {
   console.log('listener1', arg1, arg2); 
});

emitter.on('some_event', function(arg1, arg2) {
   console.log('listener2', arg1, arg2); 
});

emitter.emit('some_event', 'arg1 参数', 'arg2 参数');

