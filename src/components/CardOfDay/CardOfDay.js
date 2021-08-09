import React, { useState, useEffect } from 'react'
import Loading from '../Loading/Loading'
import ErrComp from '../ErrComp/ErrComp'
import { getDailyCard } from '../../utilities/apiCalls'
import { images, icons } from '../../utilities/images'
import { Link } from 'react-router-dom'
import './CardOfDay.css'

const CardOfDay = () => {

  const [card, setCard] = useState('')
  const [errMsg, setErrMsg] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDailyCard()
        setCard(response.card)
        setErrMsg(false)
      }
      catch (err) {
        setErrMsg(true)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="cod-ctr"><h2 className="cod-title">Card of the Day</h2>
    {!!errMsg && <ErrComp />}
    {!card && !errMsg ? <Loading cod={true} image={icons[10]} message="Summoning card of the day..." /> : <div className="card-of-day-ctr">
    <Link to={`/tarot/${card.name_short}`}><img className="cod" src={images.find(image => image.includes(card.name_short))} alt={card.name} /></Link>
        <p className="cod-name">{card.name}</p>
        <p className={!errMsg ? "cod-desc" : "err-desc"}>{card.description}</p>
        <p>Check back tomorrow for a new reading!</p>
      </div>}
    </div>
  )

}

export default CardOfDay
