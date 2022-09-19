module.exports = async function(client, message) {
    var { MessageEmbed } = require('discord.js');
    var msg = require('quick.db').fetch(`Delete_${message.channel.id}`);
    var deleted = new MessageEmbed()
        .setTitle('❌ | Timeout')
        .setColor('RED')
        .setFooter( `made by Panther #7981`)
        message.channel.messages.fetch(msg).then(m => m.edit({ embed: deleted })).catch(err => { return });
        
         
};