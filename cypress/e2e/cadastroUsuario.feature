# language: pt

Funcionalidade: Cadastro de usuário

Contexto: Acessar a página de cadastro de usuario
Dado que acessei a página de cadastro

@cadastroUsuario
Cenário: Cadastro de usuário com sucesso
Quando informo um nome válido
E informo um e-mail válido
E clico em salvar
Então o usuário será cadastrado com sucesso

@cadastroUsuario
Cenário: Tentativa de cadastrar um usuário inserindo apenas o e-mail
Quando informo um novo e-mail
E clico em salvar
Então o usuário não será cadastrado

@cadastroUsuario
Cenário: Tentativa de cadastrar um usuário inserindo apenas o nome
Quando informo um novo nome
E clico em salvar
Então o usuário não será cadastrado sem inserir um e-mail

@cadastroUsuario
Cenário: Tentativa de cadastrar um usuário inserindo nome com 100 caracteres
Quando informo um novo nome com 100 caracteres
E informo um e-mail válido
E clico em salvar
Então o usuário será cadastrado

@cadastroUsuario
Cenário: Tentativa de cadastrar um usuário inserindo nome com 101 caracteres
Quando informo um novo nome com 101 caracteres
E informo um e-mail válido
E clico em salvar
Então o usuário não será cadastrado por exceder o limite de caracteres para o campo nome

@cadastroUsuario
Cenário: Tentativa de cadastrar um usuário inserindo um email com 60 caracteres
Quando informo um novo nome
E insiro um email com 60 caracteres
E clico em salvar
Então o usuário será cadastrado com sucesso

@cadastroUsuario
Cenário: Tentativa de cadastrar um usuário inserindo um email com 61 caracteres
Quando informo um novo nome
E insiro um email com 61 caracteres
E clico em salvar
Então não será cadastrado por exceder o limite de caracteres para o campo email

@cadastroUsuario
Cenário: tentativa de cadastro de usuário com formato de email inválido sem o @
Quando informo um novo nome
E insiro email inválido
E clico em salvar
Então o usuário não será cadastrado por ter um formato inválido