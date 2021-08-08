import './TableRow.css'
import { Link } from 'react-router-dom'

const TableRow = ({rank, logo, name, symbol, price, circSupply, maxSupply, id}) => {

  return (
    <tr>
      <td className="rank">{rank}</td>
      <td className="table-name"><img style={{width: '20px', height: '20px'}} src={logo} alt={`${name} logo`} />{name} ({symbol})</td>
      <td className="price">${Number(price).toLocaleString()}</td>
      <td className="circ-supply">{Number(circSupply).toLocaleString()}</td>
      <td className="max-supply">{maxSupply ? Number(maxSupply).toLocaleString() : "N/A"}</td>
      <td className=""><Link to={`/cryptos/${id}`}><button className="more-info">More Info</button></Link></td>
    </tr>
  )
}

export default TableRow
