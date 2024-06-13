///<reference types="Cypress" />
describe("Handling dat via webdriver uni", () => {
    beforeEach(() => {
      cy.visit("http://webdriveruniversity.com/");
      cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    })
    it("Calculate and assert the total age of all user", () => {
        var userDetails = []
        let numb = 0
        cy.get('#thumbnail-1 td ').each(($ele, index, $listing) => {
            userDetails[index] = $ele.text()
        }).then(() => {
            var i;
            for (i = 0; i < userDetails.length; i++){
                cy.log(userDetails[i])
                if (Number(userDetails[i])) {
                    numb += Number(userDetails[i])
                }
                
            }
            cy.log("Total age of all user:" + numb)
            
        })
        
    });
    
    it("Calculate and assert the age of of given user based on last name", () => {
        cy.get('#thumbnail-1 tr td:nth-child(2)').each(($ele, index, $listing) => {
            const text = $ele.text()
            if (text.includes('Woods')) {
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then(function (age) {
                    const userAge = age.text()
                    expect(userAge).to.eq('80')
                })
            }
        })
    })  
  });
    