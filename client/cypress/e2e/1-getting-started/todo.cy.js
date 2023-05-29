/* eslint-disable no-undef */
/// <reference types="cypress" />

// import { slowCypressDown } from 'cypress-slow-down'

// slowCypressDown()

describe('Expense tracker app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('displays "Your Balance"', () => {
    // check if the text is present
    cy.get('.balance').should('have.text', 'Your Balance')
  })

  // check the add new transaction form
  it('displays "Add new transaction"', () => {
    cy.get('.transaction').should('have.text', 'Add new transaction')
  })

  it('displays "Text"', () => {
    cy.get('.textlab').should('have.text', 'Text')
  })

  describe('Checking form input (Income)', () => {
    // insert the input text 'Salary' and insert the input amount '1000'
    it('inserts text, amount, and clicks the button', () => {
      cy.get('.case').type('Salary')
      // persist the text
      cy.get('.case').should('have.value', 'Salary')
      // remove the value 0 from the input field initially and insert the value +1000
      cy.get('.amt').clear().type(+1000)
      cy.get('.btn').click()

      //income should have increased by 1000
      cy.get('.income').should('have.text', 'Income')
      // // check if there is a achange in the display of the income
      // cy.get('.money-plus').should('have.text', '$1,000.00')
    })
  })

  describe('Checking form input (Expense)', () => {
    // insert the input text 'Salary' and insert the input amount '1000'
    it('inserts text, amount, and clicks the button', () => {
      cy.get('.case').type('Food')
      // persist the text
      cy.get('.case').should('have.value', 'Food')
      cy.get('.amt').clear().type('-100')
      cy.get('.btn').click()
    })
  })

  // when delete button is clicked, the transaction should be deleted
  describe('Checking delete button', () => {
    it('clicks the delete button', () => {
      cy.get('.delete-btn').click({ multiple: true})
    })
  })
}) 

