const http = require('http'); /*require te permite usar otro modulo*/

const host  = '127.0.0.1';
const port  = 3000;

const server = http.createServer((req, res)=>{
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('Hello World of JS');
});

server.listen(port, host, () => {
    console.log(`server running at ${host}:${port}`);
});


