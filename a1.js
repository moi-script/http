

import http from "http";

// Create an agent with keepAlive enabled
const agent = new http.Agent({
  keepAlive: false,     // Reuse sockets for multiple requests
  maxSockets: 10,       // Max sockets per host
  maxFreeSockets: 10,   // How many free sockets to keep in the pool
  timeout: 60000,       // Socket timeout (ms)
  agent : false
});

// agentKeepAliveTimeoutBuffer 
// maxTotalSockets 
// scheduling 
// proxyEnv
// defaultPort
// protocol 

// http.get(options[, callback])
// http.get(url[, options][, callback])


// Agent
// │
// ├─ Host:Port (like example.com:80)
// │   ├─ Socket #1
// │   ├─ Socket #2
// │   └─ ...
// │
// ├─ Host:Port (like api.example.com:443)
// │   ├─ Socket #1
// │   ├─ Socket #2
// │   └─ ...
// │
// └─ (more hosts...)

// this will lead to proxy sides 
// reverse proxy, api gateway, CDN, forward proxy



// Make multiple requests using the same agent
for (let i = 0; i < 3; i++) {
  http.get("http://example.com", { agent }, (res) => {
    console.log(`Request ${i + 1} status:`, res.statusCode);

    res.on("data", (chunk) => {});
    res.on("end", () => {
      console.log(`Request ${i + 1} finished.`);
    });
  });
}

// Later, destroy the agent to free resources