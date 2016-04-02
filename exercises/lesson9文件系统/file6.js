var fs = require("fs");


console.log("查看 /Users/xiashishi/github/nodejs/exercises/lesson9文件系统 目录");
fs.readdir(__dirname,function(err, files){
   if (err) {
       return console.error(err);
   }
   files.forEach( function (file){
       console.log( file );
   });
   
   console.log('====================1');
   
});

fs.readdir("/Users/xiashishi/github/nodejs/exercises/lesson9文件系统",function(err, files){
   if (err) {
       return console.error(err);
   }
   files.forEach( function (file){
       console.log( file );
   });
   
   
//    console.log('====================2');
});
