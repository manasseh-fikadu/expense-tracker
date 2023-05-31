// login to the app and check if the user is redirected to the home page

/* eslint-disable no-undef */
/// <reference types="cypress" />

import { slowCypressDown } from 'cypress-slow-down'

slowCypressDown(100)

describe("Login to the app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
  });

  it("renders the sign-in form", () => {
    cy.get("form").should("exist");
    cy.get("input[name='first_name']").should("exist");
    cy.get("input[name='password']").should("exist");
    cy.get("button[type='submit']").should("exist");
  });

  it("submits the sign-in form with valid data", () => {
    // Replace the following values with valid credentials for your application
    cy.get("input[name='first_name']").type("username_or_email");
    cy.get("input[name='password']").type("password");
    cy.get("button[type='submit']").click();

    // Check if the user is redirected to the homepage after successful login
    cy.url().should("eq", "http://localhost:3000/");

    // Add any additional assertions to verify successful login, e.g., checking for a success message or checking if the user is logged in
  });

  it("navigates back to the homepage", () => {
    cy.get("a[href='/']").click();
    cy.url().should("eq", "http://localhost:3000/");
  });

  it('displays "Username or email address"', () => {
    cy.get(".username").type("minase");
    cy.get(".username").should("have.text", "");
  });

  it('displays "Password"', () => {
    cy.get(".password1").type("minase");
    cy.get(".password1").should("have.text", "");
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
