var Discord = require('discord.io');

var bot = new Discord.Client({
    token: "MzUxOTI2NTA2MDMwNjI4ODY0.DIkUzA.aWclBRat-ttY-bqP0KI-8ZNA2O4",
    autorun: true
});

bot.on('ready', function() {
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
});

var alexMemes = ["Fuck you alex", 
"alex broadway will never work out", 
"i hope you like the smell of plastic", 
"you know there are other heroes besides bane in dota 2 right?"]

bot.on('message', function(user, userID, channelID, message, event) {
    if (message === "d.alex") {
        console.log(channelID);
        console.log(event.d.id);
        var error = bot.getMessage({
            channelID: channelID,
            messageID: event.d.id
        });
        console.log(error.message);
        /*bot.sendMessage({
            to: channelID,
            message: alexMemes[Math.floor(Math.random() * alexMemes.length)] 
        });*/
    }
});