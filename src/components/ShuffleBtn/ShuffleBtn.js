import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './ShuffleBtn.css'


const ShuffleBtn = ({ icon, active, shuffle, alt }) => {
  const [hover, setHover] = useState(false);

  return (
      <button
        className="shuffle-btn"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={shuffle}
          >
          <div>
            <p>{alt}</p>
            <img className="icon" src={!hover ? icon : active} alt={alt} />
          </div>
      </button>
  )
}

export default ShuffleBtn

ShuffleBtn.propTypes = {
  icon: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
  shuffle: PropTypes.func.isRequired,
  alt: PropTypes.string.isRequired
}
