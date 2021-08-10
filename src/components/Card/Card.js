import './Card.css'
import PropTypes from 'prop-types'
import { images } from '../../utilities/images'

const Card = ({ name, clicked, setClicked}) => {

  const handleClick = () => {
    setClicked(true)
  }

  const renderCard = () => {
    return <img tabIndex="0" className={!clicked ? "back" : "front"}
      src={!clicked ? images.find(image => image.includes('reverse')) : images.find(image => image.includes(name))}
      alt={name}
      onClick={handleClick}
      onKeyPress={event => {
        if (event.key === "Enter") {
          handleClick()
        }
      }}
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
