// ========== SETUP =============
var tmi             = require("tmi.js"),
    viewerCommands  = require("./viewerCommands"),
    modCommands     = require("./modCommands");

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
    if (self) return;

    var cmd = viewerCommands.find(function(cmd) {
        return cmd.name === message;
    }); 

    client.action("wolvesatmydoor", cmd.response)
});