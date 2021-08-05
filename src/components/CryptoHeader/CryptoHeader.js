const CryptoHeader = ({crypto}) => {
  let oneCrypto = `${crypto[0].name} (${crypto[0].symbol})`;
  let twoCryptos = `${crypto[0].name} (${crypto[0].symbol}) & ${crypto[1].name} (${crypto[1].symbol})`;


  const rand = Math.random() < 0.5

  return (
    <h2>{!!rand ? oneCrypto : twoCryptos }</h2>
  )
}

export default CryptoHeader
