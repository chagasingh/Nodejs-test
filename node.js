const http = require('http')
const fs = require('fs')


const server = http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method;
    
    if (url === '/'){
        
        fs.readFile('message.txt' ,{encoding : "utf-8"} , (err,message)=>{
            if(err){
                console.log(err)
            }
            console.log('data from message ---------'+message);

            res.write('<html>');
            res.write('<head><title>THis is</title></head>')
            res.write(`<body><h1>${message}</h1></body>`)
            res.write('<body><form action="/message" method="post"><input type="text" name="message"><button type="submit">Send</button></form></body>');
            res.write('/<html>');
            return res.end();

        })  
    }
    else if (url === '/message' && method ==='POST'){
        const body = [];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt',message);
        });

        
        res.statusCode=302;
        res.setHeader('Location','/');
        return res.end();
    }else{
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>THis is</title></head>')
        res.write('<body><h1>how are you</h1></body>');
        res.write('/<html>');
        res.end();
    }
        
    
});
    

server.listen(3000)