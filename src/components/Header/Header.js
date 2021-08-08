import './Header.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { icons } from '../../utilities/images'

const Header = () => {

  const [clicked, setClicked] = useState(false)

  return (
    <header>
      <Link to="/"><h1>CRYPTAROT</h1></Link>
      <div className="links">
        <Link to="/pick">Get a Reading</Link>
        <Link to="/cryptos">View Cryptos</Link>
        <Link to="/tarot">View Tarot</Link>
      </div>
      <button onClick={() => setClicked(true)} className={!clicked ? 'menu' : 'hidden-menu'}>
        <img className="menu-icon" src={icons[11]} alt="menu" />
      </button>
      <div className={!clicked ? 'hidden-menu' : 'active-menu'} >
      <button className="close-btn" onClick={() => setClicked(false)}>
        <img className="menu-icon close" src={icons[12]} alt="close" />
      </button>
        <ul>
          <li onClick={() => setClicked(false)}><Link to="/cryptos">View Cryptocurrencies</Link></li>
          <li onClick={() => setClicked(false)}><Link to="/tarot">View Tarot</Link></li>
          <li onClick={() => setClicked(false)}><Link to="/pick">Get a Reading</Link></li>
        </ul>
      </div>
    </header>
  )
}

export default Header
