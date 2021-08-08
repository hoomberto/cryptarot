import React, {useState, useEffect} from 'react'
import SingleTarot from '../SingleTarot/SingleTarot'
import { shuffle } from '../../utilities/utils'
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
    <h3>This app utilizes cards and information from the Book of Thoth tarot deck. Flip each card to reveal them and tap them again to learn more!</h3>
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
