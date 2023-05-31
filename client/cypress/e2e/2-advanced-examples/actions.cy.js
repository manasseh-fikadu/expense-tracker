/* eslint-disable no-undef */
/// <reference types="cypress" />

import { slowCypressDown } from 'cypress-slow-down'

slowCypressDown(100)

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('type into a DOM element', () => {
    // https://on.cypress.io/type
    cy.get('.case')
      .type('salary').should('have.value', 'salary')

    cy.get('.amt')
      .type('1000').should('have.value', '01000')
  })

  it('.clear() - clears an input or textarea element', () => {
    // https://on.cypress.io/clear
    cy.get('.case').type('Clear this text')
      .should('have.value', 'Clear this text')
      .clear()
      .should('have.value', '')
  })
})
