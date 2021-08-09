describe('Landing Page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.intercept("https://powerful-fjord-58193.herokuapp.com/https://api.nomics.com/v1/currencies/ticker?key=39882e2a6e59afede70e88be7f53e7d7ed14b4c0")
    cy.intercept('https://cryptarot-api.herokuapp.com/api/v1/cards')
    cy.intercept('https://cryptarot-api.herokuapp.com/api/v1/daily')
    cy.intercept('https://cryptarot-api.herokuapp.com/api/v1/results')
  });
  
  it('User should see a header with the name of the app upon page load', () => {
    cy.get('header').contains('CRYPTAROT')
  })
})
