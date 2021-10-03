let players = {}
module.exports = {
  name: 'multigame',
  aliases: ['m'],
  description: 'Multi player game!',
  cooldown: 5,
  guildOnly: true,
  args: true,
  usage: false,
  // eslint-disable-next-line no-unused-vars
  execute(msg, args) {
    let inputValue = args[0]
    if (inputValue === 'start') {
      let randomNumber = Math.floor(Math.random() * 100)
      let numberOfGuesses = 0

      players = {
        ...players,
        [msg.author.id]: {
          randomNumber: randomNumber,
          numberOfGuesses: numberOfGuesses,
        },
      }

      return msg.reply('The game has started please guess the number')
    }

    if (inputValue && players[msg.author.id].randomNumber) {
      let tempNumber = players[msg.author.id].randomNumber
      let tempGuesses = players[msg.author.id].numberOfGuesses

      let difference = Math.abs(tempNumber - parseInt(inputValue))

      if (tempGuesses >= 10) {
        players = {
          ...players,
          [msg.author.id]: {
            randomNumber: undefined,
            numberOfGuesses: 0,
          },
        }
        return msg.reply('RIP')
      }
      if (difference > 50) {
        players[msg.author.id].numberOfGuesses = tempGuesses + 1
        return msg.reply('hladno')
      }
      if (difference > 25) {
        players[msg.author.id].numberOfGuesses = tempGuesses + 1
        return msg.reply('mlako')
      }
      if (difference > 10) {
        players[msg.author.id].numberOfGuesses = tempGuesses + 1
        return msg.reply('toplo')
      }
      if (difference > 1) {
        players[msg.author.id].numberOfGuesses = tempGuesses + 1
        return msg.reply('Najtoplije')
      }
      players = {
        ...players,
        [msg.author.id]: {
          randomNumber: undefined,
          numberOfGuesses: 0,
        },
      }
      return msg.reply('You won!!!')
    }

    msg.reply('Type singlegame start to beggin the game!')
  },
}
