// import {  } from '../../utilities/CryptosPageUtils'
import React, {useState} from 'react'
import SearchBar from '../SearchBar/SearchBar'
import CryptoTable from '../CryptoTable/CryptoTable'
import Loading from '../Loading/Loading'
import { Link } from 'react-router-dom'
import './CryptosPage.css'

const CryptosPage = ({ data, loading }) => {
  const [query, setQuery] = useState('')

  const queryResults = (data) => {
    return data.filter(d => d.name.toLowerCase().includes(query.toLowerCase()) || d.symbol.toLowerCase().includes(query.toLowerCase()))
  }

  const renderTable = () => {
    return (
      <>
      <div className='button-search-bar-ctr'>
        <Link to="/"><button>Go Back</button></Link>
        <SearchBar query={query} set={setQuery} />
      </div>
        <div className="table-container">
          {!query ? <CryptoTable data={data} /> : <CryptoTable data={queryResults(data)} />}
        </div>
      </>
    )
  }

  return (
    <>
      {!data ? <Loading image={loading} message="One moment - the spirits are crunching numbers..." /> : renderTable()}
    </>
  )

}

export default CryptosPage;
