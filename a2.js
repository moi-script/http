import { createServer, request } from 'node:http';
import { connect } from 'node:net';
import { URL } from 'node:url';
// http.ClientRequest

// close
// connect
// finish
// information
// response
// socket
// timeout
// upgrade 

// request.cork()
// request.end(data, encoding, callback)
// request.destroy(error)
// request.flushHeaders()
// request.getHeader(name)
// request.getHeaderNames()
// request.getHeaders()
//request.getRawHeaderNames()
//request.hasHeader(name)
//request.maxHeaderCount


// request.path
// request.method
// request.host
// request.protocol
// request.removeHeader(name)
// request.reusedSocket
// request.setHeader()
// request.setNoDelay() 
// request.setSocketKeepAlive()
// request.setTimeout()
// request.socket
// request.uncork()
// request.writableEnded
// request.write(chunk, encoding, callback)



const proxy = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('okay');
});
// this create a server, what server? what port host or endpoint?


// this is on, connect event, what triggered it? does it the request earlier i think no?

proxy.on('connect', (req, clientSocket, head) => {
  // Connect to an origin server

  const { port, hostname } = new URL(`http://${req.url}`);
  
  const serverSocket = connect(port || 80, hostname, () => {
    clientSocket.write('HTTP/1.1 200 Connection Established\r\n' +
                    'Proxy-agent: Node.js-Proxy\r\n' +
                    '\r\n');
    serverSocket.write(head);
    serverSocket.pipe(clientSocket);
    clientSocket.pipe(serverSocket);
  });
});

 
proxy.listen(3000, 'localhost', () => {

  const options = {
    port: 3000,
    host: 'localhost',
    method: 'CONNECT',
    path: 'localhost:3000',
  };

  const req = request(options);
  req.end();

  req.on('connect', (res, socket, head) => {
    console.log('got connected!');

    socket.write('GET / HTTP/1.1\r\n' +
                 'Host: localhost\r\n' +
                 'Connection: close\r\n' +
                 '\r\n');
    socket.on('data', (chunk) => {
      console.log(chunk.toString());
    });
    socket.on('end', () => {
      proxy.close();
    });
  });
});