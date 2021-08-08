import React, { useState } from 'react'
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
