import Navigation from "./Navigation";
import { mount } from '@cypress/react18';
import { BrowserRouter } from 'react-router-dom';

describe('Navigation bar', () => {
  it('renders', () => {
    mount(<BrowserRouter><Navigation /></BrowserRouter>)
    cy.get('[data-testid="navigation-container"]').should('be.visible')
  })

    it('navigates to login page', () => {
        mount(<BrowserRouter><Navigation /></BrowserRouter>)
        cy.get('a[href="/login"]').click()
        cy.url().should('include', '/login')
    })

    it('navigates to home page', () => {
        mount(<BrowserRouter><Navigation /></BrowserRouter>)
        cy.get('a[href="/"]').click()
        cy.url().should('not.include', '/login')
        cy.url().should('not.include', '/test')
    })

    it('navigates to login page and back to home page', () => {
        mount(<BrowserRouter><Navigation /></BrowserRouter>)
        cy.get('a[href="/login"]').click()
        cy.url().should('include', '/login')
        cy.get('a[href="/"]').click()
        cy.url().should('not.include', '/login')
    })
})
