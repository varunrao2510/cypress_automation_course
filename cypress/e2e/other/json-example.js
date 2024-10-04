///<reference types="Cypress" />

describe("JSON Object", () => {

    it("JSON Object example", () => {
        const exampleObject = { "key": "Tim", "key2": "Jones" }
        const exampleArrayOfValues = ["Sofie", "Rose", "Howard"]
        const exampleArrayOfObject = [{ "key": "Tim", "key2": "Jones", "key3": "Cena" }]

        const users = {
            "firstName": "Varun",
            "lastName": "Pinky",
            "Age": 30,
            "Students": [
                {
                    "firstName": "Varun",
                    "lastName": "rao",
                },
                {
                    "firstName": "Pinky",
                    "lastName": "Shetty",
                }
            ]
        }

        cy.log(exampleObject["key"])
        cy.log(exampleObject["key2"])
        cy.log(exampleObject)
        cy.log(exampleObject.key)

        cy.log(exampleArrayOfValues[0])
        cy.log(exampleArrayOfValues[1])
        cy.log(exampleArrayOfValues[2])

        cy.log(users.firstName)
        cy.log(users.lastName)
        cy.log(users.Students[0].firstName)
        cy.log(users.Students[0].lastName)

        cy.log(exampleArrayOfObject[0].key)
        cy.log(exampleArrayOfObject[0].key3)
        
    })

    
})