///<reference types="Cypress" />

describe("Validate webdriveruni homepage link", () => {
    it("Confirm links redirects to the correct page", () => {
        //cypress code
        cy.visit('https://www.webdriveruniversity.com')
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'Contact')

        //"go" command enables us to perform action on browser
        cy.go('back')
        cy.go('forward')
        cy.reload()
        cy.reload(true) //reload without using cache
    })

    it.only("Confirm links redirects to the to-do list page", () => {
        //cypress code
        cy.visit('https://www.webdriveruniversity.com')
        cy.get('#to-do-list').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'To-Do-List')

        //"go" command enables us to perform action on browser
        cy.go('back')
        cy.url().should('include', 'https://www.webdriveruniversity.com/')
        cy.reload()
        cy.reload(true) //reload without using cache
    })
})