import userData from '../fixtures/userData.json';

describe('Signup and Login Tests', () => {
  beforeEach('visit homepage' , () => {
    cy.visit('https://www.automationexercise.com');
    cy.get('body').should('be.visible');
  });

  it('Test Case 1: Register User', () => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('.signup-form > h2').should("contain", userData.signupForm);
    cy.get('[data-qa="signup-name"]').type(userData.name);
    cy.get('[data-qa="signup-email"]').type(userData.email);
    cy.get('[data-qa="signup-button"]').click();
    cy.get('#id_gender1').check();
    cy.get('[data-qa="password"]').type(userData.password);
    cy.get('[data-qa="days"]').select(userData.days);
    cy.get('[data-qa="months"]').select(userData.months);
    cy.get('[data-qa="years"]').select(userData.years);
    cy.get('#newsletter').check();
    cy.get('#optin').check();
    cy.get('[data-qa="first_name"]').type(userData.firstName);
    cy.get('[data-qa="last_name"]').type(userData.lastName);
    cy.get('[data-qa="company"]').type(userData.company);
    cy.get('[data-qa="address"]').type(userData.address);
    cy.get('[data-qa="address2"]').type(userData.address2);
    cy.get('[data-qa="country"]').select(userData.country);
    cy.get('[data-qa="state"]').type(userData.state);
    cy.get('[data-qa="city"]').type(userData.city);
    cy.get('[data-qa="zipcode"]').type(userData.zipcode);
    cy.get('[data-qa="mobile_number"]').type(userData.mobileNumber);
    cy.get('[data-qa="create-account"]').click();
    cy.get('b').should("have.text", userData.acc);
    cy.get('[data-qa="continue-button"]').click();
    cy.get(':nth-child(10) > a').should("contain", userData.logged);
  });

  it('Test Case 2: Login with correct credentials', () => {
    cy.login(userData.email, userData.password);
    cy.get(':nth-child(10) > a').should("contain", userData.logged);

  });

  it('Test Case 3: Login with incorrect credentials', () => {
    cy.login("wrong@email.com", "wrongpass123");
    cy.get('.login-form > form > p').should("have.text", userData.incorrect);
  });
});