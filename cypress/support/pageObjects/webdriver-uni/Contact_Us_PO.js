class Contact_Us_PO {
    contactForm_submission(first_name, last_name, email, message, $selector, comment) {
        cy.get('[name="first_name"]').type(first_name)
            cy.get('[name="last_name"]').type(last_name)
            cy.get('[name="email"]').type(email)
            cy.get('[name="message"]').type(message)
            cy.get('[type="submit"]').click()
            cy.get($selector).contains(comment)
    }
}
export default Contact_Us_PO;