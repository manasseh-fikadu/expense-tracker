/* eslint-disable no-undef */
/// <reference types="cypress" />

import { slowCypressDown } from 'cypress-slow-down'

slowCypressDown(100)

context('Network Requests', () => {
  describe('Transactions API', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  
    it('should get all transactions', () => {
      cy.request('GET', '/api/v1/transactions').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('success', true);
        expect(response.body).to.have.property('count');
        expect(response.body).to.have.property('data');
        expect(response.body.data).to.be.an('array');
      });
    });
  
    it('should add a transaction', () => {
      cy.request('POST', '/api/v1/transactions', {
        text: 'Test Transaction',
        amount: 100
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('success', true);
        expect(response.body).to.have.property('data');
        expect(response.body.data).to.have.property('text', 'Test Transaction');
        expect(response.body.data).to.have.property('amount', 100);
      });
    });
  
    it('should delete a transaction', () => {
      // First, add a test transaction
      cy.request('POST', '/api/v1/transactions', {
        text: 'Test Transaction',
        amount: 100
      }).then((addResponse) =>{
        const transactionId = addResponse.body.data._id;
  
        // Then, delete the test transaction
        cy.request('DELETE', `/api/v1/transactions/${transactionId}`).then((deleteResponse) => {
          expect(deleteResponse.status).to.eq(200);
          expect(deleteResponse.body).to.have.property('success', true);
          expect(deleteResponse.body).to.have.property('data');
          // eslint-disable-next-line no-unused-expressions
          expect(deleteResponse.body.data).to.be.empty;
        });
      });
    });
  });
})


// cypress/integration/user_api_mock.spec.js

describe("User API (Mocked)", () => {
  beforeEach(() => {
    cy.intercept("GET", "/api/v1/transactions", {
      statusCode: 200,
      body: {
        success: true,
        count: 2,
        data: [
          { _id: "1", name: "John Doe", email: "john.doe@example.com" },
          { _id: "2", name: "Jane Doe", email: "jane.doe@example.com" },
        ],
      },
    });

    cy.intercept("GET", "/api/v1/transactions/1", {
      statusCode: 200,
      body: {
        success: true,
        count: 1,
        data: { _id: "1", name: "John Doe", email: "john.doe@example.com" },
      },
    });

    cy.intercept("POST", "/api/v1/transactions", {
      statusCode: 201,
      body: {
        success: true,
        data: { _id: "3", name: "New User", email: "new.user@example.com" },
      },
    });
  });

  it("gets all users (mocked)", () => {
    cy.intercept("GET", "/api/v1/transactions").then((response) => {
    });
  });

  it("gets a user by ID (mocked)", () => {
    cy.intercept("GET", "/api/v1/transactions/1").then((response) => {
    });
  });

  it("adds a new user (mocked)", () => {
    const newUser = {
      name: "New User",
      email: "new.user@example.com",
    };

    cy.intercept("POST", "/api/v1/transactions", newUser).then((response) => {});
  });

  afterEach(() => {
    cy.visit("http://localhost:3000");
  }
  );
});
