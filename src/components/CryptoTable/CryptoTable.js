import TableRow from  '../TableRow/TableRow'
import './CryptoTable.css'
const CryptoTable = ({data}) => {
  const rows = data.map(d => <TableRow data={d} />)

  return (
    <table>
    <tr className="heading">
      <td>Name</td>
      <td>Price</td>
      <td>Circulating Supply</td>
      <td>Max Supply</td>
    </tr>
    {rows}
    </table>
  )
}

export default CryptoTable
