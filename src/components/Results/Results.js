import React, {useEffect, useState} from 'react'
import {getRandomElement} from '../../utilities/utils'
import {formatResults} from '../../utilities/ResultsUtils'
import {Link} from 'react-router-dom'
import Btn from '../Btn/Btn'
import { icons } from '../../utilities/images'
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
          <div className="cryptos-btns">
            <Link to={`/cryptos/${crypto[0].id}`}>
              <button className="learn-more">Learn about {crypto[0].name} <span><img src={crypto[0].logo} alt="logo"/></span></button>
            </Link>
            <Link to={`/cryptos/${crypto[1].id}`}>
              <button className="learn-more">Learn about {crypto[1].name} <span><img src={crypto[1].logo} alt="logo"/></span></button>
            </Link>
          </div>
        )
      }
      return (<Link to={`/cryptos/${crypto[0].id}`}><button className="learn-more">Learn about {crypto[0].name} <span><img src={crypto[0].logo} alt="logo"/></span></button></Link>)
    }
  }

  return (
    <>
      {!!choice && !!crypto && !!card &&
        <div className="results-img-ctr">
        <section className="results-container">
          <div className="result-tagline">
            <h2 className="tagline">{result.tagline}</h2>
            <p>{formatResults(choice, card.keywords, crypto)[0]}</p>
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
          <Btn icon={icons[2]} active={icons[3]} url="/pick" alt={"Get a New Reading"} /><Btn icon={icons[13]} active={icons[14]} url="/" alt={"Go Home"} />
        </section>
      </div>
      }
    </>
  )
}


export default Results
