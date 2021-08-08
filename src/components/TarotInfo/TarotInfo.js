import './TarotInfo.css'
import { useHistory } from "react-router-dom";

const TarotInfo = ({card, url}) => {
  let history = useHistory();
  return (
    <>
      <section className="t-info-section">
      <div className="t-info">
        <h1>{card.name}</h1>
        <p>{card.description}</p>
      </div>
      <div className="up-rev-cards">
      <div>
        <img className="up" src={url} alt={card.name} />
        <h3>Meaning Upright</h3>
        <h4>{card.keywords[0]}, {card.keywords[1]}</h4>
      </div>
      <div>
        <img className="rev" src={url} alt={card.name} />
        <h3>Meaning Reversed</h3>
        <h4>{card.keywords[2]}, {card.keywords[3]}</h4>
      </div>
      </div>
      <button className="go-back" onClick={() => history.goBack()}>Go Back</button>
      </section>
    </>
  )
}

export default TarotInfo
