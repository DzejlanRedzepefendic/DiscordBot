let help = []
module.exports = {
  name: 'usless',
  aliases: ['usl'],
  description: 'Ping!',
  cooldown: 3,
  guildOnly: true,
  args: true,
  usage: false,
  // eslint-disable-next-line no-unused-vars
  execute(msg, args) {
    if (args) {
      for (let index = 0; index < args.length; index++) {
        help +=
          args[index][0].toUpperCase() +
          args[index].slice(1).toLowerCase() +
          ' '
      }
      msg.reply(
        'https://tenor.com/view/rick-and-morty-you-pass-butter-welcome-to-the-club-gif-9281996'
      )
      return msg.reply(help)
    }
  },
}
