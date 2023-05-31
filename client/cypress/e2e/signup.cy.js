/* eslint-disable no-undef */
/// <reference types="cypress" />

// import { slowCypressDown } from 'cypress-slow-down'

// slowCypressDown()

// cypress/integration/sign_up_page.spec.js

describe("SignUpPage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/register");
  });

  it("renders the sign-up form", () => {
    cy.get("form").should("exist");
    cy.get("input[name='first_name']").should("exist");
    cy.get("input[name='email']").should("exist");
    cy.get("input[name='password']").should("exist");
    cy.get("button[type='submit']").should("exist");
  });

  it("submits the sign-up form with valid data", () => {
    cy.get("input[name='first_name']").type("John Doe");
    cy.get("input[name='email']").type("john.doe@example.com");
    cy.get("input[name='password']").type("password123");
    cy.get("button[type='submit']").click();

    // Check if the user is redirected to the homepage after successful registration
    cy.url().should("eq", "http://localhost:3000/");

    it("should contain the appropriate form fields", () => {
      cy.get('input[name="first_name"]').should("exist");
      cy.get('input[name="email"]').should("exist");
      cy.get('input[name="password"]').should("exist");
      cy.get('button[type="submit"]').should("exist");
    });

    it("should store user data in local storage when the form is submitted", () => {
      cy.get('input[name="first_name"]').type("testuser");
      cy.get('input[name="email"]').type("testuser@example.com");
      cy.get('input[name="password"]').type("Testpassword1");
    });

    it("should display an error message if anemail address is invalid", () => {
      cy.get('input[name="email"]').type("invalid-email-address");
      cy.get('button[type="submit"]').click();
      cy.on("window:alert", (str) => {
        expect(str).to.equal("Invalid email address");
      });
    });

    it("should display an error message if the password is invalid", () => {
      cy.get('input[name="password"]').type("invalidpassword");
      cy.get('button[type="submit"]').click();
      cy.on("window:alert", (str) => {
        expect(str).to.equal(
          "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter and one number"
        );
      });
    });

    it("should navigate to the homepage when the link is clicked", () => {
      cy.contains("Back to Homepage").click();
      cy.url().should("eq", "http://localhost:3000/");
    });
  });
});

//
// });
