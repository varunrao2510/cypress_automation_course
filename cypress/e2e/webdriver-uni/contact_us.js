///<reference types="Cypress" />

//const { data } = require("cypress/types/jquery")

describe("Test contact us for via webdriver unit", () => {

    beforeEach(function () {
        cy.fixture('example.json').then(function (data) {
            //this.data = data
             globalThis.data = data
        })
    })

    it("Should be able to submit successful submission via contact us form", () => {
        //cypress code
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include','Contact-Us/contactus.html')
        //cy.get('#contact-us').click({force: true})
        cy.get('[name="first_name"]').type(data.first_name)
        cy.get('[name="last_name"]').type(data.last_name)
        cy.get('[name="email"]').type(data.email)
        cy.get('[name="message"]').type(data.message)
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')

    })

    it("Should not be able to submit successful submission via contact us form", () => {
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type(data.first_name)
        cy.get('[name="last_name"]').type(data.last_name)
        cy.get('[name="message"]').type(data.message)
        cy.get('[type="submit"]').click()

    })

    it("Opening link in same tab using jQuery remove attribute, as opening in new tab doesn't suppport", () => {
        //cypress code
        cy.visit('https://www.webdriveruniversity.com')
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include','Contact-Us/contactus.html')
        //cy.get('#contact-us').click({force: true})
        cy.get('[name="first_name"]').type("Varun S")
        cy.get('[name="last_name"]').type("RAo")
        cy.get('[name="email"]').type("varunrao2510@gmail.com")
        cy.get('[name="message"]').type("Wow cypress is intresting")
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')

    })

    it("Should not be able to submit successful submission via contact us form", () => {
        //cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.visit('https://www.webdriveruniversity.com')
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
        cy.get('[name="first_name"]').type("Varun S")
        cy.get('[name="last_name"]').type("RAo")
        cy.get('[name="message"]').type("Wow cypress is intresting")
        cy.get('[type="submit"]').click()

    })
})