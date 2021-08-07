import './TarotInfo.css'
const TarotInfo = ({card, url}) => {
  return (
    <>
      <h1>{card.name}</h1>
      <div>
        <img src={url} alt={card.name} />
      </div>
      <div>
        <img className="rev" src={url} alt={card.name} />
      </div>
      <p>{card.description}</p>
    </>
  )
}

export default TarotInfo
