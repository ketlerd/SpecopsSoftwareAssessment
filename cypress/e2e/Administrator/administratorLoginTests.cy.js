/*
    Test suite to verify login/logout functionality for administrators
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

    it("Attempt to login with valid credentials, then logout.", () => {
        //login is implicit because of the beforeEach for this test file
        //a logout here will run the login, and then log out

        cy.logout()
    })
})


describe("Validate invalid login", () => {
    it("Attempt to login with invalid password", () => {
        cy.fixture("users").then((credentials) => {
            cy.login(credentials.administrator.username, "someInvalidPassword");
        })
        
        //if the username field is still visible, the login failed
        cy.get('#userName').should('be.visible')
    })

    it("Attempt to login with an invalid username.", () => {
        cy.fixture("users").then((credentials) => {
            cy.login("someUsername", credentials.administrator.password)
        })

        //if the username field is still visible, the login failed
        cy.get('#userName').should('be.visible')
    })

})