import React , {useState, useEffect} from 'react'
import { Link, Redirect } from 'react-router-dom'
import Card from '../Card/Card'
import CardInfo from '../CardInfo/CardInfo'
import CryptoHeader from '../CryptoHeader/CryptoHeader'
import { getRandomCard, getRandomCrypto } from '../../utilities/utils'
import './CardChoice.css'
import { graphics } from '../../utilities/images'


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
        <section>
          <div className="card-container">
            <div style={{background: `url(${graphics[4]})`}} className="graphic-block">
              <img className="sun-graphic" src={`${graphics[2]}`} />
            </div>
            <Card name={!!reading && isNew ? reading.card.name_short : data.currentCard.name_short } clicked={clicked} setClicked={setClicked}/>
            <div style={{background: `url(${graphics[4]})`}} className="graphic-block">
              <img className="moon-graphic" src={`${graphics[3]}`} />
            </div>
          </div>
          <section className="reading-container" style={{background: `url(${graphics[0]})`}}>
            {!clicked ? <h3>Click the card to see your reading</h3> : null}
            {!clicked ? null : <img className="rays" src={`${graphics[5]}`} />}
            <CryptoHeader crypto={!!reading && isNew ? reading.crypto : data.crypto} clicked={clicked}/>
            <CardInfo card={!!reading && isNew ? reading.card : data.currentCard} clicked={clicked} />
            {!clicked ? null : <button className="top-layer" onClick={newReading}>New Reading</button>}
            <Link className="top-layer" to="/"><button onClick={newReading}>Go Back</button></Link>
          </section>
        </section>
      }
    </>
  )
}

export default CardChoice
