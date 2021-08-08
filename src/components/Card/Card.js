import './Card.css'

import { images } from '../../utilities/images'



const Card = ({ name, clicked, setClicked}) => {

  const handleClick = () => {
    setTimeout(() => {
      setClicked(true)
    }, 50)
  }

  // const front = () => {
  //   return <img className="front" src={images.find(image => image.includes(name))} alt={name} />
  // }

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
