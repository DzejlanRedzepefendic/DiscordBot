var players = {}
module.exports = {
	name: 'guess',
	aliases: [],
	description: 'Guess my number',
	cooldown: 2,
	guildOnly: true,
	args: false,
	usage:"<number>",
	// eslint-disable-next-line no-unused-vars
	execute(msg, args) {
		var inputValue = args[0]
		var userId = msg.author.id

		if(inputValue === 'play'){
			players[userId] =  Math.floor(Math.random() * 10) + 1
			return msg.reply("New game started\n The number has been created!")
		} 

		if(players[userId]){
			if(players[userId] !== parseInt(inputValue)){
				return msg.reply("Niste uneli tacan broj");
			}
			
			delete players[userId]
			return msg.reply("Uneli ste tacan broj");
		}

		msg.reply('Use command \`!play start\` to play the game!')
	},
};