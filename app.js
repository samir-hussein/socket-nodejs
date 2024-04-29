const express = require("express");
const http = require("http");
const Socket = require('./Socket.js');
const app = express();

const port = 3000;
const server = http.createServer(app);
const router = require("./route.js");


global.socket = new Socket(server);

app.use("/api", router);

server.listen(port, () => console.log(`Server listening at ${port}`));

module.exports = app;