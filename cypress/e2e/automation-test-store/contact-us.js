///<reference types="cypress" />
///<reference types="cypress-xpath" />

describe("Test contact us for via Automation test store", () => {

    before(function () {
        cy.fixture('userDetails.json').as("user")
        
    })

    it("Should be able to submit successful submission via contact us form", () => {
        cy.visit("https://www.automationteststore.com/")
        //select contact
        //cy.get('.info_links_footer > :nth-child(5) > a').click()
        cy.xpath("//a[contains(@href,'content/contact')]").click()
        //type into the form
        cy.get('@user').then((user) => {        
            cy.get('#ContactUsFrm_first_name').type(user.first_name)
            cy.get('#ContactUsFrm_email').type(user.email)
            cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
            cy.get('#ContactUsFrm_enquiry').type("cypress testing")
            cy.get('.col-md-6 > .btn').click()
            cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
        })
    })

    it("output the text of contact us link", () => {
        cy.visit("https://www.automationteststore.com/")
        //select contact
        //cy.get('.info_links_footer > :nth-child(5) > a').click()
        cy.xpath("//a[contains(@href,'content/contact')]").click().then(function (contectUsText) {
            cy.log('Click on link using text ' + contectUsText.text())
        })
        //type into the form
        cy.get('#ContactUsFrm_first_name').type("Varun S")
        cy.get('#ContactUsFrm_email').type("varunrao2510@gmail.com")
        cy.get('#ContactUsFrm_email').should('have.attr','name','email')
        cy.get('#ContactUsFrm_enquiry').type("cypress testing")
        cy.get('.col-md-6 > .btn').click()
        cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')
    })
})