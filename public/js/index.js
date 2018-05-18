var socket = io();
socket.on('connect', function () {
    socket.emit('createMessage',{
        from: 'Andrew',
        text : 'Hello'
    });
});

socket.on('newMessage',function (message){
    console.log('Got new Message', message);
});
