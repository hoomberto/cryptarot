const getCards = () => {
  return fetch('http://localhost:3006/')
    .then(checkResponse)
}

const checkResponse = response => {
  if (!response.ok) {
    throw new Error("Request could not go through")
  }
  return response.json()
}

export { getCards }
