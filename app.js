// ========== SETUP =============
var tmi = require("tmi.js");

var options = {
    options: {
        debug: true
    },
    connection: {
        reconnect: true
    },
    identity: {
        username: "wlvstv",
        password: "" //Wlvstv twitch OAuth token here
    },
    channels: ["wolvesatmydoor"]
};

var client = new tmi.client(options);
client.connect();

// basic chat event listener
client.on('chat', function(channel, user, message, self) {
    if (message === '!twitter'){
        client.action("wolvesatmydoor", "https://twitter.com/wlvsatmydoor");
    }
});