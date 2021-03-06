const { Interaction } = require('discord.js')

module.exports = {
    name: 'interactionCreate',
    once: false,
    /**
     * 
     * @param {Interaction} interaction 
     * @returns 
     */
    async execute(interaction) {
        if (interaction.isCommand()) {
            if (!interaction.client.commands_slash.has(interaction.commandName)) return;

            const command = interaction.client.commands_slash.get(interaction.commandName)

            if (!interaction.member.permissions.has(command.perms)) {
                let neededPerms
                command.perms.forEach(perm => {
                    neededPerms += `\`${perm}\` `
                })
                return interaction.reply({ content: `You don't have permission to run this command\nYou need ${neededPerms}`, ephemeral: true })
            }

            try {
                await command.run(interaction)
            } catch (error) {
                console.error(error);
                await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
            }

        }
        if (interaction.isContextMenu()) {
            if (!interaction.client.context_menu.has(interaction.commandName)) return;

            const context_menu = interaction.client.context_menu.get(interaction.commandName)

            if (!interaction.member.permissions.has(context_menu.perms)) {
                let neededPerms
                context_menu.perms.forEach(perm => {
                    neededPerms += `\`${perm}\` `
                })
                return interaction.reply({ content: `You don't have permission to run this command\nYou need ${neededPerms}`, ephemeral: true })
            }

            try {
                await context_menu.run(interaction)
            } catch (error) {
                console.error(error);
                await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
            }
        }
    }
}