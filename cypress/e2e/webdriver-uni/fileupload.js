///<reference types="Cypress" />

describe("Test file upload vie webdriver uni", () => {
    it("upload file", () => {
        //cypress code
        cy.visit('https://www.webdriveruniversity.com')
        cy.get('#file-upload').invoke('removeAttr', 'target').click()
        cy.get('[type="file"]').selectFile('cypress/fixtures/sample.jpg')
        cy.get('#submit-button').click()
    })

    it.only("upload no file", () => {
        //cypress code
        cy.visit('https://www.webdriveruniversity.com')
        cy.get('#file-upload').invoke('removeAttr', 'target').click()
        cy.get('#submit-button').click()
    })
})