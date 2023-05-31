/* eslint-disable no-undef */
// test the app for different screen sizes
//
// npm run cypress:open

import { slowCypressDown } from 'cypress-slow-down'

slowCypressDown(100)

describe('Test the app for different screen sizes', () => {
    it('Test the app for different screen sizes', () => {
        cy.visit('http://localhost:3000');
        cy.viewport(320, 480);
        cy.wait(1000);
        // check if the text is present
        cy.get('.balance').should('have.text', 'Your Balance')
        // check the add new transaction form
        cy.get('.transaction').should('have.text', 'Add new transaction')
        cy.get('.textlab').should('have.text', 'Text')
        // insert the input text 'Salary' and insert the input amount '1000'
        cy.get('.case').type('Salary')
        // persist the text
        cy.get('.case').should('have.value', 'Salary')
        // remove the value 0 from the input field initially and insert the value +1000
        cy.get('.amt').clear().type('+1000')
        cy.viewport(320, 568);
        cy.wait(1000);
                // check if the text is present
                cy.get('.balance').should('have.text', 'Your Balance')
                // check the add new transaction form
                cy.get('.transaction').should('have.text', 'Add new transaction')
                cy.get('.textlab').should('have.text', 'Text')
                // insert the input text 'Salary' and insert the input amount '1000'
                cy.get('.case').type('Salary')
                // persist the text
                cy.get('.case').should('have.value', 'Salary')
                // remove the value 0 from the input field initially and insert the value +1000
                cy.get('.amt').clear().type('+1000')
        cy.viewport(375, 667);
        cy.wait(1000);
                // check if the text is present
                cy.get('.balance').should('have.text', 'Your Balance')
                // check the add new transaction form
                cy.get('.transaction').should('have.text', 'Add new transaction')
                cy.get('.textlab').should('have.text', 'Text')
                // insert the input text 'Salary' and insert the input amount '1000'
                cy.get('.case').type('Salary')
                // persist the text
                cy.get('.case').should('have.value', 'Salary')
                // remove the value 0 from the input field initially and insert the value +1000
                cy.get('.amt').clear().type('+1000')
        cy.viewport(768, 1024);
        cy.wait(1000);
                // check if the text is present
                cy.get('.balance').should('have.text', 'Your Balance')
                // check the add new transaction form
                cy.get('.transaction').should('have.text', 'Add new transaction')
                cy.get('.textlab').should('have.text', 'Text')
                // insert the input text 'Salary' and insert the input amount '1000'
                cy.get('.case').type('Salary')
                // persist the text
                cy.get('.case').should('have.value', 'Salary')
                // remove the value 0 from the input field initially and insert the value +1000
                cy.get('.amt').clear().type('+1000')
        cy.viewport(1024, 1366);
        cy.wait(1000);
                // check if the text is present
                cy.get('.balance').should('have.text', 'Your Balance')
                // check the add new transaction form
                cy.get('.transaction').should('have.text', 'Add new transaction')
                cy.get('.textlab').should('have.text', 'Text')
                // insert the input text 'Salary' and insert the input amount '1000'
                cy.get('.case').type('Salary')
                // persist the text
                cy.get('.case').should('have.value', 'Salary')
                // remove the value 0 from the input field initially and insert the value +1000
                cy.get('.amt').clear().type('+1000')
        cy.viewport(1280, 800);
        cy.wait(1000);
                // check if the text is present
                cy.get('.balance').should('have.text', 'Your Balance')
                // check the add new transaction form
                cy.get('.transaction').should('have.text', 'Add new transaction')
                cy.get('.textlab').should('have.text', 'Text')
                // insert the input text 'Salary' and insert the input amount '1000'
                cy.get('.case').type('Salary')
                // persist the text
                cy.get('.case').should('have.value', 'Salary')
                // remove the value 0 from the input field initially and insert the value +1000
                cy.get('.amt').clear().type('+1000')
        cy.viewport(1440, 900);
        cy.wait(1000);
                // check if the text is present
                cy.get('.balance').should('have.text', 'Your Balance')
                // check the add new transaction form
                cy.get('.transaction').should('have.text', 'Add new transaction')
                cy.get('.textlab').should('have.text', 'Text')
                // insert the input text 'Salary' and insert the input amount '1000'
                cy.get('.case').type('Salary')
                // persist the text
                cy.get('.case').should('have.value', 'Salary')
                // remove the value 0 from the input field initially and insert the value +1000
                cy.get('.amt').clear().type('+1000')
        cy.viewport(1920, 1080);
        cy.wait(1000);
                // check if the text is present
                cy.get('.balance').should('have.text', 'Your Balance')
                // check the add new transaction form
                cy.get('.transaction').should('have.text', 'Add new transaction')
                cy.get('.textlab').should('have.text', 'Text')
                // insert the input text 'Salary' and insert the input amount '1000'
                cy.get('.case').type('Salary')
                // persist the text
                cy.get('.case').should('have.value', 'Salary')
                // remove the value 0 from the input field initially and insert the value +1000
                cy.get('.amt').clear().type('+1000')
    });
    }
);