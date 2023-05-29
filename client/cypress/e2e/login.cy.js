// login to the app and check if the user is redirected to the home page

/* eslint-disable no-undef */
/// <reference types="cypress" />

// import { slowCypressDown } from 'cypress-slow-down'

// slowCypressDown()

describe("Login to the app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
  });

  it('displays "Username or email address"', () => {
    cy.get(".username").type("minase");
    cy.get(".username").should("have.text", "");
  });

  it('displays "Password"', () => {
    cy.get(".password1").type("minase");
    cy.get(".password1").should("have.text", "");
  });

  // click the login button
  it("inserts username and password and clicks the button", () => {
    cy.get(".username").type("minase");
    cy.get(".password1").type("minase");
    cy.get(".sub_btn").click();
    cy.url().should("include", "first_name");
  });

  it("should contain the appropriate form fields", () => {
    cy.get('input[name="first_name"]').should("exist");
    cy.get('input[name="password"]').should("exist");
    cy.get('button[type="submit"]').should("exist");
  });

  it("should allow users to sign in", () => {
    cy.get('input[name="first_name"]').type("testuser");
    cy.get('input[name="password"]').type("testpassword");
    cy.get('button[type="submit"]').click();
  });

  it("should navigate to the registration page when the link is clicked", () => {
    cy.contains("Create an account").click();
    cy.url().should("include", "/register");
  });

  it("should navigate to the homepage when the link is clicked", () => {
    cy.contains("Back to Homepage").click();
    cy.url().should("eq", "http://localhost:3000/");
  });
});
