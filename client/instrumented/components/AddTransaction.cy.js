import React from 'react'
import { AddTransaction } from './AddTransaction'

describe('<AddTransaction />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AddTransaction />)
  })
})