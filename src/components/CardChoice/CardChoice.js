import React , {useState} from 'react'
import Card from '../Card/Card'
import CardInfo from '../CardInfo/CardInfo'
import CryptoHeader from '../CryptoHeader/CryptoHeader'
import { getRandomCard, getRandomCrypto } from '../../utilities/utils'
import './CardChoice.css'

const CardChoice = ({ data}) => {

  const [reading, setReading] = useState('')

  const newReading = () => {
    setReading({
      card: getRandomCard(data.cards),
      crypto: getRandomCrypto(data.cryptoData)
    })
  }

  return  (
    <>
      {!data ? <h2>The spirits are gathering...</h2> :
        <section>
          <CardInfo card={!!reading ? reading.card : data.currentCard} />
          <CryptoHeader crypto={!!reading ? reading.crypto : data.crypto} />
          <Card name={!!reading ? reading.card.name_short : data.currentCard.name_short} />
          <button onClick={newReading}>New Reading</button>
        </section>
      }
    </>
  )
}

export default CardChoice
