import TableRow from  '../TableRow/TableRow'
import './CryptoTable.css'
const CryptoTable = ({data}) => {
  const rows = data.map(d => <TableRow data={d} />)

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
        </tr>
        {rows}
      </tbody>
    </table>}
    </>
  )
}

export default CryptoTable
