import React from 'react'
import { Link } from 'react-router-dom'
import CardOfDay from '../CardOfDay/CardOfDay'
import Btn from '../Btn/Btn'
import './Landing.css'
import { icons } from '../../utilities/images'

const Landing = () => {
  return (
    <section className="main-ctr">
      <div className="main-links-ctr">
        <Btn icon={icons[2]} active={icons[3]} url="/pick" alt={"Get a Reading"} />
        <Btn icon={icons[8]} active={icons[9]} url="/cryptos" alt="View Cryptos" />
        <Btn icon={icons[0]} active={icons[1]} url="/tarot" alt="View Tarot" />
      </div>
      <CardOfDay />
    </section>
  )
}

export default Landing
