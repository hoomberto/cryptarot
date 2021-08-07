import React, {useState, useEffect} from 'react'
import './SingleTarot.css'
const SingleTarot = ({ url, reverse, shuffled }) => {
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    if (shuffled) setClicked(false)
  })

  return (
    <>
      <img className={!clicked ? "reverse-single" : "single-tarot"} src={!clicked ? reverse : url} onClick={() => setClicked(true)} />
    </>
  )
}

export default SingleTarot
