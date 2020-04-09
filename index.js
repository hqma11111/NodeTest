const SocketServer = require('ws').Server;
const express = require('express');

const port = process.env.PORT || 5000;
const server = express().listen(port, () => console.log(`Listening on ${port}`))

const wss = new SocketServer({ server })

//當 WebSocket 從外部連結時執行
wss.on('connection', ws => {

    //連結時執行此 console 提示
    console.log('Client connected');

    const sendNowTime = setInterval(()=>{
        ws.send(String(new Date()));
    },1000);

    //當 WebSocket 的連線關閉時執行
    ws.on('close', () => {
        console.log('Close connected')
    })
    }
);
