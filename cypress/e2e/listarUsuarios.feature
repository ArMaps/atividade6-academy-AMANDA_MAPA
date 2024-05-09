# language: pt

Funcionalidade: Listar usuários

Contexto: Listar usuário cadastrado
Dado que acessei a página inicial

@listarUsuario
Cenário: listar usuários cadastrados
E desejo visualizar todos os usuários cadastrados
Então será listado todos os usuários cadastrados

@listarUsuario
Cenário: validar campo nome nas informações do usuário
Então visualizo o nome do usuário no card

@listarUsuario
Cenário: validar campo email nas informações do usuário
Então visualizo o email do usuário no card