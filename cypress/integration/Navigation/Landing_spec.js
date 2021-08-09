describe('Landing Page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.intercept("https://powerful-fjord-58193.herokuapp.com/https://api.nomics.com/v1/currencies/ticker?key=39882e2a6e59afede70e88be7f53e7d7ed14b4c0", {fixture: 'cryptos.json'})
    cy.intercept('https://cryptarot-api.herokuapp.com/api/v1/cards', {fixture: 'cards.json'})
    cy.intercept('https://cryptarot-api.herokuapp.com/api/v1/daily', {fixture: 'cardOfDay.json'})
    cy.intercept('https://cryptarot-api.herokuapp.com/api/v1/results', {fixture: 'results.json'})
  });

  it('User should see a header with the name of the app upon page load', () => {
    cy.get('header').contains('CRYPTAROT')
  })

  it('User should see navigation links in header that takes them to various site routes', () => {
    cy.get('header').get('a:nth-of-type(1)').contains('Get a Reading')
    cy.get('header').get('a:nth-of-type(2)').contains('View Cryptos')
    cy.get('header').get('a:nth-of-type(3)').contains('View Tarot')
  })
})
