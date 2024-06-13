///<reference types="Cypress" />
describe("Verify radio buttons via webdriveruni", () => {
    beforeEach(function() {
        cy.visit('https://www.webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
    })

    it("Check and validate radio buttons", () => {
        //cypress code
        // cy.visit('https://www.webdriveruniversity.com')
        // cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()

        cy.get('#radio-buttons').find("[type='radio']").first().check()
        cy.get('#radio-buttons').find("[type='radio']").eq(2).check()
    });

    it("Check and validate radio buttons are enabled or disabled", () => {
        //cypress code
        // cy.visit('https://www.webdriveruniversity.com')
        // cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()

        cy.get('[value="lettuce"]').check().should('be.enabled')
        cy.get('[value="cabbage"]').should('be.disabled')
    });
})