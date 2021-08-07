import React from 'react'
import { Link } from 'react-router-dom'
import CardOfDay from '../CardOfDay/CardOfDay'

const Landing = () => {
  return (
    <>
      <Link to="/pick"><button>Get a reading</button></Link>
      <Link to="/cryptos"><button>View Cryptos</button></Link>
      <CardOfDay />
    </>
  )
}

export default Landing
