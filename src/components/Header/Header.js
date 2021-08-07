import './Header.css'
import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { graphics } from '../../utilities/images'

const Header = () => {

  const [clicked, setClicked] = useState(false)

  return (
    <header>
      <Link style={{textDecoration: 'none'}} to="/"><h1>CRYPTAROT</h1></Link>
      <div className="links">
        <Link to="/cryptos">View Cryptocurrencies</Link>
        <Link to="/about">About</Link>
      </div>
      <button onClick={() => setClicked(true)} className={!clicked ? 'menu' : 'hidden-menu'}>Menu</button>
      <div className={!clicked ? 'hidden-menu' : 'active-menu'} >
      <button onClick={() => setClicked(false)}>Close menu</button>
        <ul>
          <li><Link to="/cryptos">View Cryptocurrencies</Link></li>
          <li><Link to="/tarot">View Tarot</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </header>
  )
}

export default Header
