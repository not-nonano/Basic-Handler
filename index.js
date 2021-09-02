const { Client, Collection, Options } = require('discord.js');
require('dotenv').config()
const colors = require("colors");

const client = new Client({
    makeCache: Options.cacheWithLimits({
        MessageManager: 200, // This is default
        PresenceManager: 0,
        // Add more class names here
    }),
    restTimeOffset: 0,
    restWsBridgetimeout: 100,
    intents: ['GUILD_MESSAGES', 'GUILDS', 'GUILD_VOICE_STATES', 'GUILD_MEMBERS'],
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
    restWsBridgeTimeout: 100
});

client.commands_slash = new Collection();
client.context_menu = new Collection();

["context-menu","command-slash", "event", "function"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});



client.login(process.env.DISCORD_TOKEN)
