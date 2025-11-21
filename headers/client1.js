

// including different type of request


import http from 'http';

const requestObject = {
    host : '',
    port : 3000,
    path : '/data',
    method : 'GET'
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