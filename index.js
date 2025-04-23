const http = require("http");
const fs = require("fs");
const path = require("path");
const { error } = require("console");

const server = http.createServer((req, res) => {
    let filePath = '';
  
    switch (req.url) {
      case '/':
        filePath = 'index.html';
        break;
      case '/about':
        filePath = 'about.html';
        break;
      case '/contact-me':
        filePath = 'contact-me.html';
        break;
      default:
        filePath = '404.html';
        res.statusCode = 404;
        break;
    }
  
    fs.readFile(path.join(__dirname, filePath), (err, data) => {
      if (err) {
        res.writeHead(500);
        return res.end('Error');
      }
  
      res.writeHead(res.statusCode || 200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  });
  

server.listen(8080, () => {
    console.log("Server running at http://localhost:8080")
})











// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World!');
//   }).listen(8080);