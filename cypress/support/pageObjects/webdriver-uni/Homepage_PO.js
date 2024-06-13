class HomePage_PO {
    visitHomePage() {
        cy.visit(Cypress.env("baseUrl_Home_Page"))
    }

}
export default HomePage_PO; 