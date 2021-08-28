const { Message, Collection } = require('discord.js')
require('dotenv').config()

// Cooldowns
const cooldowns = new Collection();

module.exports = {
    name: 'messageCreate',
    once: false,
    /**
     * 
     * @param {Message} message 
     * @returns 
     */
    async execute(message) {
        try {
           //message event
        } catch (err) {
            console.error(err)
        }
    }
}