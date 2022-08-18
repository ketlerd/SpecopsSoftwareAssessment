/*
    Test suite to verify login/logout functionality for administrators
*/

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})


describe("Validate invalid login", () => {
    it("Attempt to login with invalid password", () => {
        cy.fixture("users").then((credentials) => {
            cy.login(credentials.standardUser.username, "someInvalidPassword");
        })
        
        //if the username field is still visible, the login failed
        cy.get('#userName').should('be.visible')
    })

    it("Attempt to login with an invalid username.", () => {
        cy.fixture("users").then((credentials) => {
            cy.login("someUsername", credentials.standardUser.password)
        })

        //if the username field is still visible, the login failed
        cy.get('#userName').should('be.visible')
    })

})