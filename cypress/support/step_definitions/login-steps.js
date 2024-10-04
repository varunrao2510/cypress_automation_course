//import 'cypress';
///<reference types="Cypress" />


import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
console.log('Step definitions loaded');
Given("I access the WebdriverUniversity Login Portal page", () => {
    cy.visit('https://www.webdriveruniversity.com/Login-Portal/index.html')
})

When('I enter a username {word}', (userName) => {
    cy.get('#text').type(userName)
})

And('I enter the password {word}', (userName) => {
    cy.get('#password').type(userName)
})

And('I click on login button', () => {
    cy.get('#login-button').click()
})

Then('I should be present with following message {word} {word}', (message, message2) => {
    cy.get('#login-button').click()
})