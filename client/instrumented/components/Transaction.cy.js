import React from 'react'
import { Transaction } from './Transaction'

describe('<Transaction />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Transaction />)
  })
})