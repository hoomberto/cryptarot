import React, {useEffect, useState} from 'react'
import {getRandomElement} from '../../utilities/utils'
import {formatResults} from '../../utilities/ResultsUtils'
import {Link} from 'react-router-dom'
import './Results.css'
// import { images } from '../../utilities/images'

const Results = ({result, crypto, card, image}) => {
  const [choice, setChoice] = useState('')

  useEffect(() => {
    if (result) setChoice(getRandomElement(result.result_choices))
  }, [])

  const renderCryptos = () => {
    let formatted;
    if (choice && crypto && card) {
      formatted = formatResults(choice, card.keywords, crypto)
      if (formatted[1] > 1) {
        return (
          <div>
            <Link to={`/cryptos/${crypto[0].id}`}>
              <button className="learn-more">Learn about {crypto[0].name}</button>
            </Link>
            <Link to={`/cryptos/${crypto[1].id}`}>
              <button className="learn-more">Learn about {crypto[1].name}</button>
            </Link>
          </div>
        )
      }
      return (<Link to={`/cryptos/${crypto[0].id}`}><button className="learn-more">Learn about {crypto[0].name}</button></Link>)
    }
  }

  return (
    <>
      {!!choice && !!crypto && !!card &&
        <div className="results-img-ctr">
        <section className="results-container">
          <div className="result-tagline">
            <h2 className="tagline">{result.tagline}</h2>
            {formatResults(choice, card.keywords, crypto)[0]}
          <div>{renderCryptos()}</div>
        </div>

          <div className="outer-img-container">
          <h2>{card.name}</h2>
            <div className="results-img-container">
            <Link to={`/tarot/${card.name_short}`}><img
            className="results-img"
            src={image}
            alt={card.name}
            /></Link>
            </div>
          </div>
        </section>
        <section className="results-btns">
          <Link style={{textDecoration: 'none'}} to="/pick"><button>New Reading</button></Link>
          <Link style={{textDecoration: 'none'}} to="/"><button>Go Home</button></Link>
        </section>
      </div>
      }
    </>
  )
}


export default Results
