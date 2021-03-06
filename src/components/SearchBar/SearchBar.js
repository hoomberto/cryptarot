import PropTypes from 'prop-types'
import './SearchBar.css'
const SearchBar = ({query, set}) => {

  const handleSubmit = event => {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={query}
        placeholder="Search for a currency"
        onChange={event => set(event.target.value)}
      />
    </form>
  )
}

export default SearchBar

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  set: PropTypes.func.isRequired
}
