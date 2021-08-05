const CryptoCard = ({ name, d1, d7, d30, d35, supply }) => {
  return (
    <ul>
      <li>Name: {name}</li>
      <li>24hr Price Change: {d1}</li>
      <li>1wk Price Change: {d7}</li>
      <li>1mo Price Change: {d30}</li>
      <li>1yr Price Change: {d365}</li>
      <li>Circulating Suppli: {supply}</li>
    <ul/>
  )
}

export default CryptoCard 
