import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import criarUsuarioPage from '../../pages/criarUsuarioPage';
import { fakerPT_BR, faker } from '@faker-js/faker';


Given('que acessei a página de cadastro', () => {
    cy.visit('/novo');
});
When('informo um nome válido', () => {
    cy.get(criarUsuarioPage.CAMPO_NOME).type(fakerPT_BR.person.fullName());
});
When('informo um e-mail válido', () => {
    cy.get(criarUsuarioPage.CAMPO_EMAIL).type(fakerPT_BR.internet.email())
});
When('clico em salvar', () => {
    cy.get(criarUsuarioPage.BTN_SALVAR).click()
});
Then('o usuário será cadastrado com sucesso', () => {
    cy.contains(criarUsuarioPage.CADASTRO_SUCESSO, 'Usuário salvo com sucesso!').should('be.visible')
});
When('informo um novo e-mail', () => {
    cy.get(criarUsuarioPage.CAMPO_EMAIL).type(fakerPT_BR.internet.email())
});
When('clico em salvar', () => {
    cy.get(criarUsuarioPage.BTN_SALVAR).click()
});
Then('o usuário não será cadastrado', () => {
    cy.contains(criarUsuarioPage.NOME_OBRIGATORIO, 'O campo nome é obrigatório.').should('be.visible')
});
When('informo um novo nome', () => {
    cy.get(criarUsuarioPage.CAMPO_NOME).type(fakerPT_BR.person.fullName())
});
When('clico em salvar', () => {
    cy.get(criarUsuarioPage.BTN_SALVAR).click()
});
Then('o usuário não será cadastrado sem inserir um e-mail', () => {
    cy.contains(criarUsuarioPage.EMAIL_OBRIGATORIO, 'O campo e-mail é obrigatório.').should('be.visible')
});
When('informo um novo nome com 100 caracteres', () => {
    cy.get(criarUsuarioPage.CAMPO_NOME).type(faker.random.alpha(100))
});
When('informo um novo e-mail', () => {
    cy.get(criarUsuarioPage.CAMPO_EMAIL).type(fakerPT_BR.internet.email())
});
When('clico em salvar', () => {
    cy.get(criarUsuarioPage.BTN_SALVAR).click()
});
Then('o usuário será cadastrado', () => {
    cy.contains(criarUsuarioPage.CADASTRO_SUCESSO, 'Usuário salvo com sucesso!').should('be.visible')
});
When('informo um novo nome com 101 caracteres', () => {
    cy.get(criarUsuarioPage.CAMPO_NOME).type(faker.random.alpha(101))
});
When('informo um novo e-mail', () => {
    cy.get(criarUsuarioPage.CAMPO_EMAIL).type(fakerPT_BR.internet.email())
});
When('clico em salvar', () => {
    cy.get(criarUsuarioPage.BTN_SALVAR).click()
});
Then('o usuário não será cadastrado por exceder o limite de caracteres para o campo nome', () => {
    cy.contains(criarUsuarioPage.NOME_CARACTERES, 'Informe no máximo 100 caracteres para o nome').should('be.visible')
});
When('informo um novo nome', () => {
    cy.get(criarUsuarioPage.CAMPO_NOME).type(fakerPT_BR.person.fullName())
});
When('insiro um email com 60 caracteres', () => {
    cy.get(criarUsuarioPage.CAMPO_EMAIL).type(faker.random.alpha(51) + '@mail.com')
});
Then('o usuário será cadastrado com sucesso', () => {
    cy.contains(criarUsuarioPage.CADASTRO_SUCESSO, 'Usuário salvo com sucesso!').should('be.visible')
});
When('informo um novo nome', () => {
    cy.get(criarUsuarioPage.CAMPO_NOME).type(fakerPT_BR.person.fullName())
});
When('insiro um email com 61 caracteres', () => {
    cy.get(criarUsuarioPage.CAMPO_EMAIL).type(faker.random.alpha(52) + '@mail.com')
});
Then('não será cadastrado por exceder o limite de caracteres para o campo email', () => {
    cy.contains(criarUsuarioPage.EMAIL_CARACTERES, 'Informe no máximo 60 caracteres para o e-mail').should('be.visible')
});
When('informo um novo nome', () => {
    cy.get(criarUsuarioPage.CAMPO_NOME).type(fakerPT_BR.person.fullName())
});
When('insiro email inválido', () => {
    cy.get(criarUsuarioPage.CAMPO_EMAIL).type('coringamail.com')
});
When('clico em salvar', () => {
    cy.get(criarUsuarioPage.BTN_SALVAR).click()
});
Then('o usuário não será cadastrado por ter um formato inválido', () => {
    cy.contains(criarUsuarioPage.EMAIL_CARACTERES, 'Formato de e-mail inválido').should('be.visible')
});