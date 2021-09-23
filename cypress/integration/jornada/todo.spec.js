/// <reference types="cypress" />

describe('Todo APP', () => {

    beforeEach(() => {
        cy.visit('https://example.cypress.io/todo')
    })

    it('Entradas de tarefas', () => {
        cy.get('.new-todo').type('Tarefa 3 {enter}')
        cy.get('.new-todo').type('Tarefa 4 {enter}')
        cy.get('.new-todo').type('Tarefa 5 {enter}')
        cy.get('.new-todo').type('Tarefa 6 {enter}')
        cy.get('.new-todo').type('Tarefa 7 {enter}')
    })

    it('Concluir tarefas', ()=> {
        cy.contains('Pay electric bill')
            .parent()
            .find('input')
            .check()

        cy.contains('Walk the dog')
            .parent()
            .find('.toggle')
            .check()    


    })

})