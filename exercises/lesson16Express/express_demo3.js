const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello world!');
});

const server = app.listen(8081, () => {
    const host = server.address().address;
    const port = server.address().port;
    
    console.log('应用实例，访问地址： http://%s:%s', host, port);
    
    
});


