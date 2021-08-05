// import {  } from '../../utilities/CryptosPageUtils'
import React, {useState, useEffect } from 'react'
import UseViewport from '../Resize/Resize'
import SearchBar from '../SearchBar/SearchBar'
import CryptoCard from '../CryptoCard/CryptoCard'
import CryptoTable from '../CryptoTable/CryptoTable'
import { Link } from 'react-router-dom'
import './CryptosPage.css'

const CryptosPage = ({ data }) => {
  const [query, setQuery] = useState('')

  const queryResults = (data) => {
    return data.filter(d => d.name.toLowerCase().includes(query.toLowerCase()))
  }

  const renderTable = () => {
    return (
      <>
      <SearchBar query={query} set={setQuery} />
        <div className="table-container">
          {!query ? <CryptoTable data={data} /> : <CryptoTable data={queryResults(data)} />}
        </div>
      </>
    )
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

  return (
    <>
    <Link to="/"><button>Go Back</button></Link>
      {!data ? <h2>The spirits are crunching some numbers... </h2> : renderTable()}
    </>
  )

}

export default CryptosPage;
