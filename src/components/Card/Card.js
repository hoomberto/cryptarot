import React, {useState} from "react"
import './Card.css'

import { images, graphics } from '../../utilities/images'



const Card = ({ name, clicked, setClicked}) => {

  const handleClick = () => {
      setClicked(true)
    }

  // const front = () => {
  //   return <img className="front" src={images.find(image => image.includes(name))} alt={name} />
  // }

  const back = () => {
    return (

    <div>
      <img className="border" src={`${graphics[7]}`} />
      <img className={!clicked ? "back" : "front"}
      src={!clicked ? images.find(image => image.includes('reverse')) : images.find(image => image.includes(name))}
      alt={name}
      onClick={handleClick}
      />
    </div>
    )
  }

  return (
    <>
    {back()}
    </>
  )

}

export default Card
