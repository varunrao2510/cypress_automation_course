///<reference types="Cypress" />
import HomePage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO"
import Contact_Us_PO from "../../support/pageObjects/webdriver-uni/Contact_Us_PO"

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
        cy.webdriverUni_CustomerForm_Submission(Cypress.env('first_name'), data.last_name, data.email, data.message, 'h1', 'Thank You for your Message!')

    })

    it("Should not be able to submit successful submission via contact us form", () => {
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type(data.first_name)
        cy.get('[name="last_name"]').type(data.last_name)
        cy.get('[name="message"]').type(data.message)
        cy.get('[type="submit"]').click()

    })

    it("using dynamic URLS", () => {
        //cypress code
        cy.visit(Cypress.env('baseUrl_Home_Page'))
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include','Contact-Us/contactus.html')
        //cy.get('#contact-us').click({force: true})
        cy.webdriverUni_CustomerForm_Submission(Cypress.env('first_name'), data.last_name, data.email, data.message, 'h1', 'Thank You for your Message!')

    })

    it.only("using page object model", () => {
        //cypress code
        const homepage_PO = new HomePage_PO()
        homepage_PO.visitHomePage()
        //cy.visit(Cypress.env('baseUrl_Home_Page'))
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include','Contact-Us/contactus.html')
        //cy.get('#contact-us').click({force: true})
        cy.webdriverUni_CustomerForm_Submission(Cypress.env('first_name'), data.last_name, data.email, data.message, 'h1', 'Thank You for your Message!')

    })

    it.only("using page object model for form submission", () => {
        //cypress code
        const homepage_PO = new HomePage_PO()
        homepage_PO.visitHomePage()
        const contactus_PO = new Contact_Us_PO()
        //cy.visit(Cypress.env('baseUrl_Home_Page'))
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include','Contact-Us/contactus.html')
        //cy.get('#contact-us').click({force: true})
        contactus_PO.contactForm_submission(Cypress.env('first_name'), data.last_name, data.email, data.message, 'h1', 'Thank You for your Message!')
        //cy.webdriverUni_CustomerForm_Submission(Cypress.env('first_name'), data.last_name, data.email, data.message, 'h1', 'Thank You for your Message!')

    })
})