const CardInfo = ({card, clicked}) => {
  return (
    <>
    {!!clicked &&
      <div>
      <h2>{card.type === "major" && `${card.value}`} {card.name}</h2>
      <h3>{card.description}</h3>

      </div>
    }
    </>
  )
}

export default CardInfo
