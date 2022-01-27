const http = require('http')
const fs = require('fs')
var argv = require('minimist')(process.argv.slice(2));
argv["port"]
const port = argv.port || process.env.PORT || 3000;


fs.readFile('./www/index.html', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return
        process.exit(1);
    }

    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
    })

    server.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    })
})
