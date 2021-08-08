import React, { useState, useEffect } from 'react'
import Loading from '../Loading/Loading'
import { getDailyCard } from '../../utilities/apiCalls'
import { images, icons } from '../../utilities/images'
import './CardOfDay.css'

const CardOfDay = ({ loading }) => {

  const [card, setCard] = useState('')
  const [errMsg, setErrMsg] = useState('')


  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      const response = await getDailyCard()
      setCard(response.card)
    }
    fetchData()
    return () => {
      isMounted = false;
    }
  }, [])

  return (
    <div className="cod-ctr"><h2 className="cod-title">Card of the Day</h2>
    {!card ? <Loading image={icons[10]} message="Summoning card of the day..." /> : <div className="card-of-day-ctr">
    <img className="cod" src={images.find(image => image.includes(card.name_short))} alt={card.name} />
        <p className="cod-name">{card.name}</p>
        <p className="cod-desc">{card.description}</p>
        <p>Check again tomorrow for a new reading!</p>
      </div>}
    </div>
  )

}

export default CardOfDay
