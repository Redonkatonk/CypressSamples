import apiData from '../fixtures/apiExample.json'

context('Employee API', () => {
    it('getAllEmployees', () => {
        cy.request('GET', `${apiData.baseUri}/employees`)
            .then((response) => {
                expect(response.status).to.equal(200)
                //expect(response.body.response).length.to.be.greaterThan(1)
            })
    })
    it('create employee', () => {
        cy.request('POST', `${apiData.baseUri}/create`, apiData.testEmployee)
            .then((response) => {
                expect(response.status).to.equal(200)
            })
    })
})