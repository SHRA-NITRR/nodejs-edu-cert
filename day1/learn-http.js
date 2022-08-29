const http= require('http');

http.createServer((req, res)=>{
    res.writeHead(200);
    res.write("Hello World");
    res.end();
}).listen(3333, 'localhost', ()=>{
    console.log("The server is running")
});

http.ceate