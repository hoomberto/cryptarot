import React from "react

import { images } from '../../utilities/images'


const Card = ({ currentCard }) => {
  return (
    <>
      <img src={images.find(image => image.includes(currentCard.name_short))} />
    </>
  )
}

export default Card
