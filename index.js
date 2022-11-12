const {Client, GatewayIntentBits, Collection, SlashCommandBuilder} = require("discord.js");
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.DirectMessages
    ]
});

const data = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Renvoie pong")
    .setName("hi")
    .setDescription("Renvoie bonjour")

client.on("ready", () => {
    //client.application.commands.create(data);
    client.guilds.cache.get("796382215570587705").commands.create(data)

    console.log("Bot operationnel !");
}); 

client.on("interactionCreate", interaction => {
    if(interaction.isCommand()){
        if (interaction.commandName === "ping"){
            interaction.reply("Pong")
        } 
        if (interaction.commandName === "hi"){
            interaction.reply("Salut !")
        } 
    }
})

client.login("MTA0MDk0Nzg0OTE0NTM2NDUxMQ.GQqT4J.ubp23iNKr6EzqBvqI4mX2k_mNAoFdEBwofMogo");
client.login(process.env.TOKEN);