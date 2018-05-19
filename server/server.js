const path = require('path');
const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

const app = express();
var server = http.createServer(app);
var io = socketio(server);

io.on('connection', function (socket) {

    // socket.emit('newMessage',{
    //     from: 'mike',
    //     text: 'whats up',
    //     time: new Date()
    // });

    socket.on('createMessage',(message) => {
        
        io.emit('newMessage',{
            from: message.from,
            text: message.text,
            time: new Date().getTime()
        });

    });

});

app.use(express.static(publicPath));

server.listen(port, () => console.log(`Example app listening on port ${port}!`));