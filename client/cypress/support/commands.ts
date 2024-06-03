Cypress.Commands.add('getByTestId', (testId) => {
  return cy.get(`[data-testid=${testId}]`)
})

Cypress.Commands.add('getToastFeeback', () => {
  return cy.get(`.v-toast__text`)
})
