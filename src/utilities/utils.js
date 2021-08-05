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


// const checkLocal = (response, resource) => {
//   console.log("CHECKING RESOURCE", resource)
//   const pastData = localStorage.getItem(`${resource}`)
//   if (!pastData) {
//     localStorage.setItem(`${resource}`, JSON.stringify(response))
//     return false
//   }
//   else {
//     return pastData
//   }
// }

const setAllLocal = (data) => {
  setLocal('cards', data[0].cards)
  setLocal('crypto', data[1].slice(0,150))
  setLocal('results', data[2].results)
}

const setLocal = (resource, data) => {
  console.log("CHECKING RESOURCE", resource)
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

export { getRandomCard, getRandomCrypto, setAllLocal, getCheckLocal }
