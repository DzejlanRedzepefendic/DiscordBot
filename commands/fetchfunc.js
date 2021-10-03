const fetch = require('node-fetch')

async function tagOne(tag1) {
  try {
    const result = await fetch(`https://api.quotable.io/random?tags=${tag1}`)
    const data = await result.json()
    console.log(data)
    const resultToReturn = [data.content, data.author]
    return resultToReturn
  } catch (error) {
    console.log(error)
  }
}

async function tagTwo(tag1, tag2) {
  try {
    const result = await fetch(
      `https://api.quotable.io/random?tags=${tag1},${tag2}`
    )
    const data = await result.json()

    const resultToReturn = [data.content, data.author]
    return resultToReturn
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  tagOne,
  tagTwo,
}
