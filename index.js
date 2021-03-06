// Discord Bot Template - If Statement
// Made by: Ethan Lee
// Github: https://github.com/Ealeex/DiscordBotTemplate-IfStatement

const { Client } = require('discord.js');
const client = new Client({disableEveryone: true, autoReconnect: true});
client.config = require('./config.json');
client.startTime = Date.now();

console.clear();
client.on('ready', async () => {
    client.user.setActivity(`Serving ${client.guilds.cache.size} servers. | ${client.config.prefix}help | Made by L33`);
    console.log(`[INVITE] - https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`);
    const servers = client.guilds.cache.map(guild => `\n\t> '${guild.name}' with ${guild.memberCount} members.`);
    console.log(`[INFO] - ${client.user.username} is online in ${client.guilds.cache.size} servers: ${servers}.`);
    console.log(`[CREATION] - ${client.user.username} was made on '${client.user.createdAt}'`);
    console.log(`[STATUS] - ${client.user.username} loaded in ${Date.now() - client.startTime}ms.`);
});

client.on('message', async(message) => {
    if(!message.content.startsWith(client.config.prefix) || message.author.bot) return;
    args = message.content.substring(client.config.prefix.length).split(" ");
    command = args.shift().toLowerCase();

    if(command == 'ping') {
        let msg = await message.channel.send(":question:  **Ping?**");
        return msg.edit(`:ping_pong:  **Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms.**`);
    }

    if(command == 'help') {
        let prefix = client.config.prefix;
        return message.channel.send(`**Command Help | [Required] {Optional}**\r${prefix}ping: Returns the bot's ping.\r${prefix}help: Returns command info.`);
    }

});

client.login(client.config.token);
