import './TableRow.css'

const TableRow = ({data}) => {
  return (
    <tr>
      <td className="rank">{data.rank}</td>
      <td className="table-name"><img style={{width: '20px', height: '20px'}} src={data.logo_url} alt={data.name} />{data.name} ({data.symbol})</td>
      <td className="price">{data.price}</td>
      <td className="circ-supply">{data.circulating_supply}</td>
      <td className="max-supply">{data.max_supply}</td>
    </tr>
  )
}

export default TableRow
