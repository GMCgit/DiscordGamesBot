module.exports.run = async (bot, msg, args, db) => {
    msg.channel.send('Success!');

    if (msg.guild.me.hasPermission("MANAGE_SERVER")) {
        msg.channel.send('True!')
    }
}

module.exports.help = {
    name: "test"
}
