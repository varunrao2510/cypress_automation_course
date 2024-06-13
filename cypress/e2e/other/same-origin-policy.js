///<reference types="Cypress" />

describe("Cypress web security", () => {

    it.skip("Validate visiting 2 different website domain", () => {
        cy.visit('https://www.webdriveruniversity.com/')
        cy.visit('https://www.automationteststore.com/')
    })

    it("origin command", () => {
        cy.origin('webdriveruniversity.com', () => {
            cy.visit("/")
        })

        cy.origin('automationteststore.com', () => {
            cy.visit("/")
        })
       
    })
})