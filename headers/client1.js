

// including different type of request


import http from 'http';

const requestObject = {
    host : 'localhost',
    port : 3000,
    path : '/data?abc=123&name=John',
    method : 'POST'
}

const client = http.request(requestObject);

client.end();

client.on('response', res => {
    let data ='';
    res.on('data', chunks => {
        data += chunks.toString();
    })

    res.on('end', () =>console.log('This is the response :: ', data))
})