import AuthForm from "./AuthForm";
import { mount } from "cypress/react18";
import { Provider } from "react-redux";
import store from "../../store";

describe("Auth Component", () => {
  beforeEach(() => {
    mount(
      <Provider store={store}>
        <AuthForm />
      </Provider>
    );
  });

  it("renders the login form", () => {
    // Check that the form renders correctly
    cy.get('input[name="username"]').should("exist");
    cy.get('input[name="email"]').should("exist");
    cy.contains("Login").should("exist");
  });

  it('shows validation errors for empty fields', () => {
    // Click the submit button without filling the form
    cy.get('[data-testid="login-button"]').click();

    // Expect validation errors to appear
    cy.contains('Username is required').should('be.visible');
    cy.contains('Email is required').should('be.visible');
  });

  it('shows a validation error for invalid email', () => {
    // Enter a valid username and invalid email
    cy.get('input[name="username"]').type('JohnDoe');
    cy.get('input[name="email"]').type('invalidemail');

    // Click the submit button
    cy.contains('Login').click();

    // Check for invalid email format error
    cy.contains('Invalid email format').should('be.visible');
  });
});
