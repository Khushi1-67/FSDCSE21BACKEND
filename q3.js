const http = require("http");

const server = http.createServer((req, res) => {

    // Status code
    res.statusCode = 200;

    // Headers
    res.setHeader("Content-Type", "text/plain");

    // Response
    res.end("Hello World");
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});