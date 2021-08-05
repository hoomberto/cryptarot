const getRandomIndex = (array) => {
  return Math.floor(Math.random() * array.length)
}

const getRandomCard = (cards) => {
  return cards[getRandomIndex(cards)]
}

const getRandomCrypto = (data) => {
    let random1 = data[getRandomIndex(data)]
    let random2 = data[getRandomIndex(data)]
    if (random1 === random2) {
      random2 = data[getRandomIndex(data)]
    }
    return [random1, random2]
}

export { getRandomCard, getRandomCrypto }
