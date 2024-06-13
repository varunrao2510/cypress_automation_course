///<reference types="cypress" />
///<reference types="cypress-xpath" />

describe("Alias and invoke", () => {
    it("Validate specific hair care product", () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get("a[href*='product/category&path']").contains("Hair Care").click()
        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productThumbnail')
        cy.get('@productThumbnail').its('length').should('be.gt', 5)
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
    })

    it("Count number of product in home page", () => {
        cy.visit("https://www.automationteststore.com/")
        //cy.get("a[href*='product/category&path']").contains("Hair Care").click()
        cy.get(".thumbnail").as('productThumbnail')
        cy.get('@productThumbnail').should('have.length', 16)
    })

    it("Count number of product in home page", () => {
        cy.visit("https://www.automationteststore.com/")
        //cy.get("a[href*='product/category&path']").contains("Hair Care").click()
        cy.get(".productcart").eq(0).invoke('attr','title').as('productThumbnail')
        cy.get('@productThumbnail').should('include', 'Add to Cart')
    })

    it.only("Calculate total of normal and sale products", () => {
        cy.visit("https://www.automationteststore.com/")
        //cy.get("a[href*='product/category&path']").contains("Hair Care").click()
        cy.get(".thumbnail").as('productThumbnail')
        // cy.get('@productThumbnail').find('.oneprice').each(($el, index, list) => {
        //     cy.log($el.text())
        // })
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')

        var itemsTotal = 0
        cy.get('@itemPrice').then($linkTest => {
            var itemPriceTotal = 0;
            var itemPrice = $linkTest.split('$')
            var i;
            for (i = 0; i < itemPrice.length; i++){
                cy.log(itemPrice[i])
                itemPriceTotal = itemPriceTotal + Number(itemPrice[i])
                
            }
            itemsTotal += itemPriceTotal;
            cy.log('Item total proce is:', itemPriceTotal)
        })

        cy.get('@saleItemPrice').then($linkTest => {
            var itemPriceTotal = 0;
            var saleItemPrice = $linkTest.split('$')
            var i;
            for (i = 0; i < saleItemPrice.length; i++){
                cy.log(saleItemPrice[i])
                itemPriceTotal = itemPriceTotal + Number(saleItemPrice[i])
                
            }
            itemsTotal += itemPriceTotal;
            cy.log('Sale Item total proce is:', itemPriceTotal)
        })
            .then(() => {
                cy.log("the total price of all product:", +itemsTotal)
                expect(itemsTotal).to.eq(648.5)
            })
    })
})