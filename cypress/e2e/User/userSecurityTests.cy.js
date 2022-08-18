/*
    Test suite to verify the security of the system
    Ensure users cannot access higher-privilege functions
    Both authenticated users (newly registered) and Unauthenticated access
*/

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe("Tests for a standard user account.", () => {
    it("Attempt to edit a blog post while not logged in", () => {
        cy.visit('/home/blog')

        //verify an unauthenticated user cannot access the edit page
        cy.get('#editBlog_4').should('not.exist')

    })

    it("Attempt to add a blog post while not logged in", () => {
        cy.visit('/home/blog')

        //verify an unauthenticated user cannot access the add page
        cy.get('#addBlogPostLink').should('not.exist')
    })

    it("Attempt to edit a blog post while logged in as a standard user.", () => {
        cy.fixture("users").then((credentials) => {
            cy.login(credentials.standardUser.username, credentials.standardUser.password);
        })

        //verify the user successfully logged in
        cy.get('#logoutLink').should('be.visible')
        cy.visit('/home/blog')

        //verify an unauthenticated user cannot access the edit page
        cy.get('#editBlog_4').should('not.exist')
    })

    it("Attempt to add a blog post while logged in as a standard user.", () => {
        cy.fixture("users").then((credentials) => {
            cy.login(credentials.standardUser.username, credentials.standardUser.password);
        })

        //verify the user successfully logged in
        cy.get('#logoutLink').should('be.visible')
        cy.visit('/home/blog')

        //verify an unauthenticated user cannot access the add page
        cy.get('#addBlogPostLink').should('not.exist')
    })
})