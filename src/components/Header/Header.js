import './Header.css'
import { NavLink, Link } from 'react-router-dom'
import { graphics } from '../../utilities/images'

const Header = () => {
  return (
    <header>
      <Link style={{textDecoration: 'none'}} to="/"><h1>CrypTarot</h1></Link>

      <div>
        <Link style={{textDecoration: 'none'}} to="/cryptos">View Cryptocurrencies</Link>
        <Link style={{textDecoration: 'none'}} to="/about">About</Link>
      </div>
    </header>
  )
}

export default Header
