import './Loading.css'
import PropTypes from 'prop-types'

const Loading = ({image, message}) => {
  return (
    <div className="loading">
      <h2>{message}</h2>
      <img src={image} className="rotating" alt="loading" />
    </div>
  )
}

export default Loading

Loading.propTypes = {
  image: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
}
