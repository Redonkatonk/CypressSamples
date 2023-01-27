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
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getBubble', (index) => cy.get(`#i${index} > .vd3tt > .AB7Lab`))
Cypress.Commands.add('getTextbox', (section) => cy.get(`:nth-child(${section}) > [jsmodel="CP1oW"] > .geS5n > .AgroKb > .edhGSc > .RpC4Ne > .Pc9Gce > .KHxj8b`))
Cypress.Commands.add('getSubmit', () => cy.get('.lRwqcd > .uArJ5e > .l4V7wb > .NPEfkd'))