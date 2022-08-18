/*
    Test suite to verify the administrator has the appropriate access when logged in
*/

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})


describe("Validate Administrator login", () => {
    beforeEach(() => {
        cy.fixture("users").then((credentials) => {
            cy.login(credentials.administrator.username, credentials.administrator.password);
        })
    })

    it("Login with valid credentials, check if the admin can edit a blog post.", () => {
        //login is implicit because of the beforeEach for this test file
        //a logout here will run the login, and then log out
        cy.get('#blogLink').click();
        cy.get('.fa-edit').should('be.visible')
        cy.logout()
    })
})