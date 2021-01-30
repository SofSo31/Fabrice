const Discord = require('discord.js');
const client = new Discord.Client();

client.login("process.env.TOKEN");

var prefix = ("*");

client.on("message", (message) => {
    console.log("Le bot est allumé")
    client.user.setStatus("dnd")
    client.user.setActivity("En développement | *help")

    if(message.content === prefix + "créateur") {
        message.channel.send("丂のｷ丂の#6229")
    }

    if(message.content === prefix + "help"){
        message.channel.send("Veux-tu de l'aide?")
    }


});
