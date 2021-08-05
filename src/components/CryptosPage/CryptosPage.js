// import {  } from '../../utilities/CryptosPageUtils'
import React, {useState, useEffect } from 'react'
import UseViewport from '../Resize/Resize'
import CryptoCard from '../CryptoCard/CryptoCard'
import CryptoTable from '../CryptoTable/CryptoTable'
import { Link } from 'react-router-dom'
import './CryptosPage.css'



const CryptosPage = ({ data }) => {

  // const [dimensions, setDimensions] = useState({
  //   height: window.innerHeight,
  //   width: window.innerWidth
  // })
  //
  // useEffect(() => {
  //   function handleResize() {
  //     setDimensions({
  //       height: window.innerHeight,
  //       width: window.innerWidth
  //     })
  //   }
  //   window.addEventListener('resize', handleResize)
  // })
  //
  //
  //







  const renderDesk = () => {
    return <div className="table-container"><CryptoTable data={data} /></div>
  }

  const renderMobile = () => {
    return (
      <>
      {data.map((d, index) => {
        return <CryptoCard
        key={index}
          name={d.name}
          d1={d['1d']}
          price={d.price}
        />
      })}
      </>
    )
  }

  const renderData = () => {
    const { width } = UseViewport();
    const breakpoint = 700;
    return width < breakpoint ? renderMobile() : renderDesk();
  }

  return (
    <>
    <Link to="/"><button>Go Back</button></Link>
      {!data ? <h2>The spirits are crunching some numbers... </h2> : renderData()}
    </>
  )

}

export default CryptosPage;
