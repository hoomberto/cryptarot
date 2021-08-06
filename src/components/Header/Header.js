import './Header.css'
import { NavLink, Link } from 'react-router-dom'
import { graphics } from '../../utilities/images'

const Header = () => {
  return (
    <header style={{background: `linear-gradient(132deg, rgba(14,24,45,1) 0%, rgba(37,46,67,1) 100%)`}}>
      <Link to="/"><img style={{width: '300px', height: 'auto'}} src={`${graphics[1]}`} /></Link>

      <div>
        <NavLink to="/cryptos">View Cryptocurrencies</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </header>
  )
}

export default Header
