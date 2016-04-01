const fs = require('fs');

var data = '';


// 创建可读流

const readStream = fs.createReadStream('input.txt');

// 设置编码为utf-8

readStream.setEncoding('UTF8');

//处理流 data, end, error

readStream.on('data', function(chunk) {
   data += chunk ;
});

readStream.on('end', function() {
   console.log('data = ' + data); 
});

readStream.on('error', function(error) {
    console.log('error ' + error);
});


