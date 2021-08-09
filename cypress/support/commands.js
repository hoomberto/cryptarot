// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('navBarGoTo', (ofType, shouldContain) => {
  cy.get('header').get(`a:nth-of-type(${ofType})`).contains(shouldContain).click()
})

Cypress.Commands.add('performReading', () => {
  cy.get('.back').click()
  cy.get('.view-results').click()
  cy.url().should('contain', '/results')
})


Cypress.Commands.add('revealTarotAndReset', () => {
  cy.get('#ar00Img').click()
  cy.get('#ar01Img').click()
  cy.get('#ar18Img').click()
  cy.get('.shuffle-btn').click()
})
