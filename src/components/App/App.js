// import logo from './logo.svg';
import React, { useState, useEffect }  from "react"
import { getData } from '../../utilities/apiCalls'
import './App.css';

const App = () => {

  const [cards, setCards] = useState([])
  const [cryptoData, setCryptoData] = useState([])
  const [results, setResults] = useState([])
  const [randomCard, setRandomCard] = useState('')

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

  const renderCard = () => {
    if (!randomCard) {
      getRandomCard()
    }
    return (
      <>
        <h2>{randomCard.name}</h2>
        <h3>{randomCard.value}</h3>
        <h3>{randomCard.description}</h3>
      </>
    )
  }

  return (
    <main className="App">
    {!!cards.length &&
      <div>
        <div>{renderCard()}</div>
        <button onClick={getRandomCard}>New Card</button>
      </div>
    }
    </main>
  );
}

export default App;
