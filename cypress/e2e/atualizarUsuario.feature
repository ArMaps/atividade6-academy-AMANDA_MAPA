# language: pt

Funcionalidade: Atualizar um usuário

Contexto: Atualizar dados de usuário cadastrado
Dado que acessei a página de edição

@atualizarUsuario
Cenário: verificação de campos de informações de usuário
Quando clico em editar
Então os campos de informações foram verificados com sucesso

@atualizarUsuario
Cenário: atualização de nome de usuário
Quando seleciono a opção de editar
E realizo as alterações no nome
E clico em salvar
Então as informações são atualizadas com sucesso

@atualizarUsuario
Cenário: atualização de email de usuário
Quando seleciono para editar
E realizo as alterações no email
E clico no botão salvar
Então as informações são atualizadas

@atualizarUsuario
Cenário: atualização de usuário com email inválido
Quando clico para editar
E insiro um email inválido
E seleciono salvar
Então as informações não são atualizadas

@atualizarUsuario
Cenário: atualização de usuário com nome inválido
Quando clico no botão de editar
E insiro um nome inválido
E seleciono a opção salvar
Então as informações não são atualizadas devido ao formato inválido