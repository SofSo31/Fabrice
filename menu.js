const Discord = require('discord.js');
const client = new Discord.Client();

client.login(ODA0ODU3MzE2MTAwMDE0MTAw.YBSbyQ.EwMRF1EHR8-6Fgp8QcI9ERPpej8);

var prefix = ("*");

client.on("message", (message) => {

    if(message.content === "créateur") {
        message.channel.send("丂のｷ丂の#6229")
    }

    if(message.content === prefix + "help"){
        message.channel.send("Veux-tu de l'aide?")
    }


});
