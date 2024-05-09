import atualizarUsuarioPage from '../pages/atualizarUsuarioPage';
import pesquisaUsuarioPage from '../pages/usuarioPage';

Cypress.Commands.add('pesquisarUsuario', (pesquisa) => {
    cy.get(pesquisaUsuarioPage.CAMPO_PESQUISA).type(pesquisa)
})
Cypress.Commands.add('cadastroDeUsuarioAPI', (body) => {
    cy.request({
        method: 'POST',
        url: 'https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users',
        body: body
    })
})
Cypress.Commands.add('deletarUsuario', (id) => {
    cy.request({
        method: 'DELETE',
        url: 'https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users/' + id,
    })
})
Cypress.Commands.add('listarUsuarios', () => {
    cy.get('#paginacaoProximo').as('botaoProximo')
    const pularPagina = () => {
        cy.get('@botaoProximo').invoke('attr', 'disabled').then(disabled => {
            if (disabled == 'disabled') {
                cy.get('@botaoProximo').should('have.attr', 'disabled')
            }
            else {
                cy.get('@botaoProximo').click().then(pularPagina)
                cy.get('#userData').should('exist')
            }
        })
    }
    pularPagina()
})