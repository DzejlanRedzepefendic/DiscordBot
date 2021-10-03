let randomNumber
let numberOfGuesses = 0

module.exports = {
  name: 'singlegame',
  aliases: false,
  description: 'Single player game!',
  cooldown: 5,
  guildOnly: true,
  args: true,
  usage: false,
  // eslint-disable-next-line no-unused-vars
  execute(msg, args) {
    let inputValue = args[0]
    if (inputValue === 'start') {
      randomNumber = Math.floor(Math.random() * 100)
      numberOfGuesses = 0
      return msg.reply('The game has started please gess the number')
    }

    if (inputValue && randomNumber) {
      let difference = Math.abs(randomNumber - parseInt(inputValue))
      if (numberOfGuesses >= 3) {
        randomNumber = undefined
        numberOfGuesses = 0
        return msg.reply('unlucky')
      }
      if (difference > 50) {
        numberOfGuesses++
        return msg.reply('hladno')
      }
      if (difference > 25) {
        numberOfGuesses++
        return msg.reply('mlako')
      }
      if (difference > 10) {
        numberOfGuesses++
        return msg.reply('toplo')
      }
      if (difference > 1) {
        numberOfGuesses++
        return msg.reply('Najtoplije')
      }
      randomNumber = undefined
      numberOfGuesses = 0
      return msg.reply('You won!!!')
    }

    msg.reply('Type singlegame start to beggin the game!')
  },
}
