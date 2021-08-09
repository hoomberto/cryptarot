describe('Landing Page Navigation', () => {

  beforeEach(() => {
    cy.intercept("https://powerful-fjord-58193.herokuapp.com/https://api.nomics.com/v1/currencies/ticker?key=39882e2a6e59afede70e88be7f53e7d7ed14b4c0", {fixture: 'cryptos.json'})
    cy.intercept('https://cryptarot-api.herokuapp.com/api/v1/cards', {fixture: 'cards.json'})
    cy.intercept('https://cryptarot-api.herokuapp.com/api/v1/daily', {fixture: 'cardOfDay.json'})
    cy.intercept('https://cryptarot-api.herokuapp.com/api/v1/results', {fixture: 'results.json'})
    cy.visit('http://localhost:3000');
  });

  it('User should be able to click "Get a Reading" link in header to navigate to card reading page', () => {
    cy.navBarGoTo(1, 'Get a Reading')
    cy.url().should('contain', '/pick')
  })

  it('User should be able to click "View Cryptos" link in header to navigate to cryptos page', () => {
    cy.navBarGoTo(2, 'View Cryptos')
    cy.url().should('contain', '/cryptos')
  })

  it('User should be able to click "View Tarot" link in header to navigate to card tarot page', () => {
    cy.navBarGoTo(3, 'View Tarot')
    cy.url().should('contain', '/tarot')
  })

  it('User should be able to return back to landing page after clicking a link and going back in browser', () => {
    let paths = {
      '1': 'Get a Reading',
      '2': 'View Cryptos',
      '3': 'View Tarot'
    }
    for (let key in paths) {
      cy.navBarGoTo(key, paths[key]).go('back')
    }
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('Entering a nonexistent URL returns user to home page', () => {
    cy.visit('http://localhost:3000/asdfjkl')
    cy.wait(500)
    cy.url().should('eq', 'http://localhost:3000/')
  })
})
