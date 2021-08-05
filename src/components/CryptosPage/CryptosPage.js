// import {  } from '../../utilities/CryptosPageUtils'
import CryptoCard from '../CryptoCard/CryptoCard'

const CryptosPage = ({ data }) => {

  const renderDesk = () => {

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

  const renderMobile = () => {
    return (
      <>

      </>
    )
  }

  return (
    <>
      {!data ? <h2>The spirits are crunching some numbers... </h2> : renderDesk()}
    </>
  )

}

export default CryptosPage;
