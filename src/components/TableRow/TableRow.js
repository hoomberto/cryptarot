import './TableRow.css'

const TableRow = ({rank, logo, name, symbol, price, circSupply, maxSupply}) => {
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
      <td className="max-supply">{maxSupply}</td>
      <td className=""><a target="_blank"href={`https://crypto.com/price/${formatName()}`}><button className="buy">Buy</button></a></td>
    </tr>
  )
}

export default TableRow
