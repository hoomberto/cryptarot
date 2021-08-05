import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import CardChoice from '../CardChoice/CardChoice'
import Landing from '../Landing/Landing'
import { getData } from '../../utilities/apiCalls'
import { getRandomCard, getRandomCrypto, getCheckLocal, setAllLocal } from '../../utilities/utils'

import './App.css';

const App = () => {

  const [data, setData] = useState('')
  const [tarotData, setTarotData] = useState('')

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
  }, [])

  return (
    <main>
    <Switch>
    <Route exact path="/" component={Landing} />
      <Route exact path="/pick" render={() => {
        return <CardChoice data={tarotData || false} />

      }} />
      <Route exact path="/cryptos" component={CardChoice} />
    </Switch>
    </main>
  );
}

export default App;
