const { CommandInteraction } = require('discord.js')

module.exports = {
    data: {
        name: 'ping',
        description: 'Replies pong!'
    },
    name: "ping",
    category: "Information",
    description: "",
    perms: [],
    showHelp: false,
    run:
        /**
         * 
         * @param {CommandInteraction} interaction 
         */
        async (interaction) => {
            await interaction.reply({ content: `pong!`, ephemeral: false })
        }
}

