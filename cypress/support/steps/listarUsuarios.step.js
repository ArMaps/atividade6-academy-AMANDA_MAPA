import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import usuarioPage from '../../pages/usuarioPage';
const listaDetalhada = require('../../fixtures/listaDetalhada.json')


Given('que acessei a página inicial', () => {
    cy.visit('');
});
When('desejo visualizar todos os usuários cadastrados', () => {
    cy.listarUsuarios()
});
Then('será listado todos os usuários cadastrados', () => {
    cy.get('#paginacaoProximo').should('have.attr', 'disabled')
});
Then('visualizo o nome do usuário no card', () => {
    cy.get(usuarioPage.CAMPO_CARD_USUARIO_NOME).should("exist")
});
Then('visualizo o email do usuário no card', () => {
    cy.get(usuarioPage.CAMPO_CARD_USUARIO_EMAIL).should("exist")
});