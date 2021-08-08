import './CardInfo.css'

const CardInfo = ({card, clicked}) => {
  return (
    <>
    {!!clicked &&
      <div>
      <h2 className="card-name">{card.type === "major" && `${card.value}`} {card.name}</h2>
      <h3 className="card-info">{card.description}</h3>

      </div>
    }
    </>
  )
}

export default CardInfo
