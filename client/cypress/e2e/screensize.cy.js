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
        cy.viewport(320, 568);
        cy.wait(1000);
        cy.viewport(375, 667);
        cy.wait(1000);
        cy.viewport(768, 1024);
        cy.wait(1000);
        cy.viewport(1024, 1366);
        cy.wait(1000);
        cy.viewport(1280, 800);
        cy.wait(1000);
        cy.viewport(1440, 900);
        cy.wait(1000);
        cy.viewport(1920, 1080);
        cy.wait(1000);
    });
    }
);