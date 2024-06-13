///<reference types="Cypress" />

describe("test date picker via webdriver uni", () => {
    it.only("Select date from from date picke", () => {
        //cypress code
        cy.visit('https://www.webdriveruniversity.com')
        cy.get('#datepicker').invoke('removeAttr', 'target').click()
        cy.get('.input-group-addon').click()

        // let date = new Date()
        // date.setDate(date.getDate()) //fetch the current day
        // cy.log(date.getDate())
        
        // let date2 = new Date()
        // date2.setDate(date2.getDate() + 5) // it will add 5 extra days to current day
        // cy.log(date2.getDate())
        
        var date = new Date()
        date.setDate(date.getDate() + 365) //fetch the current day  
        cy.log(date.getDate())

        var futureYear = date.getFullYear()
        cy.log(futureYear)
        var futureMonth = date.toLocaleString("default", { month: "long" })
        cy.log(futureMonth)
        var futureDay = date.getDate()
        cy.log(futureDay)

        function selectMonthAndYear() {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                if (!currentDate.text().includes(futureYear)) {
                    cy.get('.next').first().click()
                    selectMonthAndYear()
                }
            }).then(() => {
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                    if (!currentDate.text().includes(futureMonth)) {
                        cy.get('.next').first().click()
                        selectMonthAndYear()
                    }
                })
            })
        }

        function selectFutureDay() {
            cy.get('[class="day"]').contains(futureDay).click()
        }        

        selectMonthAndYear()
        selectFutureDay()
    })
})