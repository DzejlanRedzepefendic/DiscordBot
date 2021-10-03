let pomocniArray = []
let finalnaPoruka = ''
module.exports = {
  name: 'reverse',
  aliases: [],
  description: 'Ping!',
  cooldown: 5,
  guildOnly: true,
  args: true,
  usage: false,
  // eslint-disable-next-line no-unused-vars
  execute(msg, args) {
    let inputValue = args
    for (let index = 0; index < args.length; index++) {
      let swap = inputValue[index].split('')
      swap.reverse()
      pomocniArray.push(swap.join(''))
    }
    finalnaPoruka = pomocniArray.join(' ')
    msg.reply(finalnaPoruka)
    return (pomocniArray = [])
  },
}
