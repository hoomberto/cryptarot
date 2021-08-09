describe('Results', () => {

  beforeEach(() => {
    cy.intercept("https://powerful-fjord-58193.herokuapp.com/https://api.nomics.com/v1/currencies/ticker?key=39882e2a6e59afede70e88be7f53e7d7ed14b4c0", {fixture: 'cryptos.json'})
    cy.intercept('https://cryptarot-api.herokuapp.com/api/v1/cards', {fixture: 'cards.json'})
    cy.intercept('https://cryptarot-api.herokuapp.com/api/v1/daily', {fixture: 'cardOfDay.json'})
    cy.intercept('https://cryptarot-api.herokuapp.com/api/v1/results', {fixture: 'results.json'})
    cy.visit('http://localhost:3000/pick');
    cy.performReading()
  });

  it('User should see a tagline of the results of their reading', () => {
    let possibleTaglines = [
      "The spirits are very much in your favor!",
      "Avoid at all costs",
      "Manifest your intentions into reality",
      "Do some self reflection"
    ]

    cy.get('.tagline').invoke('text').then(text => {
       expect(possibleTaglines).to.include(text)
    });
  })

  it('User should see a button or buttons that navigate them to the reading-relevant crypto\'s unique page', () => {
    cy.get('#cryptoOne').click()
    cy.url().should('contain', 'BTC')
  })

  it('User should see the card from their reading and be able to click it to visit that card\'s uniqe page', () => {
    cy.get('#resultImg').click()
    cy.url().should('contain', '/tarot/')
  })

  it('User should be able to get a new reading by clicking "Get a New Reading" button', () => {
    cy.get('#newReading').click()
    cy.url().should('contain', '/pick')
    cy.get('.back').click()
    cy.get('.view-results').click()
    cy.url().should('contain', '/pick/results')
  })

  it('User should be able to go back to landing page by clicking "Go Home" button', () => {
    cy.get('#goHome').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })

})
