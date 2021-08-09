describe('AllTarot component', () => {

  beforeEach(() => {
    cy.intercept("https://powerful-fjord-58193.herokuapp.com/https://api.nomics.com/v1/currencies/ticker?key=39882e2a6e59afede70e88be7f53e7d7ed14b4c0", {fixture: 'cryptos.json'})
    cy.intercept('https://cryptarot-api.herokuapp.com/api/v1/cards', {fixture: 'cards.json'})
    cy.intercept('https://cryptarot-api.herokuapp.com/api/v1/daily', {fixture: 'cardOfDay.json'})
    cy.intercept('https://cryptarot-api.herokuapp.com/api/v1/results', {fixture: 'results.json'})
    cy.visit('http://localhost:3000/tarot');
  });

  it('User should see a grid of cards after page loads', () => {
    cy.get('.all-tarot').find('img').should('have.class', 'reverse-single')
  })

  it('User can click a facedown card and reveal the tarot - on initial page visit, grid will start with The Fool ', () => {
    cy.get('#ar00Img').should('have.class', 'reverse-single').click()
    cy.get('#ar00').get('img').should('have.class', 'single-tarot')
  })

  it('User can shuffle and set cards facedown by clicking Shuffle Button', () => {
    cy.get('#ar00Img').should('have.class', 'reverse-single').click()
    cy.get('#ar00').get('img').should('have.class', 'single-tarot')
    cy.get('#ar01Img').should('have.class', 'reverse-single').click()
    cy.get('#ar01').get('img').should('have.class', 'single-tarot')
    cy.get('.shuffle-btn').click()
    cy.get('#ar00Img').should('have.class', 'reverse-single')
    cy.get('#ar01Img').should('have.class', 'reverse-single')
  })

  it('Cards are shuffled after resetting', () => {
    cy.revealTarotAndReset()
    // Cards have a 2/3 chance of being in a different order than initial order
    cy.get('#ar00Img').should('have.class', 'reverse-single').click()
    cy.get('#ar00').get('img').should('have.class', 'single-tarot')
    cy.get('#ar01Img').should('have.class', 'reverse-single').click()
    cy.get('#ar01').get('img').should('have.class', 'single-tarot')
    cy.get('#ar18Img').should('have.class', 'reverse-single').click()
    cy.get('#ar18').get('img').should('have.class', 'single-tarot')
  })

  it('Clicking a revealed card navigates User to SingleTarot component for corresponding card', () => {
    cy.get('#ar00Img').click()
    cy.get('#ar00').click()
    cy.url().should('contain', 'ar00')
  })

  it('User should be able to navigate back to All Tarot component after visiting a Card\'s TarotInfo component', () => {
    cy.get('#ar00Img').click()
    cy.get('#ar00').click()
    cy.url().should('contain', 'ar00')
    cy.get('.go-back').click()
    cy.url().should('eq', 'http://localhost:3000/tarot')
  })

})
