import './Header.css'
import { NavLink, Link } from 'react-router-dom'
import { graphics } from '../../utilities/images'

const Header = () => {
  return (
    <header>
      <Link to="/"><img style={{width: '300px', height: 'auto'}} src={`${graphics[1]}`} /></Link>

      <div>
        <NavLink to="/cryptos">View Cryptocurrencies</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </header>
  )
}

export default Header
