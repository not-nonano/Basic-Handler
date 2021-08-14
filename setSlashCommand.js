// SUB_COMMAND      	1	
// SUB_COMMAND_GROUP	2	
// STRING	            3	
// INTEGER             	4	Any integer between -2^53 and 2^53
// BOOLEAN	            5	
// USER             	6	
// CHANNEL             	7	Includes all channel types + categories
// ROLE	                8	
// MENTIONABLE      	9	Includes users and roles
// NUMBER	            10	Any double between -2^53 and 2^53

// type	        one of application command option           type	the type of option
// name	        string	                                    1-32 lowercase character name matching ^[\w-]{1,32}$
// description	string                                  	1-100 character description
// required?	boolean                                 	if the parameter is required or optional--default false
// choices?	    array of application command option choice	choices for STRING, INTEGER, and NUMBER types for the user to pick from, max 25
// options?	    array of application command option     	if the option is a subcommand or subcommand group type, this nested options will be the parameters

const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const ping = {
    name: 'ping',
    description: 'replies pong'
}

const prefix = {
    name: 'prefix',
    description: 'Set server prefix.',
    type: 3,
    required: true
}

let commands = [ping, prefix]


const rest = new REST({ version: '9' }).setToken(TOKEN);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
            { body: commands },
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();

