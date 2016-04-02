
const fs = require('fs');

fs.readFile('input.txt', function(err, data) {
   if(err) {
       return console.error(err);
   } 
   
   console.log('异步读取: ' + data);
});


// 同步读取

const data = fs.readFileSync('input.txt');

console.log('同步读取' + data.toString());

console.log('程序执行完成!');

