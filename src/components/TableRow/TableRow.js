import './TableRow.css'
import { Link } from 'react-router-dom'

const TableRow = ({rank, logo, name, symbol, price, circSupply, maxSupply, id}) => {
  //
  const formatName = () => {
    return (/\w/g.test(name)) ? name.toLowerCase().replaceAll(' ', '-') : name.toLowerCase()
  }
  //
  return (
    <tr>
      <td className="rank">{rank}</td>
      <td className="table-name"><img style={{width: '20px', height: '20px'}} src={logo} alt={name} />{name} ({symbol})</td>
      <td className="price">{price}</td>
      <td className="circ-supply">{circSupply}</td>
      <td className="max-supply">{maxSupply || "N/A"}</td>
      <td className=""><Link to={`/cryptos/${id}`}><button className="more-info">More Info</button></Link></td>
    </tr>
  )
}

export default TableRow
