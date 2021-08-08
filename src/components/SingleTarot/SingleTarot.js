import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './SingleTarot.css'
const SingleTarot = ({ url, reverse, shuffled, name }) => {
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    if (shuffled) setClicked(false)
  }, [shuffled])

  const renderCard = () => {
    return (!clicked)
    ? <img className="reverse-single" alt="reversed card" src={reverse} onClick={() => setClicked(true)} />
  : <Link to={`/tarot/${name}`}><img alt={name} className="single-tarot" src={url} onClick={() => setClicked(true)} /></Link>
  }

  return (
    <>
      {renderCard()}
    </>
  )
}

export default SingleTarot
