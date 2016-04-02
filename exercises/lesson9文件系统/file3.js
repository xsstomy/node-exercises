/**
 *  fs.stat(path, callback)
 *  获取文件信息
 */

const fs = require('fs');

fs.stat('input.txt', function(err, stats) {
    console.log('stat: ' + stats.isFile());    
});

