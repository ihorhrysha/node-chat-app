var expect = require('expect');

var {newMessageData} = require('./message');

describe('newMessageData', () => {

    it('should generate correct message object', () =>{
        var from = 'grego';
        var text = 'something';
        var message = newMessageData(from,text);

        expect(message).toMatchObject({from,text});

    }) 

});