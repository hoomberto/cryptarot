import React, { useState, useEffect } from 'react'
import { getDailyCard } from '../../utilities/apiCalls'
import { images } from '../../utilities/images'

const CardOfDay = () => {

  const [card, setCard] = useState('')

  useEffect(() => {
    getDailyCard()
    .then(data => setCard(data.card))
  }, [])

  return (
    <>{!!card && <div>
      <h2>Card of the Day</h2>
        <h3>{card.name}</h3>
        <img src={images.find(image => image.includes(card.name_short))} alt={card.name} />
        <h3>{card.description}</h3>
      </div>}
    </>
  )

}

export default CardOfDay
