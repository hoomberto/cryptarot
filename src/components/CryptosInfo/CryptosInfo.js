import { Redirect } from 'react-router-dom'
import './CryptosInfo.css'
import PriceChange from '../PriceChange/PriceChange'
import Btn from '../Btn/Btn'
import { icons } from '../../utilities/images'
import { formatName } from '../../utilities/utils'
import PropTypes from 'prop-types'
const dayjs = require('dayjs')
const LocalizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(LocalizedFormat)

const CryptosInfo = ({crypto}) => {

  const getRows = () => {
    return ['1d', '7d', '30d', '365d', 'ytd'].map((param, index) => <PriceChange
      key={index}
      time={param}
      price_change={crypto[param].price_change}
      price_change_pct={crypto[param].price_change_pct}
      volume={crypto[param].volume}
      volume_change={crypto[param].volume_change}
      volume_change_pct={crypto[param].volume_change_pct}
      market_cap={crypto[param].market_cap_change}
      market_cap_pct={crypto[param].market_cap_change_pct}
    />)
  }

  return (
    <>
      {!crypto ? <Redirect to="/" /> :
      <section className="cryptos-info">
        <img className="info-logo" src={crypto.logo_url} alt="logo"/>
        <h1>{crypto.name}</h1>
        <div className="table-ctr">
          <table className="expanded-table">
            <tbody>
              <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Price</th>
              <th>First Trade</th>
              <th>Circulating Supply</th>
              <th>Max Supply</th>
              </tr>
              <tr>
              <td>{crypto.rank}</td>
              <td>{crypto.name}</td>
              <td>${parseFloat(crypto.price).toFixed(2)}</td>
              <td id="firstTrade">{dayjs(crypto.first_trade).format("LLL")}</td>
              <td>{parseInt(crypto.circulating_supply).toLocaleString()}</td>
              <td>{crypto.max_supply ? parseInt(crypto.max_supply).toLocaleString() : "N/A"}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table-ctr">
          <table className="over-time">
            <tbody>
              <tr>
              <th colSpan="5">Changes over Time</th>
              </tr>
              <tr>
              <th>Time</th>
              <th>Price Change</th>
              <th>Volume</th>
              <th>Volume Change</th>
              <th>Market Cap</th>
              </tr>
              {getRows()}
              </tbody>
          </table>
        </div>
        <div className="cryptos-info-btns-ctr">
        <a target="_blank" rel="noreferrer" href={`https://crypto.com/price/${formatName(crypto.name)}`}><button className="buy">Purchase {crypto.name}</button></a>
        <Btn id="viewAllCryptos" icon={icons[8]} active={icons[9]} url="/cryptos" alt="View All Cryptos" />
        </div>
      </section>
      }
    </>
  )
}

export default CryptosInfo

CryptosInfo.propTypes = {
  crypto: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object
  ]).isRequired,
}
