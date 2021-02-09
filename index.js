const Discord = require('discord.js');
const Canvas = require('canvas');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();



client.on('message', message => {
	
if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).trim().split(' ');
const command = args.shift().toLowerCase();


if(command === "punch"){
	const taggedUser = message.mentions.users.first();

	message.channel.send(`Take this >__< ${message.mentions.users.first()}` );
	message.channel.send(' https://tenor.com/YwWA.gif');

}else if(command === "hug"){
	const taggedUser = message.mentions.users.first();

	message.channel.send(`Let me hug u <3 >__< ${message.mentions.users.first()}` );
	message.channel.send(' https://tenor.com/vQcO.gif');

}


});

client.once('ready', () => {
	console.log('Ready!');
});




client.login("ODA4NjYzMjY4NjI0NTY0Mjk0.YCJ0Ww.1mCqJVONJO1Cl_KIvcW-2APUt4k");