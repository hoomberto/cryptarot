describe('Cryptos / CryptosInfo components', () => {

  beforeEach(() => {
    cy.intercept("https://powerful-fjord-58193.herokuapp.com/https://api.nomics.com/v1/currencies/ticker?key=39882e2a6e59afede70e88be7f53e7d7ed14b4c0", {fixture: 'cryptos.json'})
    cy.intercept('https://cryptarot-api.herokuapp.com/api/v1/cards', {fixture: 'cards.json'})
    cy.intercept('https://cryptarot-api.herokuapp.com/api/v1/daily', {fixture: 'cardOfDay.json'})
    cy.intercept('https://cryptarot-api.herokuapp.com/api/v1/results', {fixture: 'results.json'})
    cy.visit('http://localhost:3000/cryptos');
  });

  it('User should see a table displaying cryptos information from API', () => {
    cy.get('table').find('td').contains('Bitcoin')
  })

  it('User can search for currencies by name or symbol', () => {
    cy.get('input').type('Bitcoin')
    cy.get('table').find('td').contains('Bitcoin')
  })

  it('User is presented with message asking them to try a different result if there are no matches', () => {
    cy.get('input').type('asdf')
    cy.contains("No results found - please try another search")
  })

  it('User should be able to view more information about a currency by clicking it\'s "More Info" button', () => {
    cy.get("#BTC").click()
    cy.url().should('contain', 'cryptos/BTC')
  })

  it('Single Crypto page should have information regarding currency\'s first trade date and time', () => {
    cy.get("#BTC").click()
    cy.get("#firstTrade").contains('August 17, 2011 6:00 PM')
  })

  it('User can go back to cryptos page from CryptoInfo page by clcking View All Cryptos button', () => {
    cy.get("#BTC").click()
    cy.url().should('contain', 'cryptos/BTC')
    cy.get('#viewAllCryptos').click()
    cy.url().should('eq', 'http://localhost:3000/cryptos')
  })

  it('User can go back to home landing page via Go Back button', () => {
    cy.url().should('eq', 'http://localhost:3000/cryptos')
    cy.get("#backHomeFromCryptos").click()
    cy.url().should('eq', 'http://localhost:3000/')
  })

})
