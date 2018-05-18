//const hbs = require('hbs');
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

    socket.emit('newMessage',{
        from: 'mike',
        text: 'whats up',
        time: new Date()
    });

    socket.on('createMessage',(message) => {
        console.log('Message creation', message);
    });

});



//app.set('view engine', 'hbs');
app.use(express.static(publicPath));
//app.render('/', (req, res) => res.send('Hello World!'));

server.listen(port, () => console.log(`Example app listening on port ${port}!`));