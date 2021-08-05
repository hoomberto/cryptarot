import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import Card from '../Card/Card'
import CardInfo from '../CardInfo/CardInfo'
import CryptoHeader from '../CryptoHeader/CryptoHeader'
import { getRandomCard, getRandomCrypto } from '../../utilities/utils'
import './CardChoice.css'

const CardChoice = ({ data}) => {

  const [reading, setReading] = useState('')
  const [clicked, setClicked] = useState(false)
  const newReading = () => {
    setClicked(false)
    setReading({
      card: getRandomCard(data.cards),
      crypto: getRandomCrypto(data.cryptoData)
    })
  }



  return  (
    <>
      {!data ? <h2>One moment - the spirits are gathering...</h2> :
        <section>
          <Card name={!!reading ? reading.card.name_short : data.currentCard.name_short} clicked={clicked} setClicked={setClicked}/>
          <CryptoHeader crypto={!!reading ? reading.crypto : data.crypto} clicked={clicked}/>
          <CardInfo card={!!reading ? reading.card : data.currentCard} clicked={clicked} />
          <button onClick={newReading}>New Reading</button>
          <Link to="/"><button>Go Back</button></Link>
        </section>
      }
    </>
  )
}

export default CardChoice
