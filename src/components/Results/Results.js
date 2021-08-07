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

  return (
    <>
      {!!choice && !!crypto && !!card &&
        <>
        <section className="results-container">
          <div className="result-tagline">{formatResults(choice, card.keywords, crypto)}</div>
          <div className="outer-img-container">
          <h2>{card.name}</h2>
            <div className="results-img-container">
            <img
            className="results-img"
            src={image}
            alt={card.name}
            />
            </div>
          </div>
        </section>
        <section className="results-btns">
          <Link to="/pick"><button>New Reading</button></Link>
          <Link to="/"><button>Go Home</button></Link>
        </section>
        </>
      }
    </>
  )
}


export default Results
