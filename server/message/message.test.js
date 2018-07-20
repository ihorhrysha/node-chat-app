var expect = require('expect');

var {newMessageData} = require('./message');
var {newLocationData} = require('./message');

describe('newLocationData', () => {

    it('should generate correct location object', () =>{
        var from = 'grego';
        var latitude = 12;
        var longitude = 15;
        var url = `https://www.google.com/maps?q=${latitude},${longitude}`
        var message = newLocationData(from, latitude, longitude);

        expect(message).toHaveProperty('from',from);
        expect(message).toHaveProperty('url',url);        

    }) 

});

describe('newMessageData', () => {

    it('should generate correct message object', () =>{
        var from = 'grego';
        var text = 'something';
        var message = newMessageData(from,text);

        expect(message).toMatchObject({from, text});

    }) 

});