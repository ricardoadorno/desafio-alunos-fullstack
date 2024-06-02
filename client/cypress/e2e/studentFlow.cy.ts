// https://on.cypress.io/api

import { faker } from '@faker-js/faker/locale/pt_BR'

describe('Tests the student feature', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  const mockStudent = {
    name: faker.person.firstName(),
    cpf: faker.string.numeric(11),
    email: faker.internet.email()
  }

  it('should create a student', () => {
    cy.getByTestId('add-button').click()

    cy.getByTestId('name-create-input').type(mockStudent.name)
    cy.getByTestId('cpf-create-input').type(mockStudent.cpf)
    cy.getByTestId('email-create-input').type(mockStudent.email)

    cy.getByTestId('cofirm-add-button').click()

    cy.getToastFeeback().contains('Student created successfully')
  })

  it('should find student using the filter', () => {
    cy.getByTestId('name-filter-input').type(mockStudent.name)

    cy.getByTestId('search-button').click()

    cy.getByTestId('students-cards-list').children().contains(mockStudent.name)
  })

  it('should edit the student', () => {
    cy.getByTestId('name-filter-input').type(mockStudent.name)

    cy.getByTestId('search-button').click()

    cy.getByTestId('students-cards-list')
      .children()
      .contains(mockStudent.name)
      .parent()
      .getByTestId('edit-button')
      .click()

    cy.getByTestId('name-edit-input').clear().type(`${mockStudent.name} edited`)

    cy.getByTestId('confirm-edit-button').click()

    cy.getToastFeeback().contains('Student updated successfully')
  })

  it('shouid delete the student', () => {
    cy.getByTestId('name-filter-input').type(mockStudent.name)

    cy.getByTestId('search-button').click()

    cy.getByTestId('students-cards-list')
      .children()
      .contains(mockStudent.name)
      .parent()
      .getByTestId('generic-modal-button')
      .click()

    cy.getByTestId('confirm-generic-modal-button').click()

    cy.getToastFeeback().contains('Student deleted successfully')
  })

  it('filter should not find student and throw message', () => {
    cy.getByTestId('name-filter-input').type(mockStudent.cpf)

    cy.getByTestId('search-button').click()

    cy.getToastFeeback().contains('No students found')
  })
})
