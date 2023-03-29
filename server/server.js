const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;
const http = require('http');

const { Server } = require('socket.io');

const server = http.createServer(app);

const io = new Server(server);

io.on("connection", (socket) => {
    console.log('connected!')
    socket.on('update', () => {
        console.log('updated!')
    })
})

app.get('/updateState', (req,res) => {
    res.status(200).send('Gotcha')
})



app.use('/', express.static(path.join(__dirname, '../dist')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

server.listen(PORT, () => {
    console.log('Server running on PORT:3000')
})








//{
// const wss = new WebSocketServer({ server: server });

// app.use(express.json())

// wss.on('connection', () => {
//     console.log('connected')
// })

// wss.onopen = () => {
//     console.log('Opened!')
// }

// wss.onclose = (evt) => {
//     console.log('Opened!')
//     wss.send('Websocket says Hello!')
// }

// // console.log(wss)

// wss.onerror = (error) => {
//     console.log(`WebSocket Error: ${error.message}`)
// }

// console.log(wss)


//}