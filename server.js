// const express = require("express");
// const http = require("http");
// const cors = require("cors");
// const morgan = require("morgan");

// const app = express();
// const PORT = 4000;

// app.use("/", (req, res) => {
//   res.send("<h1>Hello Docker</div>");
// });

// app.use(cors());
// app.listen(PORT, console.log("http://localhost:4000/"));

const http = require("http");
const port = 4000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Welcome to Node.js!\n");
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
