var newMessageData = (from, text) => {
    return {
        from: from,
        text: text,
        time: new Date().getTime()
    };
}

module.exports = {newMessageData};