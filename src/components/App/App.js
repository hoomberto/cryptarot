import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import CardChoice from '../CardChoice/CardChoice'
import CryptosPage from '../CryptosPage/CryptosPage'
import Landing from '../Landing/Landing'
import { getData } from '../../utilities/apiCalls'
// import CardContext from '../../Context/CardContext';
import { getRandomCard, getRandomCrypto, getCheckLocal, setAllLocal } from '../../utilities/utils'
import './App.css';

const App = () => {
  const [tarotData, setTarotData] = useState('')
  const [isNew, setIsNew] = useState(false)

  // const [reading, setReading] = useState('')
  // // const [clicked, setClicked] = useState(false)
  // const newReading = () => {
  //   // setClicked(false)
  //   setReading({
  //     currentCard: getRandomCard(tarotData.cards),
  //     crypto: getRandomCrypto(tarotData.cryptoData)
  //   })
  // }

  useEffect(() => {
    let localResults = getCheckLocal();
    if (!localResults) {
      getData()
      .then(data => {
        setAllLocal(data)
        setTarotData({
            cards: data[0].cards,
            cryptoData: data[1].slice(0, 100),
            results: data[2].results,
            currentCard: getRandomCard(data[0].cards),
            crypto: getRandomCrypto(data[1].slice(0, 100))
        })
      })
    }
    else {
      setTarotData({
        cards: localResults[0],
        cryptoData: localResults[1],
        results: localResults[2],
        currentCard: getRandomCard(localResults[0]),
        crypto: getRandomCrypto(localResults[1])
      })
    }
    return setIsNew(false)
  }, [])
  //
  // useEffect(() => {
  //   setTimeout(() => {
  //     newReading()
  //   })
  // }, [tarotData.crypto])
  const newTarotCard = ({card, crypto}) => {
    setTarotData({
      ...tarotData,
      currentCard: card,
      crypto
    })
  }


  return (
    <main>
    <Switch>
    <Route exact path="/" component={Landing} />
      <Route exact path="/pick" render={() => {
        return <CardChoice
          data={tarotData || false}
          isNew={isNew}
          setIsNew={setIsNew}
          newTarotCard={newTarotCard}
          />

      }} />
      <Route exact path="/cryptos" render={() => {
        return <CryptosPage data={tarotData.cryptoData || false} />
      }} />
    </Switch>
    </main>
  );
}

export default App;
