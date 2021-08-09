describe('Landing Component', () => {

  beforeEach(() => {
    cy.intercept("https://powerful-fjord-58193.herokuapp.com/https://api.nomics.com/v1/currencies/ticker?key=39882e2a6e59afede70e88be7f53e7d7ed14b4c0", {fixture: 'cryptos.json'})
    cy.intercept('https://cryptarot-api.herokuapp.com/api/v1/cards', {fixture: 'cards.json'})
    cy.intercept('https://cryptarot-api.herokuapp.com/api/v1/daily', {fixture: 'cardOfDay.json'})
    cy.intercept('https://cryptarot-api.herokuapp.com/api/v1/results', {fixture: 'results.json'})
    cy.visit('http://localhost:3000');
  });

  it('User should see a header with the name of the app upon page load', () => {
    cy.get('header').contains('CRYPTAROT')
  })

  it('User should see navigation links in header', () => {
    cy.get('header').get('a:nth-of-type(1)').contains('Get a Reading')
    cy.get('header').get('a:nth-of-type(2)').contains('View Cryptos')
    cy.get('header').get('a:nth-of-type(3)').contains('View Tarot')
  })

  it('User should see buttons that reflect navigation links in header', () => {
    cy.get('.main-links-ctr').get('a:nth-of-type(1)').get('button').contains('Get a Reading')
    cy.get('.main-links-ctr').get('a:nth-of-type(2)').get('button').contains('View Cryptos')
    cy.get('.main-links-ctr').get('a:nth-of-type(3)').get('button').contains('View Tarot')
  });

  it('User should see Card of Day component that displays a card image, title, and description', () => {
    cy.get('.cod-title').contains('Card of the Day')
    cy.get('.card-of-day-ctr').get('img')
    cy.get('.card-of-day-ctr').get('img')
    cy.get('.main-links-ctr').get('a:nth-of-type(3)').get('button').contains('View Tarot')
  })

})
