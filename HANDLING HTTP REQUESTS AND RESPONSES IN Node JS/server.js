const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 5000;

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Handle GET request for the root URL
    if (req.method === 'GET' && req.url === '/') {
        // Read the index.html 
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {
                // Send a 500 Internal Server Error response if there's an error reading the file
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Server Error');
                return;
            }
            // Send the HTML file with a 200 OK status
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    } 
    // Handle POST request for the /post URL
    else if (req.method === 'POST' && req.url === '/post') {
        // Send a response indicating the POST request was received
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('This is POST request');
    } 
    else {
        // Send a 405 Method Not Allowed response for unsupported methods or URLs
        res.writeHead(405, {'Content-Type': 'text/plain'});
        res.end('Method Not Allowed');
    }
});

// Start the server and listen on the specified port
server.listen(port, () => {
    console.log(`Server listening on http://127.0.0.1:${port}`);
});