import React from "react"

import { images } from '../../utilities/images'


const Card = ({ name }) => {
  return (
    <>
      <img src={images.find(image => image.includes(name))} alt={name}/>
    </>
  )
}

export default Card
