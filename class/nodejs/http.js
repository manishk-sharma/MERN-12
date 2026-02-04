// import http from 'http';

// // console.log(http);

// const PORT = 3000;
// const server = http.createServer((req, res) => {
//     // console.log(req.method)
//     // console.log(req.url)    
//     // console.log(req.headers)
//     // res.statusCode = 400;
//     // // console.log(res)
//     // res.setHeader("Author", "Manish Kumar");   
//     // res.setHeader("Content-Type", "html");
//     // res.end("Hello, World!");
//     if (req.url === "/") {
//         res.end("Hello from Home Page");
//     }
//     else if (req.url === "/about") {
//         res.end("Hello from About Page");
//     }
//     else if (req.url === "/contact") {
//         res.end("Hello from Contact Page");
//     }
//     else {
//         res.statusCode = 404;
//         res.end("Page not found");
//     }

// });

// server.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });




//Express JS
import express from 'express';
import { Server } from 'http';
const server = express();
const PORT = 3000;
server.get("/", (req, res) => {
    res.send("Hello from Home Page");
});
server.get("/about", (req, res) => {
    res.send("Hello from About Page");
});
server.get("/contact", (req, res) => {
    res.send("Hello from Contact Page");
});
// server.use((req, res) => {
//     res.status(404).send("Page not found");
// });
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

