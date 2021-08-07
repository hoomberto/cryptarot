import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { icons } from '../../utilities/images'
import './Btn.css'


const ResultsBtn = ({ icon, active, url, alt }) => {
  const [hover, setHover] = useState(false);

  return (
    <Link to={url}>
      <button
        className="view-results"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
          >
          <div>
            <p>{alt}</p>
            <img className="icon" src={!hover ? icon : active} alt={alt} />
          </div>
      </button>
    </Link>
  )
}

export default ResultsBtn
