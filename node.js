const http = require('http')



const server = http.createServer((req,res)=>{
    const url = req.url;
    res.setHeader('Content-Type','text/html');
    if (url === '/home'){
        res.write('<html>');
        res.write('<body><h1>welcome to home page</h1></body>');
        res.write('/<html>');
        return res.end();
    }
    else if (url === '/about'){
        res.write('<html>');
        res.write('<body><h1>welcome to about page</h1></body>');
        res.write('/<html>');
        return res.end();
    }
    else {
        res.write('<html>');
        res.write('<body><h1>welcome to node js happy coding</h1></body>');
        res.write('/<html>');
        return res.end();
    }
    
});

server.listen(3000)