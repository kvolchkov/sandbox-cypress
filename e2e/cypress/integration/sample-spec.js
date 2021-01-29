/// <reference types="Cypress" />

describe('Angular app test', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('should get correct title', () => {    
    cy.title().should('eq', "Angular 9 Example App");
  })

  it('should not contain text', () =>{
    cy.get('xxx-home-page h3').should('not.contain.text','Written in Angular 11');
  })

  it('should return search results', () => {
    cy.get('app-root mat-toolbar form input').type('Cypress');
    cy.get('app-root mat-toolbar form button').click();
    cy.get('xxx-questions-page a').should('contain.text', 'Cypress');
  })
})