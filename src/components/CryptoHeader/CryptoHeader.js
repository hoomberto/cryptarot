import  React, { useState } from 'react'

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
      <h2>{crypto[0].name} <strong>({crypto[0].symbol})</strong></h2>
      {hover && (
        <div className='crypto-info'>
          <h3>Current Price</h3>
          <p>${parseFloat(crypto[0].price).toFixed(2)}</p>
          <h3>Current Circ. Supply</h3>
          <p>{new Number(crypto[0].circulating_supply).toLocaleString()}</p>
        </div>
      )}
    </div>
  )
}

  // let oneCrypto = <div>`${crypto[0].name} (${crypto[0].symbol})`</div>;
  // let twoCryptos = `${crypto[0].name} (${crypto[0].symbol}) & ${crypto[1].name} (${crypto[1].symbol})`;
  // const twoCryptos = () => {
  //   return (
  //     <div className="two-cryptos-container">
  //       <div className="crypto-header-container"><img className="logo" src={crypto[0].logo_url} alt={`${crypto[0].name} logo`}/><h2>{crypto[0].name} <strong>({crypto[0].symbol})</strong></h2></div>
  //       <div className="crypto-header-container"><img className="logo" src={crypto[1].logo_url} alt={`${crypto[1].name} logo`}/><h2>{crypto[1].name} <strong>({crypto[1].symbol})</strong></h2></div>
  //     </div>
  //   )
  // }
  //
  // const rand = Math.random() < 0.5

  return (
    <div style={{width: '100vw'}}>{!!clicked && oneCrypto()}</div>
    // {!!clicked && <div>{oneCrypto()}</div>}
  )
}

export default CryptoHeader
