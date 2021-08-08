import React , {useState, useEffect} from 'react'
import Card from '../Card/Card'
import CardInfo from '../CardInfo/CardInfo'
import CryptoHeader from '../CryptoHeader/CryptoHeader'
import Btn from '../Btn/Btn'
import Loading from '../Loading/Loading'
import { getRandomCard, getRandomCrypto } from '../../utilities/utils'
import './CardChoice.css'
import { graphics, icons } from '../../utilities/images'


const CardChoice = ({ data, isNew, setIsNew, newTarotCard, loading}) => {

  const [clicked, setClicked] = useState(false)
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

  useEffect(() => {
    if (data) newReading()
  }, [])


  return  (
    <>
      {!data ? <Loading image={loading} message="One moment - the spirits are gathering..." /> :
        <section className="active-card-bg">
          <div className="card-container">
            <div className="graphic-block">
              <img className="sun-graphic" src={`${graphics[0]}`} alt="sol" />
            </div>
            <Card name={!!reading && isNew ? reading.card.name_short : data.currentCard.name_short } clicked={clicked} setClicked={setClicked}/>
            <div className="graphic-block">
              <img className="moon-graphic" src={`${graphics[1]}`} alt="luna" />
            </div>
          </div>
          {<section className="reading-container">
            {!clicked ? <h3>Touch the card to see your reading</h3> : null}

            <CryptoHeader crypto={!!reading && isNew ? reading.crypto : data.crypto} clicked={clicked}/>
            <div className="info-button-ctr">
              <CardInfo card={!!reading && isNew ? reading.card : data.currentCard} clicked={clicked} />
              {!! clicked && <Btn icon={icons[6]} active={icons[7]} url="/pick/results" alt="View Results" />}
            </div>
          </section>}
        </section>
      }
    </>
  )
}

export default CardChoice
