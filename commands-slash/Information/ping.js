const { Interaction } = require('discord.js')

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
         * @param {Interaction} interaction 
         */
        async (interaction) => {
            await interaction.reply({ content: `pong!`, ephemeral: false })
        }
}

