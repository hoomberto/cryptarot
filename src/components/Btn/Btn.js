import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
// import { icons } from '../../utilities/images'
import './Btn.css'


const Btn = ({ icon, active, url, alt }) => {
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

export default Btn

Btn.propTypes = {
  icon: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}
