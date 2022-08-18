// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", ($username, $password) => {
    cy.visit("/");
    cy.get("#loginLink").click()
    cy.get("#userName").type($username)
    cy.get("#exampleInputPassword1").type($password).wait(200)
    cy.get('#loginButton').wait(200).click()

})

Cypress.Commands.add("logout", () => {
    cy.get('#logoutLink').click()

    //verify we're logged out by checking for the alert
    cy.get('.alert').contains("You are now logged out.")
})
