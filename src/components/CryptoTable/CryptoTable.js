import TableRow from  '../TableRow/TableRow'
import PropTypes from 'prop-types'
import './CryptoTable.css'
const CryptoTable = ({data}) => {
  const rows = data.map((d, index) => {
    return (
      <TableRow
        key={index}
        rank={d.rank}
        logo={d.logo_url}
        name={d.name}
        symbol={d.symbol}
        price={d.price}
        circSupply={d.circulating_supply}
        maxSupply={d.max_supply}
        id={d.id}
      />
    )
  })

  return (
    <>{! data.length ? <h2>No results found - please try another search</h2> :
    <table>
      <tbody>
        <tr className="heading">
          <th>Rank</th>
          <th>Name</th>
          <th>Price</th>
          <th>Circulating Supply</th>
          <th>Max Supply</th>
          <th>Learn More</th>
        </tr>
        {rows}
      </tbody>
    </table>}
    </>
  )
}

export default CryptoTable

CryptoTable.propTypes = {
  data: PropTypes.array.isRequired
}
