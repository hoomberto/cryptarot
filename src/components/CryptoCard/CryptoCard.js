const CryptoCard = ({ name, d1, price }) => {
  return (
    <ul>
      <li>Name: {name}</li>
      <li>Current Price: ${parseFloat(price).toFixed(2)}</li>
      <li>24hr Price Change: {d1.price_change}</li>

    </ul>
  )
}

export default CryptoCard
