// Create web server
// 1. Create server
// 2. Listen for requests
// 3. Process requests
// 4. Create response
// 5. Send response
// 6. Close connection

// 1. Create server
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // 3. Process requests
  const pathName = req.url;

  if (pathName === '/' || pathName === '/overview') {
    res.end('This is the OVERVIEW');
  } else if (pathName === '/product') {
    res.end('This is the PRODUCT');
  } else if (pathName === '/api') {
    // 4. Create response
    // Read data from file
    fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
      // 5. Send response
      res.writeHead(200, {
        'Content-type': 'application/json'
      });
      res.end(data);
    });
  } else {
    // 5. Send response
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world'
    });
    res.end('<h1>Page not found</h1>');
  }
});

// 2. Listen for requests
server.listen(8000, '