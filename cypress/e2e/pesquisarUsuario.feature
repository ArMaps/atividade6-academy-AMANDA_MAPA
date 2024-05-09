# language: pt

Funcionalidade: Pesquisa de usuário cadastrado

Contexto: Pesquisa de usuário cadastrado
Dado que acessei a plataforma
Quando clico na caixa de pesquisa

@pesquisarUsuario
Cenário: Pesquisa de usuário por nome
E informo nome de usuário já cadastrado
Então visualizo todos os usuários cadastrados com o nome pesquisado

@pesquisarUsuario
Cenário: Pesquisa de usuário por email 
E informo email de usuário já cadastrado
Então visualizo o usuário pesquisado