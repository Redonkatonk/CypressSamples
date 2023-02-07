import testData from '../fixtures/example.json'

describe('Fill Form Test', () => {
  it('Completed', () => {
    cy.visit(testData.baseUri)

    cy.getBubble('17').click()
    cy.getBubble('36').click()
    cy.getBubble('55').click()
    cy.getBubble('74').click()
    cy.getBubble('93').click()
    cy.getBubble('112').click()
    
    cy.getTextbox(7)
      .type(testData.question1)
    cy.getTextbox(8)
      .type(testData.question2)
    cy.getTextbox(9)
      .type(testData.question3)
    cy.getTextbox(10)
      .type(testData.question4)

    cy.getSubmit().click()
    cy.get('.vHW8K').should('have.text', testData.Result)
  })
  it('', () => {
    
  })
})