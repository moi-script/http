import http from 'http';

const server = http.createServer((req, res) => {
    if(req.method === 'GET') {

        res.writeHead(200, {
            'Content-Type' : 'text/plain'
        })
        res.end('Hello')
    }

    if(req.method === 'CONNECT'){
        console.log('Connect is triggered in the server');
    }
})

server.listen(3000, () =>  console.log('http://localhost:3000'))