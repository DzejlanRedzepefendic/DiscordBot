module.exports = {
	name: 'Emoticon',
	aliases: ['emoji'],
	description: 'after using (tableflip,unflip,shrug) command, bot will respond with emoji(in ASCI code)',
	cooldown: 5,
	guildOnly: true,
	args:true,
	usage:false,
	// eslint-disable-next-line no-unused-vars
	execute(msg, args) {
       let firstArgument = args[0];
       if(firstArgument == 'tableflip'){return msg.reply("(╯°□°）╯︵ ┻━┻");}        
       else if(firstArgument == 'unflip'){return msg.reply("┬─┬ ノ( ゜-゜ノ)");}
       else if(firstArgument == 'shrug'){return msg.reply("¯\\_(ツ)_/¯");}
       else{return msg.reply("Morate koristiti jednu od tri komande: tableflip, unflip ili shrug.");}
	},
};