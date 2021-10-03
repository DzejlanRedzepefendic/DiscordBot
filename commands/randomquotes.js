const { tagOne, tagTwo } = require('./fetchfunc')

module.exports = {
  name: 'randomquote',
  aliases: ['randq'],
  description: 'Random smart quote',
  cooldown: 2,
  guildOnly: true,
  args: true,
  usage: false,
  // eslint-disable-next-line no-unused-vars
  execute(msg, args) {
    if (args.length == 1) {
      tagOne(args[0])
        .then((result) => msg.reply(result))
        .catch((error) => msg.reply(error))
    } else if (args.length == 2) {
      console.log(args.length)
      tagTwo(args[0], args[1])
        .then((result) => msg.reply(result))
        .catch((error) => msg.reply(error))
    } else {
      return msg.reply('previse ili premalo argumenata')
    }
  },
}
