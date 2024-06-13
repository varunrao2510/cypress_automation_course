///<reference types="cypress" />
///<reference types="cypress-xpath" />

describe("Inspect automation test store items using chain of commands", () => {
    it("Click on first item using item header", () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click()
    })

    it("Click on first item using item using index", () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
    })

    it.only("Click on first item using item header using then function", () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function(headernameText) {
            cy.log('Selected the following item ' + headernameText.text())
        })
    })
})