const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`
        <h1>Hello from My Node.js Application!</h1>
        <h2>Welcome to my New_Branch!</h2>
        <p>This code was developed inside a Linux VM.</p>
        <p>Branch : New_Branch</p>
    `);
});

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
