import  React, { useState } from 'react'
import PropTypes from 'prop-types'
import './CryptoHeader.css'

const CryptoHeader = ({crypto, clicked}) => {
  const [hover, setHover] = useState(false);

  const oneCrypto = () => {
    return (
      <div className="crypto-header-container"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      >
        <img className="logo" alt={`${crypto[0].name} logo`}src={crypto[0].logo_url}/>
        <h2>{crypto[0].name}</h2>
        {hover && (
          <div className='crypto-info'>
            <h3>Current Price</h3>
            <p>${parseFloat(crypto[0].price).toFixed(2)}</p>
            <h3>Current Circ. Supply</h3>
            <p>{Number(crypto[0].circulating_supply).toLocaleString()}</p>
          </div>
        )}
      </div>
    )
  }

  return (
    <div style={{width: '100vw'}}>{!!clicked && oneCrypto()}</div>
  )
}

export default CryptoHeader

CryptoHeader.propTypes = {
  crypto: PropTypes.array.isRequired,
  clicked: PropTypes.bool.isRequired
}
