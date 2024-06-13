///<reference types="Cypress" />

describe("Verify checkboxes via webdriveruni", () => {
    beforeEach(function () {
        //cy.visit('https://www.webdriveruniversity.com')
        //using custom command
        cy.navigateToWebdrive_HomePage()
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
    })
    it("Check and validate checkboxes", () => {
        //cypress code
        // cy.visit('https://www.webdriveruniversity.com')
        // cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()

        cy.get(':nth-child(7) > input').check()
        cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')
        cy.get('#checkboxes > :nth-child(3)').click()
    
    })

    it("Challenge to uncheck the checkbox", () => {
        //cypress code
        // cy.visit('https://www.webdriveruniversity.com')
        // cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()

        cy.get(':nth-child(5) > input').uncheck().should('not.be.checked')
    
    })

    it("Check multiple checkboxes", () => {
        //cypress code
        // cy.visit('https://www.webdriveruniversity.com')
        // cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()

        cy.get("input[type='checkbox']").check()

    
    })
})