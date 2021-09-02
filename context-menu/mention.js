const { CommandInteraction } = require('discord.js')

module.exports = {
    data: {
        name: 'ping',
        type: 3
    },
    name: "ping",
    perms: [],
    run:
        /**
         * 
         * @param {CommandInteraction} interaction 
         */
        async (interaction) => {
            await interaction.reply({ content: `pong!`, ephemeral: false })
        }
}

