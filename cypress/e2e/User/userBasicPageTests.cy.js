Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe("Verify navigation to basic pages", () => {
    it("Navigate to home and verify the page renders.", () => {
        cy.visit("/");
        
        cy.get('.featurette-heading').should("have.text", "Military Strength Encryption. The firepower to protect your transactions.");
    })

    it("Navigate to the privacy policy.", () => {
        cy.visit("/");
        cy.get('#privacyLink').click();
        cy.get('#privacyText').contains("All personal information submitted through the registration form, or other means, will not be shared with or sold to third parties.");
    });
});