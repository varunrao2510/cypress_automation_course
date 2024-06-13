///<reference types="Cypress" />

describe("Handle js alerts", () => {

    it.only("Confirm js alert contains the correct text", () => {
        cy.visit('https://www.webdriveruniversity.com')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
        cy.get('#button1').click()
        cy.on('window:alert', (str) => {
            expect(str).to.eq('I am an alert box!')
        })

    })

    it.only("validate js confirm alert box works correctly when clicking Ok", () => {
        cy.visit('https://www.webdriveruniversity.com')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
        cy.get('#button4').click()
        cy.on('window:alert', (str) => {
            return false
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!')

    })

    it.only("validate js confirm alert box works correctly when clicking Cancel", () => {
        cy.visit('https://www.webdriveruniversity.com')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
        cy.get('#button4').click()
        cy.on('window:confirm', (str) => {
            return false
        })
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')

    })

    it.only("validate js confirm alert box using stub", () => {
        cy.visit('https://www.webdriveruniversity.com')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
       
        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get('#button4').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(() => {
            return true
        }).then(() => {
            cy.get('#confirm-alert-text').contains('You pressed OK!')
        })
    })
})