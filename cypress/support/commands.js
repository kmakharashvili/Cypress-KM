Cypress.Commands.add('login', (email, password) => {
  cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
  cy.get('.login-form > h2').should("have.text", "Login to your account");
  cy.get('[data-qa="login-email"]').type(email);
  cy.get('[data-qa="login-password"]').type(password);
  cy.get('[data-qa="login-button"]').click();
});