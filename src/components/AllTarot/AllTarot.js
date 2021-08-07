import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import SingleTarot from '../SingleTarot/SingleTarot'
import { shuffle } from '../../utilities/utils'
import CardContext from '../Context/CardContext'
import './AllTarot.css'

const AllTarot = ({ images, tarot }) => {

  const [currentTarot, setCurrentTarot] = useState('')
  const [shuffled, setShuffled] = useState(false)
  useEffect(() => {
    if (tarot) setCurrentTarot(tarot)
  }, [])

  const shuffleCards = () => {
    setCurrentTarot(shuffle(tarot))
    setShuffled(true)
    setTimeout(() => setShuffled(false), 50)
  }

  return (
    <>
    <button onClick={shuffleCards}>Shuffle Cards</button>
    <section className="all-tarot">
      {!tarot ? <h2>Spreading the cards...</h2> : tarot.map(card => {
        return <SingleTarot name={card} shuffled={shuffled} url={images.find(image => image.includes(card))} reverse={images.find(image => image.includes('reverse'))}/>
      })}
    </section>
    </>
  )
}

export default AllTarot
