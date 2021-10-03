module.exports = {
	name: 'calc',
	aliases: false,
	description: false,
	cooldown: 3,
	guildOnly: true,
	args:true,
	usage:false,
	// eslint-disable-next-line no-unused-vars
	execute(msg, args) {
        const first = args[0];
        const second = args[1];
        const third = args[2];
        var obim
        var povrsina
        var inputValue = parseInt(second)
        const proveraTrougla = (a + b > c && b + c > a && a + c > b);
        if(first == "krug") {
            povrsina = Math.pow(inputValue,2)*Math.PI
            obim = 2 * inputValue*Math.PI
            msg.reply(`Povrsina je: ${povrsina}`)
            msg.reply(`Obim je: ${obim}`)
            
        } 
        else if(first == "kvadrat"){
            
            povrsina = Math.pow(inputValue,2)
            obim = 4 * inputValue
            console.log(povrsina)
            console.log(obim)
            msg.reply(`Povrsina je: ${povrsina}`)
            msg.reply(`Obim je: ${obim}`)
        }  
        else if(first == "trougao"){
            var a = inputValue
            var b = parseInt(second)
            var c = parseInt(third)
            if(!proveraTrougla){
                msg.reply("Nemoguce je formirati trougao od datih duzina")
            }
            obim = a + b + c
            var s = obim / 2
            const formulaPovrsine = (s * (s - a) * (s - b) * (s - c))
            povrsina = Math.sqrt(formulaPovrsine)
            msg.reply(`Povrsina je: ${povrsina}`)
            msg.reply(`Obim je: ${obim}`)
        }
        else if(fist == "pravougaonik"){
            povrsina = parseInt(second) * parseInt(third)
            obim = 2 * (second + third)
            msg.reply(`Povrsina je: ${povrsina}`)
            msg.reply(`Obim je: ${obim}`)
        }

    }
};