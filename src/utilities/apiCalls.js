// import { checkLocal } from './utils'
const nomics = "https://api.nomics.com/v1/currencies/ticker?key=39882e2a6e59afede70e88be7f53e7d7ed14b4c0"
// Tarot Description API
const tarotDesc = "https://rws-cards-api.herokuapp.com/api/v1/cards"

const getCards = () => {
  return fetch('https://cryptarot-api.herokuapp.com/api/v1/cards')
    // .then(checkResponse(response, 'cards'))
    .then(checkResponse)
}

// const getTarotDesc = () => {
//   return fetch(tarotDesc)
//   .then(checkResponse)
// }

const getCryptoData = () => {
  return fetch(nomics)
  .then(checkResponse)
}

const getDailyCard = () => {
  return fetch('https://cryptarot-api.herokuapp.com/api/v1/hourly')
  .then(checkResponse)
}

const getResults = () => {
  return fetch('https://cryptarot-api.herokuapp.com/api/v1/results')
  .then(checkResponse)
}

const checkResponse = (response) => {
  if (response.ok) {
    return response.json()
  }
  else {
    return `Request could not go through.`
  }
};

// const getData = () => {
//   return Promise.all([getCards(), getCryptoData(), getResults(), getTarotDesc()])
// }

const getData = () => {
  return Promise.all([getCards(), getCryptoData(), getResults()])
}


export { getData,  getDailyCard}
