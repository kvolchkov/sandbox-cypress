/// <reference types="Cypress" />

describe('Angular app test', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('should get correct title', () => {    
    cy.title().should('eq', "Angular 9 Example App");
  })

  it('should fail', () =>{
    cy.get('xxx-home-page h3').contains('Written in Angular 11');
  })
})