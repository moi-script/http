// most common http headers
import http from 'http';


const server = http.createServer((req, res) => {
    if((req.url === '/data') && req.method === 'GET') {
         res.writeHead(200, {
            'Content-Type' : 'text/pain'
         })
         res.write('Hello');
         res.end();
    }
})


server.listen(3000, () => console.log('Running at port 3000'));