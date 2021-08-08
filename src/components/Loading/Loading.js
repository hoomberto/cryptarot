import './Loading.css'

const Loading = ({image, message}) => {
  return (
    <div className="loading">
      <h2>{message}</h2>
      <img src={image} className="rotating" alt="loading" />
    </div>
  )
}

export default Loading
