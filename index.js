const { Client, GatewayIntentBits, DiscordAPIError } = require('discord.js');
const Discord = require('discord.js');

const client = new Client({ intents:[GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.DirectMessages, GatewayIntentBits.DirectMessageReactions] });
const loadCommands = require("./Loader/loadCommands.js");
const loadEvents = require("./Loader/loadEvents.js");

client.commands = new Discord.Collection()

client.login("")
loadCommands(client)
loadEvents(client)