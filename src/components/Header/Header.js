import './Header.css'
import { graphics } from '../../utilities/images'

const Header = () => {
  return (
    <header style={{background: `url(${graphics[0]})`}}>
      <img style={{width: '300px', height: 'auto'}} src={`${graphics[1]}`} />
    </header>
  )
}

export default Header
