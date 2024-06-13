// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --

Cypress.Commands.add('navigateToWebdrive_HomePage', productName => {
    cy.visit('https://www.webdriveruniversity.com')
})

Cypress.Commands.add('selectProduct', productName => {
    cy.get("a[href*='product/category&path']").contains("Hair Care").click()
        cy.get(".fixed_wrapper .prdocutname").each(($el, index) => {
            if ($el.text().includes(productName)) {
                cy.wrap($el).click()
            }
        })
})

Cypress.Commands.add('addProductTobasket', productName => {
        cy.get(".fixed_wrapper .prdocutname").each(($el, index) => {
            if ($el.text() === productName) {
                cy.log($el.text())
                cy.get('.productcart').eq(index).click()
            }
        })
})

Cypress.Commands.add('webdriverUni_CustomerForm_Submission', (first_name, last_name, email, message, $selector, comment) => {
    cy.get('[name="first_name"]').type(first_name)
        cy.get('[name="last_name"]').type(last_name)
        cy.get('[name="email"]').type(email)
        cy.get('[name="message"]').type(message)
        cy.get('[type="submit"]').click()
        cy.get($selector).contains(comment)
})
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })