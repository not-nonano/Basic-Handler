const { ContextMenuInteraction } = require('discord.js')

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
         * @param {ContextMenuInteraction} interaction 
         */
        async (interaction) => {
            await interaction.reply({ content: `pong! ${interaction.client.users.cache.get(interaction.targetId)}`, ephemeral: false, allowedMentions: { users: [] } })
        }
}

