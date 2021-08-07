import React, { useState, useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import CardChoice from '../CardChoice/CardChoice'
import CryptosPage from '../CryptosPage/CryptosPage'
import Landing from '../Landing/Landing'
import CryptosInfo from '../CryptosInfo/CryptosInfo'
import AllTarot from '../AllTarot/AllTarot'
import Results from '../Results/Results'
import TarotInfo from '../TarotInfo/TarotInfo'
import { getData } from '../../utilities/apiCalls'
import { getRelevantResults } from '../../utilities/ResultsUtils'
import { images } from '../../utilities/images'

// import CardContext from '../../Context/CardContext';
import { getRandomCard, getRandomCrypto, getCheckLocal, setAllLocal, getRandomElement } from '../../utilities/utils'
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
    <Route exact path="/tarot" render={() => {
          return <AllTarot
            images={images}
            tarot={!tarotData ? false : tarotData.cards.map(card => card.name_short)}
            />
        }}
      />
    <Route exact path="/tarot/:name" render={({match}) => {
          const { name } = match.params
          return !tarotData
          ? <Redirect to="" />
          : <TarotInfo
          card={tarotData.cards.find(card => card.name_short === name) || false}
          url={images.find(image => image.includes(name))}
          />
        }} />
      <Route exact path="/pick/results" render={() => {
          return (
            <>

            {
              !tarotData ? <h2>Loading...</h2> : <Results
              result={getRandomElement(getRelevantResults(tarotData.currentCard.meaning_weight, tarotData.currentCard.keywords, tarotData.results)) || getRandomElement(tarotData.results)}
              crypto={tarotData.crypto.map(crypto => {
                return {
                  name: crypto.name,
                  symbol: crypto.symbol,
                  id: crypto.id
                }
              })}
              card={tarotData.currentCard}
              image={images.find(image => image.includes(tarotData.currentCard.name_short))}
              />
            }
            </>
          )
        }
      }
        />
      <Route exact path="/cryptos" render={() => {
        return <CryptosPage data={tarotData.cryptoData || false} />
      }} />
    <Route exact path="/cryptos/:id" render={({match}) => {
        const { id } = match.params
        return !tarotData ? <Redirect to="" /> : <CryptosInfo crypto={tarotData.cryptoData.find(crypto => crypto.id === id) || false} />
      }} />
    <Route render={() => {
      return <Redirect to="/" />
    }} />
    </Switch>
    </main>
  );
}

export default App;
