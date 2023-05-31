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


// cypress/integration/user_api.spec.js

describe("User API", () => {
  beforeEach(() => {
    cy.intercept("GET", "/api/v1/users", {
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

    cy.intercept("GET", "/api/v1/users/1", {
      statusCode: 200,
      body: {
        success: true,
        count: 1,
        data: { _id: "1", name: "John Doe", email: "john.doe@example.com" },
      },
    });

    cy.intercept("POST", "/api/v1/users", {
      statusCode: 201,
      body: {
        success: true,
        data: { _id: "3", name: "New User", email: "new.user@example.com" },
      },
    });
  });

  it("gets all users", () => {
    cy.request("GET", "/api/v1/users").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.success).to.eq(true);
      expect(response.body.count).to.eq(2);
      expect(response.body.data).to.have.length(2);
    });
  });

  it("gets a user by ID", () => {
    cy.request("GET", "/api/v1/users/1").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.success).to.eq(true);
      expect(response.body.count).to.eq(1);
      expect(response.body.data).to.deep.equal({
        _id: "1",
        name: "John Doe",
        email: "john.doe@example.com",
      });
    });
  });

  it("adds a new user", () => {
    const newUser = {
      name: "New User",
      email: "new.user@example.com",
    };

    cy.request("POST", "/api/v1/users", newUser).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.success).to.eq(true);
      expect(response.body.data).to.deep.include(newUser);
    });
  });
});
