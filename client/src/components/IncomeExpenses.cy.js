import React from 'react'
import { IncomeExpenses } from './IncomeExpenses'

describe('<IncomeExpenses />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<IncomeExpenses />)
  })
})