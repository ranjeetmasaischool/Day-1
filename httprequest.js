// Import the built-in 'http' module
const http = require('http');
const read =require("fs");

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response header with a 200 OK status and Content-Type text/plain
    if(req.url!="/"){
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page Not Found\n');
    }

  // Send a response to the client
  else{

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello, World!\n');
    }
    
});

// Listen on a specific port and IP address (0.0.0.0 means it will listen on all available network interfaces)
const port = 3000;
const host = '0.0.0.0';

server.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}/`);
});
