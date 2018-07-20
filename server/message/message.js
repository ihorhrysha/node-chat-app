var newMessageData = (from, text) => {
    return {
        from: from,
        text: text,
        time: new Date().getTime()
    };
}

var newLocationData = (from, latitude, longitude) => {
    return {
        from: from,
        url: `https://www.google.com/maps?q=${latitude},${longitude}`,
        time: new Date().getTime()
    };
}

module.exports = {newMessageData,newLocationData};