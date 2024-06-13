///<reference types="Cypress" />

describe("Verify drop down via webdriveruni", () => {
    it("Check and validate drop down", () => {
        //cypress code
        cy.visit('https://www.webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()

        cy.get('#dropdowm-menu-1').select('sql')
        cy.get('#dropdowm-menu-2').select('TestNG').should('have.value', 'testng')
        cy.get('#dropdowm-menu-3').select('javascript')
    })
})