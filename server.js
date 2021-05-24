const express = require("express");
const http = require("http");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const PORT = 4000;

app.use("/", (req, res) => {
  res.send("<h1>Hello Docker</div>");
});

app.use(cors());
app.listen(PORT, console.log("http://localhost:4000/"));
