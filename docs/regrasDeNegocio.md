# Mapeamento de Regras de Negócio - Módulo Chatbot

Este documento mapeia as regras de negócio implementadas na camada de serviços do backend, conforme os requisitos da Sprint 3.

* **RN-01: Validação de Existência da Sessão**
  * **Descrição:** Nenhuma mensagem pode ser registrada sem estar vinculada a uma sessão de atendimento existente e válida.
  * **Implementação:** `SessaoService.cs` (Método `RegistrarMensagemAsync`).

* **RN-02: Bloqueio de Mensagem Vazia**
  * **Descrição:** O sistema deve rejeitar o registro de mensagens cujo conteúdo de texto esteja em branco ou nulo.
  * **Implementação:** `SessaoService.cs` (Método `RegistrarMensagemAsync`).

* **RN-03: Formatação de Identificação do WhatsApp**
  * **Descrição:** Caso o ID da mensagem do WhatsApp não seja fornecido na requisição, o sistema deve gerar automaticamente um identificador seguindo o padrão da API do WhatsApp (prefixo `wamid.HBgL_` seguido de um hash).
  * **Implementação:** `SessaoService.cs` (Método `RegistrarMensagemAsync`).