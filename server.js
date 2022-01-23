const http = require('http')
const fs = require('fs')
var argv = require('minimist')(process.argv.slice(2));
const port = argv["port"] || 3000;

fs.readFile('./www/index.html', (err, data) => {
    if (err) throw err;
    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      })

      server.listen(port, () => {
        console.log('Server listening on port ${port}');
    
    })
  })

