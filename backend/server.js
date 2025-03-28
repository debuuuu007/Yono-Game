const http = require("http");
const express = require('express');
const app = require("./app");
const { log } = require("console");
const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, () => {
    log("Server is running");
});