import { Given, When, Then, Before, After  } from 'cypress-cucumber-preprocessor/steps'
import atualizarUsuarioPage from "../../pages/atualizarUsuarioPage"
import { fakerPT_BR, faker } from '@faker-js/faker';
const atualizarUsuario = require('../../fixtures/atualizarUsuario.json')
var id = null;

Before({ tags: '@atualizarUsuario' }, () => {
    cy.cadastroDeUsuarioAPI(atualizarUsuario).then((response) => {
        id = response.body.id
    })
});

Given('que acessei a página de edição', () => {
    cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users/'+id)
});
When('clico em editar', () => {
    cy.get(atualizarUsuarioPage.BTN_EDITAR).click()
});
Then('os campos de informações foram verificados com sucesso', () => {
    cy.get(atualizarUsuarioPage.CAMPO_DETALHES_EMAIL).should('be.visible','have.text','E-mail')
    cy.get(atualizarUsuarioPage.CAMPO_NOME).should('be.visible','have.text','Nome')
});
When('seleciono a opção de editar', () => {
    cy.get(atualizarUsuarioPage.BTN_EDITAR).click()
});
When('realizo as alterações no nome', () => {
    cy.get(atualizarUsuarioPage.CAMPO_NOME).clear().type(fakerPT_BR.person.fullName())
});
When('clico em salvar', () => {
    cy.get('form').submit()
});
Then('as informações são atualizadas com sucesso', () => {
    cy.url().should('eq','https://rarocrud-frontend-88984f6e4454.herokuapp.com/users')
});
When('seleciono para editar', () => {
    cy.get(atualizarUsuarioPage.BTN_EDITAR).click()
});
When('realizo as alterações no email', () => {
    cy.get(atualizarUsuarioPage.CAMPO_DETALHES_EMAIL).clear().type(fakerPT_BR.internet.email())
});
When('clico no botão salvar', () => {
    cy.get('form').submit()
});
Then('as informações são atualizadas', () => {
    cy.url().should('eq','https://rarocrud-frontend-88984f6e4454.herokuapp.com/users')
});
When('clico para editar', () => {
    cy.get(atualizarUsuarioPage.BTN_EDITAR).click()
});
When('insiro um email inválido', () => {
    cy.get(atualizarUsuarioPage.CAMPO_DETALHES_EMAIL).clear().type('zebonitinhomail.com')
});
When('seleciono salvar', () => {
    cy.get('form').submit()
});
Then('as informações não são atualizadas', () => {
    cy.get('span').contains('Formato de e-mail inválido')
});
When('clico no botão de editar', () => {
    cy.get(atualizarUsuarioPage.BTN_EDITAR).click()
});
When('insiro um nome inválido', () => {
    cy.get(atualizarUsuarioPage.CAMPO_NOME).clear().type('Zé B0n1t1nh0')
});
When('seleciono a opção salvar', () => {
    cy.get('form').submit()
});
Then('as informações não são atualizadas devido ao formato inválido', () => {
    cy.get('span').contains('Formato do nome é inválido.')
});
After({ tags: '@atualizarUsuario' }, () => {
    cy.deletarUsuario(id)
});