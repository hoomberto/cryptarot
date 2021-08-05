const SearchBar = ({query, set}) => {

  const handleSubmit = event => {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={query}
        placeholder=""
        onChange={set}
      />
    </form>
  )
}

export default SearchBar
