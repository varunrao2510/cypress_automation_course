class Autostore_Homepage_PO {
    accessHomePage() {
        cy.visit("https://www.automationteststore.com/")
        
    }

    clickOnHairCare() {
        cy.get("a[href*='product/category&path']").contains("Hair Care").click()
    }
}
export default Autostore_Homepage_PO;