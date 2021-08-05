import React, { useState, useEffect }  from "react"
import { getData } from '../../utilities/apiCalls'
import {getRandomCard} from '../../utilities/utils'
import {getRandomCrypto} from '../../utilities/utils'
import Card from '../Card/Card'
import CardInfo from '../CardInfo/CardInfo'
import CryptoHeader from '../CryptoHeader/CryptoHeader'
import './App.css';

const App = () => {

  const [tarotData, setTarotData] = useState('')

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

  return (
    <main>
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

export default App;
