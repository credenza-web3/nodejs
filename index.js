const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  const clientIp = req.connection.remoteAddress;
  console.log('Ip': clientIp)
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!');
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
