import PropTypes from 'prop-types'
const PriceChange = ({time, price_change, price_change_pct, volume, volume_change, volume_change_pct, market_cap, market_cap_pct}) => {
  return (
    <tr>
      <td>{time.toUpperCase()}</td>
      <td>${Number(price_change).toLocaleString()} ({parseFloat(price_change_pct).toFixed(2)}%)</td>
      <td>{Number(volume).toLocaleString()}</td>
      <td>{volume_change ? Number(volume_change).toLocaleString(): "N/A"}</td>
      <td>{market_cap ? '$' + Number(market_cap).toLocaleString() : "N/A"} </td>
    </tr>
  )
}

export default PriceChange

PriceChange.propTypes = {
  time: PropTypes.string.isRequired,
  price_change: PropTypes.string.isRequired,
  price_change_pct: PropTypes.string.isRequired,
  volume: PropTypes.string.isRequired,
  volume_change: PropTypes.string.isRequired,
  volume_change_pct: PropTypes.string.isRequired,
  market_cap: PropTypes.string.isRequired,
  market_cap_pct: PropTypes.string.isRequired
}
