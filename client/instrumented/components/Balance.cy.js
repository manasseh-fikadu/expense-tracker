import React from 'react'
import { Balance } from './Balance'

describe('<Balance />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Balance />)
  })
})