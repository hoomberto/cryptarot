import './TableRow.css'

const TableRow = ({data}) => {
  return (
    <tr>
      <td className="table-name"><img style={{width: '20px', height: '20px'}} src={data.logo_url} alt={data.name} />{data.name} ({data.symbol})</td>
      <td>{data.price}</td>
      <td>{data.circulating_supply}</td>
      <td>{data.max_supply}</td>
    </tr>
  )
}

export default TableRow
