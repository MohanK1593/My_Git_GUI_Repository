const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`
        <h1>Hello from My Node.js Application!</h1>
        <p>This application is stored in GitHub.</p>
        <p>Later, we can create a Docker image from this repository.</p>
    `);
});

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
