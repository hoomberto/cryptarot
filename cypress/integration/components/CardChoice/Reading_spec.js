describe('Reading', () => {

  beforeEach(() => {
    cy.intercept("https://powerful-fjord-58193.herokuapp.com/https://api.nomics.com/v1/currencies/ticker?key=39882e2a6e59afede70e88be7f53e7d7ed14b4c0", {fixture: 'cryptos.json'})
    cy.intercept('https://cryptarot-api.herokuapp.com/api/v1/cards', {fixture: 'cards.json'})
    cy.intercept('https://cryptarot-api.herokuapp.com/api/v1/daily', {fixture: 'cardOfDay.json'})
    cy.intercept('https://cryptarot-api.herokuapp.com/api/v1/results', {fixture: 'results.json'})
    cy.visit('http://localhost:3000/pick');
  });

  it('User should see unflipped Card component on visiting page', () => {
    cy.get('img').should('have.class', 'back')
  })

  it('User should see text encouraging them to interact with the Card', () => {
    cy.contains('Touch the card to see your reading')
  })

  it('User should see flipped card upon clicking it', () => {
    cy.get('.back').click()
    cy.get('img').should('have.class', 'front')
  })

  it('User should see a cryptocurrency relevant to the reading upon flipping card', () => {
    cy.get('.back').click()
    cy.contains('Bitcoin')
  })

  it('User should be navigated to their results after flipping card and clicking "View Results"', () => {
    cy.get('.back').click()
    cy.get('img').should('have.class', 'front')
    cy.contains('Bitcoin')
    cy.get('.view-results').click()
    cy.url().should('contain', '/results')
  })
})
