describe('Error Handling', () => {

  beforeEach(() => {
    cy.intercept("https://powerful-fjord-58193.herokuapp.com/https://api.nomics.com/v1/currencies/ticker?key=39882e2a6e59afede70e88be7f53e7d7ed14b4c0", {fixture: 'cryptos.json'})
    cy.intercept('https://cryptarot-api.herokuapp.com/api/v1/cards', {fixture: 'cards.json', statusCode: 500})
    cy.intercept('https://cryptarot-api.herokuapp.com/api/v1/daily', {fixture: 'cardOfDay.json', statusCode: 500})
    cy.intercept('https://cryptarot-api.herokuapp.com/api/v1/results', {statusCode: 500})
  });

  it('User should see an error if server responds with 500 error code when navigating to the tarot', () => {
    cy.visit('http://localhost:3000/tarot');
    cy.contains('servers might be experiencing some issues');
  });

  it('User should see an error if server responds with 500 error code when navigating to get a reading', () => {
    cy.visit('http://localhost:3000/pick');
    cy.contains('servers might be experiencing some issues');
  });

  it('User should see an error if server responds with 500 error code when navigating to the cryptos', () => {
    cy.visit('http://localhost:3000/cryptos');
    cy.contains('servers might be experiencing some issues');
  });
});
