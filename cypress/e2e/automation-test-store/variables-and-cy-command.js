///<reference types="cypress" />
///<reference types="cypress-xpath" />

describe("varifying variables, cypress commands and jquery commands", () => {
    it("navigating to specific product image", () => {
        cy.visit("https://www.automationteststore.com/")
        const makeupLink = cy.get("a[href*='product/category&path']").contains("Makeup")
        makeupLink.click()
        const skinCare = cy.get("a[href*='product/category&path']").contains("Skincare")
        skinCare.click()

        //Recomended approach
        cy.get("a[href*='product/category&path']").contains("Makeup").click()
        cy.get("a[href*='product/category&path']").contains("Skincare").click()
    })

    it("navigating to specific product image", () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get("a[href*='product/category&path']").contains("Makeup").click()

        //Following code will fail
        // const header = cy.get('.maintext')
        // cy.log(header.text())

        cy.get('.maintext').then(($headerText) => {
            const headertext = $headerText.text()
            cy.log('Found header text: ' + headertext)
            expect(headertext).is.eq('Makeup')
        })
    })

    it.only("Validate properties of contact us page", () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact")

        //using cypress commands and chaining
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain','First name:')

        //Jquery approach
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const firstname = text.find('#field_11').text()
            expect(firstname).to.contain('First name:')

            //Embedded commands (Closure)
            cy.get('#field_11').then(fnText => {
                cy.log(fnText.text())
                cy.log(fnText)
            })
        })

        
        
    })
})