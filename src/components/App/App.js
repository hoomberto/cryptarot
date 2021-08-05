import React, { useState, useEffect }  from "react"
import { getData } from '../../utilities/apiCalls'
import { getRandomCard, getRandomCrypto } from '../../utilities/utils'
import Card from '../Card/Card'
import CardInfo from '../CardInfo/CardInfo'
import CryptoHeader from '../CryptoHeader/CryptoHeader'
import './App.css';

const App = () => {

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

  const newReading = () => {
    setReading({
      card: getRandomCard(tarotData.cards),
      crypto: getRandomCrypto(tarotData.cryptoData)
    })
  }

  return (
    <main>
      {!!tarotData &&
        <section>
          <CardInfo card={!!reading ? reading.card : tarotData.currentCard} />
          <CryptoHeader crypto={!!reading ? reading.crypto : tarotData.crypto} />
          <Card name={!!reading ? reading.card.name_short : tarotData.currentCard.name_short} />
          <button onClick={newReading}>New Reading</button>
        </section>
      }
    </main>
  );
}

export default App;
