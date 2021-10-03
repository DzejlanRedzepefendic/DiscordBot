module.exports = {
	name: 'math',
	aliases: ['m'],
	description: 'add, subtract, multiply and divide',
	cooldown: 5,
	guildOnly: true,
	args:true,
	usage:false,
	// eslint-disable-next-line no-unused-vars
	execute(msg, args) {
        var a = parseInt(args[0])
        var b = parseInt(args[2])
        var result;
        switch(args[1]){
            case '+':
                result = a + b;
                break;
            case '-' :
                result = a - b;
                break;
            case '*':
                result = a * b;
                break;
            case '/':
                result = a / b;
                break;
            default: 
            msg.reply('u can only use add, subtract, multiply and divide...');
        }
            msg.reply('Result is ' + result);
            if(result< 100 && result > -100) {return msg.reply('Common dude learn some math...\n stop messin\'\ around with easy tasks.');}
	},
};