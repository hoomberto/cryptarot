import React from 'react'
import { Link } from 'react-router-dom'
import CardOfDay from '../CardOfDay/CardOfDay'
import './Landing.css'

const Landing = () => {
  return (
    <section className="main-ctr">
      <div className="main-links-ctr">
        <Link to="/pick"><button>Get a reading</button></Link>
        <Link to="/cryptos"><button>View Cryptos</button></Link>
        <Link to="/tarot"><button>View Tarot</button></Link>
      </div>
      <CardOfDay />
    </section>
  )
}

export default Landing
