let roll
module.exports = {
  name: 'roll',
  aliases: ['rano'],
  description: 'Roll to win!',
  cooldown: 2,
  guildOnly: true,
  args: false,
  usage: false,
  // eslint-disable-next-line no-unused-vars
  execute(msg, args) {
    if (!roll) {
      roll = Math.ceil(Math.random() * 100)
      msg.reply(`You roll was: ${roll}!`)

      setTimeout(() => {
        msg.reply(`The highest roll was: ${roll}! The game has ended`)
        roll = undefined
      }, 10000)
    } else if (roll) {
      let tempRoll = Math.ceil(Math.random() * 100)
      if (tempRoll > roll) {
        roll = tempRoll
      }
      msg.reply(`You roll was: ${tempRoll}!`)
    }
  },
}
