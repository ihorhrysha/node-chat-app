var socket = io();
socket.on('connect', function () {
    console.log('Connected to server');
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('serverMessage',function (message){
    var li = jQuery('<li></li>')
    li.text(`${message.from}: ${message.text}`)

    jQuery('#messages').append(li);
});

socket.on('serverGeolocation',function (message){
    var li = jQuery('<li></li>');
    var a = jQuery('<a target="_blank">My current location</a>');
    li.text(`${message.from}: `);
    a.attr('href',message.url);
    li.append(a);

    jQuery('#messages').append(li);
});




jQuery('#message-form').on('submit', function(e){
    e.preventDefault();

    var messageTextbox = jQuery('[name=message]');

    socket.emit('clientMessage',{
        from: 'Grego',
        text: messageTextbox.val()
    }, function() {
        messageTextbox.val('');
    });

})

var locationButton = jQuery('#send-location');

locationButton.on('click', function() {
    if (!navigator.geolocation) {
        return alert('Geolocation not supported');
    }

    locationButton.attr('disabled','disabled').text('Sending location...');

    navigator.geolocation.getCurrentPosition(function(position){
        
        locationButton.removeAttr('disabled').text('Send location');

        socket.emit('clientGeolocation',{
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
        }, function() {
            
        });

    }, function(err) {
        return alert('Unable to fetch geolocation');
    })
});