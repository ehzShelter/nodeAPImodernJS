const http = require('http');

const hostName = '127.0.0.1';
const port = 3000;

// returns a new http web-server object
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('content-type', 'text/plain');
  res.end('Hello nodeJS\n');
});

server.listen(port, hostName, () => {
  console.log(`server is running at http://${hostName}:${port}/`);
});
