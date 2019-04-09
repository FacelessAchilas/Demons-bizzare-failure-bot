const Discord = require('discord.js');
cont client = new Discord.Client();

bot.on('ready', function(){
    console.log("Ready");
});

bot.login(process.env.BOT_TOKEN)
