import TableRow from  '../TableRow/TableRow'

const CryptoTable = ({data}) => {
  return (
    <table>
      {data.forEach(d => <TableRow data={d} />)}
    </table>
  )
}

export default CryptoTable
