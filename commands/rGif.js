const fetch = require('node-fetch')
module.exports = {
  name: 'gif',
  aliases: ['lol'],
  description: 'Make me laugh!',
  cooldown: 2,
  guildOnly: true,
  args: true,
  usage: false,
  // eslint-disable-next-line no-unused-vars
  execute(msg, args) {
    fetch(`https://g.tenor.com/v1/random?q=${args[0]}`)
      .then((res) => {
        return res.json()
      })
      .then((result) => {
        randomNumber = Math.floor(Math.random() * result.results.length + 1)
        console.log(randomNumber, result.results.length)
        msg.reply(`${result.results[randomNumber].url}`)
      })
      .catch((e) => {
        console.log(e)
      })
  },
}
