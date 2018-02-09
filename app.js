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