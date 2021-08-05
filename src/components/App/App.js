// import logo from './logo.svg';
import React, { useState, useEffect }  from "react"
import { getData } from '../../utilities/apiCalls'
// import { images } from '../../utilities/images'
import Card from '../Card/Card'
import CardInfo from '../CardInfo/CardInfo'
import CryptoHeader from '../CryptoHeader/CryptoHeader'
import './App.css';

const App = () => {

  const [cards, setCards] = useState([])
  const [cryptoData, setCryptoData] = useState([])
  const [results, setResults] = useState([])
  const [randomCard, setRandomCard] = useState('')
  const [randomCrypto, setRandomCrypto] = useState([])
  // const [randomCrypto2, setRandomCrypto2] = useState('')
  // const [currentResult, setCurrentResult] = useState('')
  const [tagLineResults, setTaglineResults] = useState('')
  // const [possibleResults, setPossibleResults] = useState('')
  const [tarotData, setTarotData] = useState('')

  const [reading, setReading] = useState('')

  useEffect(() => {
    let isMounted = true
    getData()
    .then(data => {
      if (isMounted) {
        setTarotData({
          cards: data[0].cards,
          cryptoData: data[1].slice(0, 100),
          results: data[2].results,
          currentCard: getRandomCard(data[0].cards),
          crypto: getRandomCrypto(data[1].slice(0, 100))
        })

      }
    })
    return () => {
      isMounted = false
    };
  }, [])


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


  return (
    <main className="App">
    {!!tarotData &&
      <section>
        <CardInfo card={tarotData.currentCard} />
        <CryptoHeader crypto={tarotData.crypto} />
        <Card name={tarotData.currentCard.name_short} />
      </section>
    }
    </main>
  );
}

// <button onClick={matchResults}>New Card</button>
// <h2>{tagLineResults[1]}</h2>
// <div>{!!randomCard && !!randomCrypto && <h3>{readingResults()}</h3>}</div>
export default App;
