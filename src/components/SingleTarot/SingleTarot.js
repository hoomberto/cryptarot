import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './SingleTarot.css'
const SingleTarot = ({ url, reverse, shuffled, name }) => {
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    if (shuffled) setClicked(false)
  }, [shuffled])

  const renderCard = () => {
    return (!clicked)
    ? <img
      tabIndex="0"
      id={`${name}Img`}
      className="reverse-single"
      alt="reversed card"
      src={reverse}
      onClick={() => setClicked(true)}
      onKeyPress={event => {
        if (event.key === "Enter") {
          setClicked(true)
        }
      }}
      />

  : <Link
      id={name}
      to={`/tarot/${name}`}><img
      alt={name}
      className="single-tarot"
      src={url}
      />

  </Link>
  }

  return (
    <>
      {renderCard()}
    </>
  )
}

export default SingleTarot

SingleTarot.propTypes = {
  url: PropTypes.string.isRequired,
  reverse: PropTypes.string.isRequired,
  shuffled: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
}
