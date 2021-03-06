const SocketServer = require('ws').Server;
const express = require('express');

const port = process.env.PORT || 5000;
const server = express().listen(port, () => console.log(`Listening on ${port}`))

const wss = new SocketServer({ server })
let messageStr = '';

wss.on('connection', ws => {

    ws.send(messageStr);
    ws.on('close', () => {
        console.log('Close connected')
    })

    ws.on('message', (data)=> {
        messageStr += data;
        const clients = wss.clients
        clients.forEach(client => {
            client.send(messageStr)
        })
        console.log(messageStr);
    })
});
