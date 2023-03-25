const http = require('http')

// function rqlistner(req,res){

// }

// http.createServer(rqlistner);

// http.createServer(function(req,res){

// });

const server = http.createServer((req,res)=>{
    console.log('chagan singh')
    console.log(req)
});

server.listen(4000)