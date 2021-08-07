import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './SingleTarot.css'
const SingleTarot = ({ url, reverse, shuffled, name }) => {
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    if (shuffled) setClicked(false)
  })

  const renderCard = () => {
    return (!clicked)
    ? <img className="reverse-single" src={reverse} onClick={() => setClicked(true)} />
  : <Link to={`/tarot/${name}`}><img className="single-tarot" src={url} onClick={() => setClicked(true)} /></Link>
  }
  // <>
  //   <img className={!clicked ? "reverse-single" : "single-tarot"} src={!clicked ? reverse : url} onClick={() => setClicked(true)} />
  // </>

  return (
    <>
      {renderCard()}
    </>
  )
}

export default SingleTarot
