///<reference types="cypress" />
///<reference types="cypress-xpath" />

describe("Iterate over elements", () => {

    it("Log info of all hair care products", () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get("a[href*='product/category&path']").contains("Hair Care").click()
        cy.get(".fixed_wrapper .prdocutname").each(($el, index) => {
            cy.log("Index:" +index+ " " +$el.text())
        })
    })

    it.only("Add specific product to cart", () => {
        cy.visit("https://www.automationteststore.com/")
        cy.selectProduct('Curls to straight Shampoo')
        
    })

    it.only("Add specific product to cart", () => {
        cy.visit("https://www.automationteststore.com/")
        cy.selectProduct('Eau Parfumee au The Vert Shampoo')
        
    })
})