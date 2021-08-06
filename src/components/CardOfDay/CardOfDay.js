import React, { useState, useEffect } from 'react'
import { getDailyCard } from '../../utilities/apiCalls'

const CardOfDay = () => {

  const [card, setCard] = useState('')

  useEffect(() => {
    getDailyCard
    .then(data => setCard(data.card))
  }, [])

  return (
    <>{!!card && <h3>{card.name}</h3>}  
    </>
  )

}

export default CardOfDay
