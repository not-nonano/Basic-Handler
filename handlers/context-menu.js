const { readdirSync } = require("fs");
const ascii = require("ascii-table");
let table = new ascii("Context-Menu");
table.setHeading("Context Menu", "Load status");
module.exports = (client) => {
    try {
        const commands = readdirSync(`./context-menu/`).filter((file) => file.endsWith(".js"));
        for (let file of commands) {
            let pull = require(`../context-menu/${file}`);
            if (pull.name) {
                client.context_menu.set(pull.name, pull);
                table.addRow(file, 'Ready');
            } else {
                table.addRow(file, `error->missing a help.name,or help.name is not a string.`);
                continue;
            }
        }
        console.log(table.toString().bold.brightYellow);
    } catch (e) {
        console.log(String(e.stack))
    }
}