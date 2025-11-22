// most common http headers
import http from 'http';
import { parseQuer } from './utils.js';
// parse header with query 


const origin  = 'http://localhost:3000';



const server = http.createServer((req, res) => {

    // needs to know the query first before making it into condition

    if(req.method === 'POST')
    parseQuer(origin, req.url);


    if((req.url === '/data') && req.method === 'GET') {
         res.writeHead(200, {
            'Content-Type' : 'text/pain'
         })
         res.write('Hello');
         res.end();
    }
})


server.listen(3000, () => console.log('Running at port 3000'));