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

          // setReading({
          //   currentCard: getRandomCard(),
          //   currentCrypto: getRandomCrypto()
          // })

      }
    })
    return () => {
      isMounted = false
    };
  }, [])

// useEffect(() => {
//     matchResults();
// }, [!!tarotData.cards, !!tarotData.cryptoData, !!tarotData.results])


  const getRandomIndex = (array) => {
    return Math.floor(Math.random() * array.length)
  }

  // const getRandomCard = () => {
  //   let random = cards[getRandomIndex(cards)]
  //   setRandomCard(random)
  // }

  // const getRandomCard = () => {
  //   let random = cards[getRandomIndex(cards)]
  //   setRandomCard(random)
  // }
  const getRandomCard = (cards) => {
    return cards[getRandomIndex(cards)]
  }

  // const getRandomCard = () => {
  //   let random = tarotLogic.cards[getRandomIndex(tarotLogic.cards)]
  //   setTarotLogic({...tarotLogic, randomCard: random})
  // }

  const getRandomCrypto = (data) => {
      let random1 = data[getRandomIndex(data)]
      let random2 = data[getRandomIndex(data)]
      if (random1 === random2) {
        random2 = data[getRandomIndex(data)]
      }
      return [random1, random2]
  }

  // const getRandomCrypto = () => {
  //   let random1 = cryptoData[getRandomIndex(cryptoData)]
  //   let random2 = cryptoData[getRandomIndex(cryptoData)]
  //   if (random1 === random2) {
  //     random2 = cryptoData[getRandomIndex(cryptoData)]
  //   }
  //   setRandomCrypto([random1, random2], () => getRandomCard())
  // }

  // const getRandomCrypto = () => {
  //   let random1 = tarotLogic.cryptoData[getRandomIndex(tarotLogic.cryptoData)]
  //   let random2 = tarotLogic.cryptoData[getRandomIndex(tarotLogic.cryptoData)]
  //   if (random1 === random2) {
  //     random2 = cryptoData[getRandomIndex(cryptoData)]
  //   }
  //   setTarotLogic({...tarotLogic, randomCrypto: random1, randomCrypto2: random2})
  // }

  // const newRandoms = () => {
  //   getRandomCard()
  //   getRandomCrypto()
  //   matchResults()
  // }

  // const newRandoms = () => {
  //   getRandomCard()
  //   getRandomCrypto()
  //   matchResults()
  // }

  // const getRandomFrom = (dataset) => {
  //   return dataset[getRandomIndex(dataset)]
  // }
  //
  // const getRandomCrypto = () => {
  //   return setRandomCrypto(getRandomFrom(cryptoData))
  // }


  const newReading = () => {
    setReading({
      card: getRandomCard(),
      crypto: getRandomCrypto()
    })
  }


/// MATCH RESULTS


  // const matchResults = () => {
  //   // getRandomCrypto()
  //   let matching;
  //   const { card, crypto } = newReading();
  //   console.log(card.meaning_weight)
  //   if (card.meaning_weight === 0) {
  //     let neutral = tarotData.results.filter(result => result.category === "neutral")
  //     matching = neutral.filter(result => result.word_association.some(keyword => randomCard.keywords.includes(keyword)))
  //   }
  //   else if (card.meaning_weight <= -1) {
  //     let onlyNegative = tarotData.results.filter(result =>  result.category === "negative" || result.category === "very_negative")
  //     matching = onlyNegative.filter(result => result.word_association.some(keyword => randomCard.keywords.includes(keyword)))
  //   }
  //   else {
  //     let onlyPositive = tarotData.results.filter(result => result.category === "positive" || result.category === "very_positive")
  //     matching = onlyPositive.filter(result => result.word_association.some(keyword => randomCard.keywords.includes(keyword)))
  //   }
  //   // matching = results.filter(result => result.word_association.some(keyword => randomCard.keywords.includes(keyword)))
  //   console.log(matching)
  //   // setPossibleResults(matching)
  //   let relevant = matching[getRandomIndex(matching)]
  //   if (!relevant) {
  //     // if a match hasn't been achieved by the filter
  //     relevant = results[getRandomIndex(results)]
  //   }
  //   const { result_choices, tagline } = relevant
  //   let randomResult = result_choices[getRandomIndex(result_choices)]
  //   setTaglineResults([randomResult, tagline])
  //   // setCurrentResult(randomResult)
  //   // setCurrentTagline(tagline)
  //   // setCurrentResult(relevant.result_choices[getRandomIndex(relevant.result_choices)])
  // }

  // const renderCrypto = () => {
  //   let oneCrypto, twoCryptos;
  //   if (!randomCrypto.length) {
  //     getRandomCrypto()
  //   }
  //
  //   if (randomCrypto.length) {
  //
  //     oneCrypto = `${randomCrypto[0].name} (${randomCrypto[0].symbol})`;
  //     twoCryptos = `${randomCrypto[0].name} (${randomCrypto[0].symbol}) & ${randomCrypto[1].name} (${randomCrypto[1].symbol})`;
  //   }
  //
  //
  //   const rand = Math.random() < 0.5
  //
  //   return (
  //     <h1>{!!rand ? oneCrypto : twoCryptos }</h1>
  //   )
  // }


  /////// READING RESULTS


  // const readingResults = () => {
  //
  //   let injectResult = ''
  //   if (tagLineResults[0].includes('[crypto2]')) {
  //     injectResult = tagLineResults[0].replace('[crypto1]', randomCrypto[0].symbol)
  //     injectResult = injectResult.replace('[crypto2]', randomCrypto[1].symbol)
  //     injectResult = injectResult.replace('[keyword1]', randomCard.keywords[0].toUpperCase())
  //     injectResult = injectResult.replace('[keyword2]', randomCard.keywords[1].toUpperCase())
  //   }
  //   else {
  //     injectResult = tagLineResults[0].replace('[crypto1]', randomCrypto[0].symbol)
  //     injectResult = injectResult.replace('[keyword1]', randomCard.keywords[0].toUpperCase())
  //   }
  //
  //   // injectResult = injectResult.replace(/\’\’/g, '\'')
  //   injectResult = injectResult.replace(/’’/g, '\'')
  //   injectResult = injectResult.replace('‘', '\'')
  //   injectResult = injectResult.replace('’', '\'')
  //
  //   return (
  //     <div>
  //     <h2>{injectResult}</h2>
  //     </div>
  //   )
  // }

  // const currentImage = () => {
  //   return images.find(image => image.includes(randomCard.name_short))
  // }
  //
  // const renderCard = () => {
  //   if (!randomCard) {
  //     getRandomCard()
  //   }
  //
  //   return (
  //     <>
  //       <h2>{randomCard.name}</h2>
  //       <h3>{randomCard.type === "major" && randomCard.value}</h3>
  //       <h3>{randomCard.description}</h3>
  //     </>
  //   )
  // }

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
