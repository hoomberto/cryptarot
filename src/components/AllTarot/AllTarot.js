import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import SingleTarot from '../SingleTarot/SingleTarot'
import { shuffle } from '../../utilities/utils'
import CardContext from '../Context/CardContext'
import Loading from '../Loading/Loading'
import ShuffleBtn from '../ShuffleBtn/ShuffleBtn'
import './AllTarot.css'

const AllTarot = ({ images, tarot, icons, loadingImage }) => {

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
    <div className="all-tarot-ctr">
    <ShuffleBtn icon={icons[0]} active={icons[1]} shuffle={shuffleCards} alt="Shuffle Cards" />
    <section className="all-tarot">
      {!tarot ? <Loading image={loadingImage} message="Spreading the cards - one moment please..." /> : tarot.map(card => {
        return <SingleTarot key={card} name={card} shuffled={shuffled} url={images.find(image => image.includes(card))} reverse={images.find(image => image.includes('reverse'))}/>
      })}
    </section>
  </div>
  )
}

export default AllTarot
