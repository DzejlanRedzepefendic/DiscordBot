const fetch = require('node-fetch')
module.exports = {
  name: 'motivation',
  aliases: [''],
  description: 'Ping!',
  cooldown: 5,
  guildOnly: true,
  args: false,
  usage: false,
  // eslint-disable-next-line no-unused-vars
  execute(msg, args) {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        return msg.reply(`${data.content} —${data.author}`)
      })
      .catch((error) => console.log(error))
  },
}

