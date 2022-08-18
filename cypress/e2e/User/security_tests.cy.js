/*
    Test suite to verify the security of the system
    Ensure users cannot access higher-privilege functions
    Both authenticated users (newly registered) and Unauthenticated access
*/

describe("Tests for a standard user account.", () => {
    it("Attempt to edit a blog post", () => {
        cy.visit('/home/blog')

        //verify an unauthenticated user cannot access the edit page
        cy.get('#editBlog_4').should('not.exist')

    })

    it("Attempt to add a blog post", () => {
        cy.visit('/home/blog')

        //verify an unauthenticated user cannot access the add page
        cy.get('#addBlogPostLink').should('not.exist')
    })
})