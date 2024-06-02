// https://on.cypress.io/api

describe('App View Test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Has the correct title', () => {
    cy.getByTestId('header-title').contains('Students API')
  })
})
