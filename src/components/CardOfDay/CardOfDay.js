import React, { useState, useEffect } from 'react'
import { getDailyCard } from '../../utilities/apiCalls'
import { images } from '../../utilities/images'
import './CardOfDay.css'

const CardOfDay = () => {

  const [card, setCard] = useState('')

  useEffect(() => {
    getDailyCard()
    .then(data => setCard(data.card))
  }, [])

  return (
    <>{!!card && <div className="card-of-day-ctr">
      <h2>Card of the Day</h2>
        <p className="cod-name">{card.name}</p>
        <img className="cod" src={images.find(image => image.includes(card.name_short))} alt={card.name} />
        <p className="cod-desc">{card.description}</p>
      </div>}
    </>
  )

}

export default CardOfDay
