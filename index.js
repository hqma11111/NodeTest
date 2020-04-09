const SocketServer = require('ws').Server;
const express = require('express');

const hostname = "127.0.0.1";
const port = process.env.PORT || 5000;

const server = express().listen(port, () => console.log(`Listening on ${port}`))

console.log(server);    