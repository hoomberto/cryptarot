import './Card.css'
import PropTypes from 'prop-types'
import { images } from '../../utilities/images'

const Card = ({ name, clicked, setClicked}) => {

  const handleClick = () => {
    setTimeout(() => {
      setClicked(true)
    }, 50)
  }

  const renderCard = () => {
    return <img className={!clicked ? "back" : "front"}
      src={!clicked ? images.find(image => image.includes('reverse')) : images.find(image => image.includes(name))}
      alt={name}
      onClick={handleClick}
      />

  }
  return (<>{renderCard()}</>)
}

export default Card

Card.propTypes = {
  name: PropTypes.string.isRequired,
  clicked: PropTypes.bool.isRequired,
  setClicked: PropTypes.func.isRequired
}
