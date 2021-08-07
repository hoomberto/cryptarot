import React , {useState, useEffect} from 'react'
import { Link, Redirect, Route } from 'react-router-dom'
import Card from '../Card/Card'
import CardInfo from '../CardInfo/CardInfo'
import CryptoHeader from '../CryptoHeader/CryptoHeader'
import Btn from '../Btn/Btn'
import { getRandomCard, getRandomCrypto } from '../../utilities/utils'
import './CardChoice.css'
import { graphics, icons } from '../../utilities/images'


const CardChoice = ({ data, isNew, setIsNew, newTarotCard}) => {

  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    if (data) newReading()
  }, [])
  const [reading, setReading] = useState('')
  const newReading = () => {
    let newCard = {
      card: getRandomCard(data.cards),
      crypto: getRandomCrypto(data.cryptoData)
    }
    setClicked(false)
    setReading(newCard)
    newTarotCard(newCard)
    setIsNew(true)
  }



  return  (
    <>
      {!data ? <h2>One moment - the spirits are gathering...</h2> :
        <section className="active-card-bg">
          <div className="card-container">
            <div className="graphic-block">
              <img className="sun-graphic" src={`${graphics[2]}`} />
            </div>
            <Card name={!!reading && isNew ? reading.card.name_short : data.currentCard.name_short } clicked={clicked} setClicked={setClicked}/>
            <div className="graphic-block">
              <img className="moon-graphic" src={`${graphics[3]}`} />
            </div>
          </div>
          {<section className="reading-container" style={{background: `linear-gradient(132deg, rgba(14,24,45,1) 0%, rgba(37,46,67,1) 100%)`}}>
            {!clicked ? <h3>Click the card to see your reading</h3> : null}

            <CryptoHeader crypto={!!reading && isNew ? reading.crypto : data.crypto} clicked={clicked}/>
            <CardInfo card={!!reading && isNew ? reading.card : data.currentCard} clicked={clicked} />
            {!clicked ? null : <button className="top-layer" onClick={newReading}>New Reading</button>}
            <Link className="top-layer" to="/"><button onClick={newReading}>Go Back</button></Link>
            {!! clicked && <Btn icon={icons[6]} active={icons[7]} url="/pick/results" alt="View Results" />}
          </section>}
        </section>
      }
    </>
  )
}

export default CardChoice
