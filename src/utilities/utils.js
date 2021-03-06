
const getRandomIndex = (array) => {
  return Math.floor(Math.random() * array.length)
}

const getRandomElement = (array) => {
  return array[getRandomIndex(array)]
}

const getRandomCard = (cards) => {
  return cards[getRandomIndex(cards)]
}

const formatName = (name) => {
  return (/\w/g.test(name)) ? name.toLowerCase().replaceAll(' ', '-') : name.toLowerCase()
}

const formatTime = (date) => {
  if (date === 'ytd') {
    return 'YTD'
  }
  let split = date.split('d')
  let time = parseInt(split[0])
  return (time % 365 === 0)
  ? 'Year'
  : (time % 30 === 0)
  ? 'Month'
  : (time % 7 === 0)
  ? 'Week'
  : 'Day'
}


const shuffle = (array) => {
  const toShuffle = array
  for (let i = toShuffle.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [toShuffle[i], toShuffle[j]] = [toShuffle[j], toShuffle[i]];
  }
  return toShuffle
}

const getRandomCrypto = (data) => {
  let random1 = data[getRandomIndex(data)]
  let random2 = data[getRandomIndex(data)]
  if (random1 === random2) {
    random2 = data[getRandomIndex(data)]
  }
  return [random1, random2]
}

const setAllLocal = (data) => {
  setLocal('cards', data[0].cards)
  setLocal('crypto', data[1].slice(0,150))
  setLocal('results', data[2].results)
}

const setLocal = (resource, data) => {
  localStorage.setItem(`${resource}`, JSON.stringify(data))
}

const getCheckLocal = () => {
  let cards = JSON.parse(localStorage.getItem('cards'))
  let crypto = JSON.parse(localStorage.getItem('crypto'))
  let results = JSON.parse(localStorage.getItem('results'))
  if (cards && crypto && results) {
    return [cards, crypto, results]
  }
  return false
}


export { formatTime, getRandomElement, getRandomCard, getRandomCrypto, setAllLocal, getCheckLocal, shuffle, formatName }
