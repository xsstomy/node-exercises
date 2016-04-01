
//写入数据
var  buf = new Buffer(256);
var  length = buf.write('xsstomy.com');

console.log('字节数: ' + length);


//读取数据

console.log('读取内容', buf.toString('utf-8', 0, 7));


// 转换json对象

var json = JSON.stringify(buf.toJSON());

console.log('json = ' + json); 

// 合并  concat
var buffer1 = new Buffer('exercise');
var buffer2 = new Buffer('xsstomy.com');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 内容: " + buffer3.toString());

// 对比  compare

var buffer1 = new Buffer('ACDE');
var buffer2 = new Buffer('D');
var result = buffer1.compare(buffer2);

if(result < 0) {
   console.log(buffer1 + " 在 " + buffer2 + "之前");
}else if(result == 0){
   console.log(buffer1 + " 与 " + buffer2 + "相同");
}else {
   console.log(buffer1 + " 在 " + buffer2 + "之后");
}
