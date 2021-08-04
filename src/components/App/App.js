// import logo from './logo.svg';
import React, { useState, useEffect }  from "react"
import { getData } from '../../utilities/apiCalls'
import './App.css';

const App = () => {

  const [cards, setCards] = useState([])
  const [cryptoData, setCryptoData] = useState([])
  const [results, setResults] = useState([])
  const [randomCard, setRandomCard] = useState('')
  const [randomCrypto, setRandomCrypto] = useState('')
  const [currentResult, setCurrentResult] = useState('')

  useEffect(() => {
    getData()
    .then(data => {
      setCards(data[0].cards)
      setCryptoData(data[1].slice(0, 100)) // Top 100 Cryptocurrencies
      setResults(data[2].results)
    })
  }, [])

  const getRandomIndex = (array) => {
    return Math.floor(Math.random() * array.length)
  }

  const getRandomCard = () => {
    let random = cards[getRandomIndex(cards)]
    setRandomCard(random)
  }

  const getRandomCrypto = () => {
    let random = cryptoData[getRandomIndex(cryptoData)]
    setRandomCrypto(random)
  }

  const newRandoms = () => {
    getRandomCard()
    getRandomCrypto()
  }

  // const getRandomFrom = (dataset) => {
  //   return dataset[getRandomIndex(dataset)]
  // }
  //
  // const getRandomCrypto = () => {
  //   return setRandomCrypto(getRandomFrom(cryptoData))
  // }

  const renderCrypto = () => {
    if (!randomCrypto) {
      getRandomCrypto()
    }

    return (
      <>
        <h2>{randomCrypto.name}</h2>
      </>
    )
  }

  const renderCard = () => {
    if (!randomCard) {
      getRandomCard()
    }

    return (
      <>
        <h2>{randomCard.name}</h2>
        <h3>{randomCard.type === "major" && randomCard.value}</h3>
        <h3>{randomCard.description}</h3>
      </>
    )
  }

  return (
    <main className="App">
    {!!cards.length && !!cryptoData.length &&
      <div>
        <div>{renderCard()}</div>
        <div>{renderCrypto()}</div>
        <button onClick={newRandoms}>New Card</button>
      </div>
    }
    </main>
  );
}

export default App;
