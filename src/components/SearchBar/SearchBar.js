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
