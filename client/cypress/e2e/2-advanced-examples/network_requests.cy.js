/* eslint-disable no-undef */
/// <reference types="cypress" />

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
