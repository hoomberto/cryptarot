const CardInfo = ({card}) => {
  return (
    <>
      <h2>{card.name}</h2>
      <h3>{card.type === "major" && card.value}</h3>
      <h3>{card.description}</h3>
    </>
  )
}

export default CardInfo
