///<reference types="Cypress" />

describe("Verify auto complete dropdown list via webdriveruni", () => {
    it("Select specific product via auto complete list", () => {
        //cypress code
        cy.visit('https://www.webdriveruniversity.com')
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click()
        cy.get('#myInput').type('A')
        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
            const prod = $el.text()
            const prodToSelect = 'Avacado'

            if (prod === prodToSelect) {
                //$el.click() 
                //$el.click() this is depricated from jquery. So use trigger
                $el.trigger("click")
                cy.get('#submit-button').click()
                cy.url().should('include', 'food-item=Avacado')
            }
        }).then(() => {
            cy.get('#myInput').type('G')
            cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
            const prod = $el.text()
            const prodToSelect = 'Grapes'

            if (prod === prodToSelect) {
                $el.trigger("click")
                cy.get('#submit-button').click()
                cy.url().should('include', 'food-item=Grapes')
            }
        })
        })
    })
})