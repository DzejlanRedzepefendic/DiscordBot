module.exports = {
	name: 'addition',
	aliases: ['add'],
	description: 'add',
	cooldown: 5,
	guildOnly: true,
	args:false,
	usage:false,
	// eslint-disable-next-line no-unused-vars
	execute(msg, args) {
        if(args[1] !== '+') {return msg.reply('put + ||dumbass|| :poo:');}
		var a = parseInt(args[0])
        var b = parseInt(args[2])
        var result = a + b;
		msg.reply('result is  ' + result);

	},

};