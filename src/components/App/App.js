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
  const [randomCrypto2, setRandomCrypto2] = useState('')
  const [currentResult, setCurrentResult] = useState('')

  useEffect(() => {
    let isMounted = true
    getData()
    .then(data => {
      if (isMounted) {
        setCards(data[0].cards)
        setCryptoData(data[1].slice(0, 100)) // Top 100 Cryptocurrencies
        setResults(data[2].results)
      }
    })
    return () => isMounted = false;
  }, [])

  const getRandomIndex = (array) => {
    return Math.floor(Math.random() * array.length)
  }

  const getRandomCard = () => {
    let random = cards[getRandomIndex(cards)]
    setRandomCard(random)
  }

  const getRandomCrypto = () => {
    let random1 = cryptoData[getRandomIndex(cryptoData)]
    let random2 = cryptoData[getRandomIndex(cryptoData)]
    if (random1 === random2) {
      random2 = cryptoData[getRandomIndex(cryptoData)]
    }
    setRandomCrypto(random1)
    setRandomCrypto2(random2)
  }

  const newRandoms = () => {
    getRandomCard()
    getRandomCrypto()
    matchResults()
  }

  // const getRandomFrom = (dataset) => {
  //   return dataset[getRandomIndex(dataset)]
  // }
  //
  // const getRandomCrypto = () => {
  //   return setRandomCrypto(getRandomFrom(cryptoData))
  // }


  const matchResults = () => {
    let matching = results.filter(result => result.word_association.some(keyword => randomCard.keywords.includes(keyword)))
    console.log(matching)
    let relevant = matching[getRandomIndex(matching)]
    const { result_choices } = relevant
    let randomResult = result_choices[getRandomIndex(result_choices)]
    setCurrentResult(randomResult)
    // setCurrentResult(relevant.result_choices[getRandomIndex(relevant.result_choices)])
  }

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

  const readingResults = () => {
    if (!currentResult) {
      matchResults()
    }

    let injectResult = ''
    if (currentResult.includes('[crypto2]')) {
      injectResult = currentResult.replace('[crypto1]', randomCrypto.name)
      injectResult = injectResult.replace('[crypto2]', randomCrypto2.name)
      injectResult = injectResult.replace('[keyword1]', randomCard.keywords[0])
      injectResult = injectResult.replace('[keyword2]', randomCard.keywords[1])
    }
    else {
      injectResult = currentResult.replace('[crypto1]', randomCrypto.name)
      injectResult = injectResult.replace('[keyword1]', randomCard.keywords[0])
    }

    injectResult = injectResult.replace(/\’\’/g, '\'')
    injectResult = injectResult.replace(/\’\’/g, '\'')

    return (
      <div>
      <h2>{injectResult}</h2>
      </div>
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
    {!!cards.length && !!cryptoData.length && !!results.length &&
      <section>
        <div>{renderCard()}</div>
        <div>{renderCrypto()}</div>
        <button onClick={newRandoms}>New Card</button>
        <div>{!!randomCard && !!randomCrypto && <h3>{readingResults()}</h3>}</div>
      </section>
    }
    </main>
  );
}

export default App;
