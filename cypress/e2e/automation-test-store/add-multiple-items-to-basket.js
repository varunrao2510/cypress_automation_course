///<reference types="cypress" />
///<reference types="cypress-xpath" />
import Autostore_Homepage_PO from "../../support/pageObjects/automation-test-store/Autostore_Homepage_PO"

describe("Add multiple items to basket", () => {

    before(function () {
        cy.fixture("product.json").then(function (data) {
            globalThis.data = data
        })
    })

    it.only("Add specific items to basket", () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get("a[href*='product/category&path']").contains("Hair Care").click()
        globalThis.data.productName.forEach(function (element) {
            cy.addProductTobasket(element)
        })

        
    })

    it("Add specific items to basket using POM", () => {
        const autostore_homepage_PO = new Autostore_Homepage_PO
        autostore_homepage_PO.accessHomePage()
        autostore_homepage_PO.clickOnHairCare()
        // cy.visit("https://www.automationteststore.com/")
        // cy.get("a[href*='product/category&path']").contains("Hair Care").click()
        globalThis.data.productName.forEach(function (element) {
            cy.addProductTobasket(element)
        })

        
    })
})