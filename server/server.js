const path = require('path');
const {newMessageData} = require('./message/message');
const {newLocationData} = require('./message/message');
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
 
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

const app = express();
var server = http.createServer(app);
var io = socketio(server);

io.on('connection', function (socket) {
    
    //greetings
    socket.broadcast.emit('serverMessage', newMessageData('Admin', 'New User Joined'));
    socket.emit('serverMessage', newMessageData('Admin', 'Welcome to chat app'));
    
    //recieving message
    socket.on('clientMessage', (message, callback) => {
        io.emit('serverMessage', newMessageData(message.from, message.text));
        callback();
    });

    //recieving geolocation
    socket.on('clientGeolocation', (coords, callback) => {
        io.emit('serverGeolocation', newLocationData('Admin', coords.latitude, coords.longitude));
        callback();
    });

});

app.use(express.static(publicPath));

server.listen(port, () => console.log(`Example app listening on port ${port}!`));