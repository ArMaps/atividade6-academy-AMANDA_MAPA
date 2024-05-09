import { Given, When, Then, Before, After } from 'cypress-cucumber-preprocessor/steps';
import usuarioPage from "../../pages/usuarioPage"
const pesquisarUsuario = require('../../fixtures/pesquisarUsuario.json')
var id = null;
var nome = null;
var email = null;

Before({ tags: '@pesquisarUsuario' }, () => {
    cy.cadastroDeUsuarioAPI(pesquisarUsuario).then((response) => {
        nome = response.body.name
        email = response.body.email
        id = response.body.id
    })
});
Given('que acessei a plataforma', () => {
    cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users');
});
When('clico na caixa de pesquisa', () => {
    cy.get(usuarioPage.CAMPO_PESQUISA).click();
});
When("informo nome de usuário já cadastrado", () => {
    cy.pesquisarUsuario(nome)
});
Then('visualizo todos os usuários cadastrados com o nome pesquisado', () => {
    cy.contains(usuarioPage.CAMPO_CARD_USUARIO_NOME, nome)
});
When("informo email de usuário já cadastrado", () => {
    cy.pesquisarUsuario(email)
});
Then('visualizo o usuário pesquisado', () => {
    cy.contains(usuarioPage.CAMPO_CARD_USUARIO_EMAIL, email)
});
After({ tags: '@pesquisarUsuario' }, () => {
    cy.deletarUsuario(id)
});