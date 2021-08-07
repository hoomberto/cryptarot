import { Redirect, Link } from 'react-router-dom'
import './CryptosInfo.css'
import PriceChange from '../PriceChange/PriceChange'
const dayjs = require('dayjs')
const LocalizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(LocalizedFormat)

const CryptosInfo = ({crypto}) => {

  const formatName = (name) => {
    return (/\w/g.test(name)) ? name.toLowerCase().replaceAll(' ', '-') : name.toLowerCase()
  }

  const getRows = () => {
    let rows;
    return ['1d', '7d', '30d', '365d', 'ytd'].map(param => <PriceChange
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
        <img className="info-logo" src={crypto.logo_url} />
        <h1>{crypto.name}</h1>
        <div className="table-ctr">
          <table className="expanded-table">
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
            <td>{dayjs(crypto.first_trade).format("LLL")}</td>
            <td>{parseInt(crypto.circulating_supply).toLocaleString()}</td>
            <td>{crypto.max_supply && parseInt(crypto.max_supply).toLocaleString() || "N/A"}</td>
            </tr>
          </table>
        </div>
        <div className="table-ctr">
          <table className="over-time">
            <tr>
            <th colspan="5">Changes over Time</th>
            </tr>
            <tr>
            <th>Time</th>
            <th>Price Change</th>
            <th>Volume</th>
            <th>Volume Change</th>
            <th>Market Cap</th>
            </tr>
            {getRows()}
          </table>
        </div>
        <a target="_blank"href={`https://crypto.com/price/${formatName(crypto.name)}`}><button className="buy">Buy</button></a>
        <Link to="/cryptos"><button>Back to Cryptos</button></Link>
      </section>
      }
    </>
  )
}

export default CryptosInfo
