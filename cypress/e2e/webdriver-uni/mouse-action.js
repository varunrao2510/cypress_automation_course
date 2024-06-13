///<reference types="Cypress" />

describe("test mouse action", () => {
    it("Scroll element into view", () => {
        //cypress code
        cy.visit('https://www.webdriveruniversity.com')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()
    })

    it("Drag and drop item", () => {
        //cypress code
        cy.visit('https://www.webdriveruniversity.com')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()
        cy.get('#draggable').trigger('mousedown', { which: 1 })
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force: true})
    })

    it("Double item item", () => {
        //cypress code
        cy.visit('https://www.webdriveruniversity.com')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()
        cy.get('#double-click').dblclick()
    })

    it.only("Click and hold assertion", () => {
        //cypress code
        cy.visit('https://www.webdriveruniversity.com')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()
        cy.get('#click-box').trigger('mousedown', { which: 1 }).then(($ele) => {
            expect($ele).to.have.css('background-color', 'rgb(0, 255, 0)')
        })
    })
})