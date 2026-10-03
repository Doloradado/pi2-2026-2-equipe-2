# Casos de Teste

Este documento apresenta os casos de teste elaborados com base nos
requisitos funcionais, requisitos não funcionais, regras de negócio
e critérios de aceitação definidos para o sistema.

Os casos serão executados conforme as respectivas funcionalidades
forem implementadas e disponibilizadas para validação.

---

# Requisitos Funcionais

## RF001 — Identificação do Cliente

### CT-001 — Identificar cliente cadastrado

**Requisito:** RF001 — Identificação do cliente  
**Regra de negócio:** RN001 — Identificação pelo WhatsApp  
**Prioridade:** Alta  
**Tipo:** Funcional  

**Pré-condições:**
- O cliente deve estar previamente cadastrado.
- O número de WhatsApp utilizado deve estar associado ao cliente.

**Passos:**
1. Iniciar uma conversa utilizando um número de WhatsApp cadastrado.
2. Enviar uma mensagem ao chatbot.
3. Aguardar a identificação.

**Resultado esperado:**
O chatbot deve reconhecer o número de WhatsApp, identificar corretamente
o cliente associado e permitir a continuidade do atendimento.

**Status:** Não executado

---

### CT-002 — Identificar contato não cadastrado

**Requisito:** RF001 — Identificação do cliente  
**Regra de negócio:** RN001 — Identificação pelo WhatsApp  
**Prioridade:** Alta  
**Tipo:** Funcional  

**Pré-condições:**
- O número utilizado não deve estar associado a um cliente cadastrado.

**Passos:**
1. Iniciar uma conversa utilizando um número não cadastrado.
2. Enviar uma mensagem.
3. Aguardar a identificação.

**Resultado esperado:**
O chatbot deve identificar que o número não pertence a um cliente
cadastrado e iniciar o fluxo previsto para novo contato.

**Status:** Não executado

---

## RF002 — Atendimento Automático

### CT-003 — Responder automaticamente a solicitação válida

**Requisito:** RF002 — Atendimento automático  
**Regra de negócio:** RN004 — Limitação do escopo  
**Prioridade:** Alta  
**Tipo:** Funcional  

**Pré-condições:**
- O cliente deve ter iniciado um atendimento.
- A solicitação deve estar dentro do escopo do chatbot.

**Passos:**
1. Enviar uma solicitação prevista no escopo.
2. Aguardar o processamento.

**Resultado esperado:**
O chatbot deve processar a solicitação e fornecer uma resposta
compatível com o assunto solicitado.

**Status:** Não executado

---

### CT-004 — Tratar mensagem não compreendida

**Requisito:** RF002 — Atendimento automático  
**Prioridade:** Alta  
**Tipo:** Funcional  

**Pré-condições:**
- Deve existir um atendimento iniciado.

**Passos:**
1. Enviar uma mensagem que não possa ser compreendida.
2. Aguardar o processamento.

**Resultado esperado:**
O chatbot deve informar que não compreendeu a solicitação e orientar
o cliente sobre como prosseguir.

**Status:** Não executado

---

## RF003 — Identificação da Intenção

### CT-005 — Identificar intenção prevista

**Requisito:** RF003 — Identificação da intenção  
**Regra de negócio:** RN006 — Gestão das intenções  
**Prioridade:** Alta  
**Tipo:** Funcional  

**Pré-condições:**
- Deve existir um atendimento iniciado.

**Passos:**
1. Enviar uma mensagem relacionada a uma intenção prevista pelo sistema.
2. Aguardar o processamento.

**Resultado esperado:**
O chatbot deve identificar corretamente a intenção e direcionar o
atendimento para o fluxo correspondente.

**Status:** Não executado

---

### CT-006 — Reconhecer diferentes mensagens com a mesma intenção

**Requisito:** RF003 — Identificação da intenção  
**Regra de negócio:** RN006 — Gestão das intenções  
**Prioridade:** Alta  
**Tipo:** Funcional  

**Pré-condições:**
- A intenção utilizada deve estar prevista no sistema.

**Passos:**
1. Enviar uma mensagem relacionada a uma intenção.
2. Registrar o comportamento do chatbot.
3. Enviar outra mensagem escrita de forma diferente com a mesma intenção.
4. Comparar o direcionamento realizado.

**Resultado esperado:**
As duas mensagens devem ser reconhecidas como pertencentes à mesma
intenção e direcionadas ao fluxo correspondente.

**Status:** Não executado

---

### CT-007 — Tratar intenção ambígua

**Requisito:** RF003 — Identificação da intenção  
**Prioridade:** Alta  
**Tipo:** Funcional  

**Pré-condições:**
- Deve existir um atendimento iniciado.

**Passos:**
1. Enviar uma mensagem cuja intenção não possa ser determinada claramente.
2. Aguardar a resposta.

**Resultado esperado:**
O chatbot deve solicitar informações adicionais antes de assumir uma
intenção incorreta.

**Status:** Não executado

---

## RF004 — Respostas da Base de Informações

### CT-008 — Responder pergunta existente na base oficial

**Requisito:** RF004 — Respostas da base de informações  
**Regra de negócio:** RN009 — Fonte oficial de informações  
**Prioridade:** Alta  
**Tipo:** Funcional  

**Pré-condições:**
- A informação utilizada no teste deve existir na base oficial.

**Passos:**
1. Enviar uma pergunta cuja resposta esteja disponível na base.
2. Aguardar o processamento.

**Resultado esperado:**
O chatbot deve fornecer resposta compatível com a informação existente
na base oficial.

**Status:** Não executado

---

### CT-009 — Não inventar resposta inexistente na base

**Requisito:** RF004 — Respostas da base de informações  
**Regra de negócio:** RN009 — Fonte oficial de informações  
**Prioridade:** Alta  
**Tipo:** Funcional  

**Pré-condições:**
- A informação solicitada não deve existir na base oficial.

**Passos:**
1. Solicitar uma informação inexistente na base.
2. Aguardar a resposta.

**Resultado esperado:**
O chatbot não deve inventar uma informação oficial inexistente e deve
seguir o tratamento previsto pelo sistema.

**Status:** Não executado

---

## RF005 — Consulta de Informações do Cliente

### CT-010 — Consultar informações do próprio cliente

**Requisito:** RF005 — Consulta de informações do cliente  
**Regras de negócio:** RN002 e RN010  
**Prioridade:** Alta  
**Tipo:** Funcional / Segurança  

**Pré-condições:**
- O cliente deve estar identificado.
- Devem existir informações associadas ao cliente.

**Passos:**
1. Iniciar atendimento como cliente identificado.
2. Solicitar informações referentes ao próprio cadastro.
3. Aguardar a resposta.

**Resultado esperado:**
O chatbot deve apresentar somente informações pertencentes ao cliente
identificado.

**Status:** Não executado

---

### CT-011 — Impedir acesso às informações de outro cliente

**Requisito:** RF005 — Consulta de informações do cliente  
**Regra de negócio:** RN002 — Proteção das informações do cliente  
**Prioridade:** Alta  
**Tipo:** Segurança  

**Pré-condições:**
- O cliente A deve estar identificado.
- Deve existir um cliente B com informações cadastradas.

**Passos:**
1. Iniciar atendimento como cliente A.
2. Solicitar informações pertencentes ao cliente B.
3. Verificar a resposta.

**Resultado esperado:**
Nenhuma informação pertencente ao cliente B deve ser disponibilizada
ao cliente A.

**Status:** Não executado

---

## RF006 — Recebimento e Transcrição de Áudios

### CT-012 — Transcrever áudio compreensível

**Requisito:** RF006 — Recebimento e transcrição de áudios  
**Prioridade:** Alta  
**Tipo:** Funcional  

**Pré-condições:**
- O sistema deve estar apto a receber áudio.

**Passos:**
1. Enviar um áudio com fala compreensível.
2. Aguardar o processamento.

**Resultado esperado:**
O conteúdo do áudio deve ser transcrito e utilizado no fluxo do
atendimento.

**Status:** Não executado

---

### CT-013 — Tratar falha de transcrição

**Requisito:** RF006 — Recebimento e transcrição de áudios  
**Prioridade:** Alta  
**Tipo:** Funcional  

**Pré-condições:**
- O sistema deve estar apto a receber áudio.

**Passos:**
1. Enviar um áudio que não possa ser compreendido adequadamente.
2. Aguardar o processamento.

**Resultado esperado:**
O chatbot deve informar que não conseguiu compreender o áudio e
solicitar uma mensagem de texto ou um novo áudio.

**Status:** Não executado

---

## RF007 — Tratamento de Mensagens Fora do Escopo

### CT-014 — Identificar solicitação fora do escopo

**Requisito:** RF007 — Tratamento de mensagens fora do escopo  
**Regra de negócio:** RN004 — Limitação do escopo  
**Prioridade:** Alta  
**Tipo:** Funcional  

**Pré-condições:**
- Deve existir um atendimento iniciado.

**Passos:**
1. Enviar uma solicitação sobre assunto explicitamente fora do escopo.
2. Aguardar a resposta.

**Resultado esperado:**
O chatbot deve identificar que a solicitação está fora do escopo e não
deve fornecer orientação como se o assunto fizesse parte dos serviços
permitidos.

**Status:** Não executado

---

### CT-015 — Não fornecer orientação especializada fora do escopo

**Requisito:** RF007 — Tratamento de mensagens fora do escopo  
**Regra de negócio:** RN004 — Limitação do escopo  
**Prioridade:** Alta  
**Tipo:** Funcional / Segurança  

**Passos:**
1. Solicitar orientação relacionada a diagnóstico de lesão ou dor,
   dieta, psicologia ou prescrição avançada de treino sem avaliação física.
2. Aguardar a resposta.

**Resultado esperado:**
O chatbot não deve fornecer a orientação especializada solicitada como
parte do atendimento normal.

**Status:** Não executado

---

## RF008 — Resumo da Conversa

### CT-016 — Gerar resumo da conversa

**Requisito:** RF008 — Resumo da conversa  
**Prioridade:** Alta  
**Tipo:** Funcional  

**Pré-condições:**
- Deve existir uma conversa com informações suficientes.

**Passos:**
1. Realizar uma conversa com o chatbot.
2. Incluir dúvidas e solicitações durante o atendimento.
3. Acionar a geração do resumo.
4. Verificar o conteúdo.

**Resultado esperado:**
O resumo deve conter o assunto principal, dúvidas, solicitações e
informações relevantes apresentadas durante a conversa.

**Status:** Não executado

---

## RF009 — Transferência para Atendimento Humano

### CT-017 — Transferir atendimento para humano

**Requisito:** RF009 — Transferência para atendimento humano  
**Regra de negócio:** RN005 — Transferência para atendimento humano  
**Prioridade:** Alta  
**Tipo:** Funcional / Integração  

**Pré-condições:**
- Deve existir um atendimento com o chatbot.
- Deve existir situação que exija atendimento humano.

**Passos:**
1. Realizar uma solicitação que necessite atendimento humano.
2. Aguardar a transferência.

**Resultado esperado:**
O atendimento deve ser encaminhado para atendimento humano conforme
o fluxo definido.

**Status:** Não executado

---

### CT-018 — Preservar histórico e interromper respostas automáticas

**Requisito:** RF009 — Transferência para atendimento humano  
**Regra de negócio:** RN005 — Transferência para atendimento humano  
**Prioridade:** Alta  
**Tipo:** Funcional / Integração  

**Pré-condições:**
- Deve existir uma conversa em andamento.

**Passos:**
1. Trocar mensagens com o chatbot.
2. Acionar a transferência.
3. Acessar o atendimento como administrador.
4. Verificar o histórico.
5. Enviar nova mensagem após a transferência.

**Resultado esperado:**
O histórico anterior deve permanecer disponível ao administrador e
o chatbot deve deixar de responder automaticamente após a transferência.

**Status:** Não executado

---

## RF010 — Registro das Conversas

### CT-019 — Registrar conversa

**Requisito:** RF010 — Registro das conversas  
**Prioridade:** Alta  
**Tipo:** Funcional / Persistência  

**Pré-condições:**
- Deve existir um atendimento iniciado.

**Passos:**
1. Realizar uma conversa.
2. Trocar mensagens durante o atendimento.
3. Verificar posteriormente o registro da conversa.

**Resultado esperado:**
A conversa deve permanecer registrada com as informações necessárias
para consulta e continuidade do atendimento.

**Status:** Não executado

---

## RF011 — Escopo de Atendimento

### CT-020 — Atender solicitação pertencente ao escopo definido

**Requisito:** RF011 — Escopo de atendimento  
**Regra de negócio:** RN004 — Limitação do escopo  
**Prioridade:** Alta  
**Tipo:** Funcional  

**Passos:**
1. Realizar solicitações relacionadas a assuntos previstos no escopo,
   como agendamento, cancelamento/remarcação, planos, valores, horários,
   lembretes de pagamento ou informações da consultoria.
2. Verificar o comportamento do chatbot.

**Resultado esperado:**
O chatbot deve reconhecer os assuntos previstos como pertencentes ao
escopo de atendimento.

**Status:** Não executado

---

## RF012 — Gestão das Intenções

### CT-021 — Utilizar intenção cadastrada

**Requisito:** RF012 — Gestão das intenções  
**Regra de negócio:** RN006 — Gestão das intenções  
**Prioridade:** Alta  
**Tipo:** Funcional  

**Pré-condições:**
- Deve existir uma intenção cadastrada.

**Passos:**
1. Enviar uma mensagem correspondente à intenção cadastrada.
2. Verificar o direcionamento.

**Resultado esperado:**
A intenção deve ser reconhecida e utilizada no direcionamento do
atendimento.

**Status:** Não executado

---

## RF013 — Fonte Oficial de Informações

### CT-022 — Consultar informação na fonte oficial

**Requisito:** RF013 — Fonte oficial de informações  
**Regra de negócio:** RN009 — Fonte oficial de informações  
**Prioridade:** Alta  
**Tipo:** Funcional / Integração  

**Pré-condições:**
- Deve existir uma informação conhecida na fonte oficial.

**Passos:**
1. Solicitar a informação pelo chatbot.
2. Comparar a resposta com a fonte oficial.

**Resultado esperado:**
A informação apresentada deve ser compatível com a fonte oficial
utilizada pelo sistema.

**Status:** Não executado

---

## RF014 — Dados Transacionais

### CT-023 — Consultar dados transacionais na fonte oficial

**Requisito:** RF014 — Dados transacionais  
**Regras de negócio:** RN003 e RN010  
**Prioridade:** Alta  
**Tipo:** Integração / Persistência  

**Pré-condições:**
- O backend e o banco de dados devem estar disponíveis.
- Devem existir dados de teste cadastrados.

**Passos:**
1. Realizar uma operação que dependa de dados transacionais.
2. Verificar a comunicação com a Web API.
3. Verificar o resultado armazenado ou consultado no PostgreSQL.

**Resultado esperado:**
O sistema deve utilizar a Web API e o PostgreSQL como fonte oficial
dos dados transacionais.

**Status:** Não executado

---

### CT-024 — Não confirmar operação antes da gravação oficial

**Requisito:** RF014 — Dados transacionais  
**Regra de negócio:** RN003 — Fonte oficial para operações transacionais  
**Prioridade:** Alta  
**Tipo:** Funcional / Integração  

**Passos:**
1. Iniciar uma operação transacional.
2. Simular ou provocar falha antes da gravação na fonte oficial.
3. Verificar a resposta apresentada.

**Resultado esperado:**
O sistema não deve informar ao cliente que a operação foi concluída
com sucesso se a gravação oficial não tiver sido realizada.

**Status:** Não executado

---

## RF015 — Cadastro de Novo Contato

### CT-025 — Solicitar dados de novo contato

**Requisito:** RF015 — Cadastro de novo contato  
**Regra de negócio:** RN007 — Novo contato  
**Prioridade:** Alta  
**Tipo:** Funcional  

**Pré-condições:**
- O número de WhatsApp não deve estar cadastrado.

**Passos:**
1. Iniciar contato com número não cadastrado.
2. Prosseguir pelo fluxo de novo contato.

**Resultado esperado:**
O chatbot deve solicitar nome completo e objetivo principal do contato,
podendo solicitar e-mail como informação opcional.

**Status:** Não executado

---

## RF016 — Validação Adicional de Identidade

### CT-026 — Validar identidade antes de fornecer informação sensível

**Requisito:** RF016 — Validação adicional de identidade  
**Regra de negócio:** RN008 — Validação adicional  
**Prioridade:** Alta  
**Tipo:** Segurança  

**Pré-condições:**
- O cliente deve solicitar informação que exija validação adicional.

**Passos:**
1. Solicitar informação protegida.
2. Fornecer os dados adicionais de identificação solicitados.
3. Verificar o resultado.

**Resultado esperado:**
O sistema deve validar a identidade utilizando informação adicional
antes de disponibilizar os dados protegidos.

**Status:** Não executado

---

### CT-027 — Rejeitar validação adicional incorreta

**Requisito:** RF016 — Validação adicional de identidade  
**Regra de negócio:** RN008 — Validação adicional  
**Prioridade:** Alta  
**Tipo:** Segurança  

**Passos:**
1. Iniciar uma solicitação que exija validação adicional.
2. Informar dados que não correspondam ao cliente identificado.
3. Verificar o comportamento.

**Resultado esperado:**
O sistema não deve disponibilizar as informações protegidas.

**Status:** Não executado

---

## RF017 — Informações do Cliente

### CT-028 — Consultar informações disponíveis do cliente

**Requisito:** RF017 — Informações do cliente  
**Regra de negócio:** RN010 — Fonte oficial dos dados  
**Prioridade:** Alta  
**Tipo:** Funcional / Integração  

**Pré-condições:**
- O cliente deve estar identificado.
- Devem existir dados cadastrados.

**Passos:**
1. Solicitar informações do próprio cadastro.
2. Solicitar informações sobre plano, situação financeira, sessões
   recentes ou próximo atendimento agendado.

**Resultado esperado:**
O sistema deve consultar a fonte oficial e apresentar somente as
informações pertencentes ao cliente identificado.

**Status:** Não executado

---

## RF018 — Autenticação do Administrador

### CT-029 — Autenticar administrador com credenciais válidas

**Requisito:** RF018 — Autenticação do administrador  
**Prioridade:** Alta  
**Tipo:** Funcional / Segurança  

**Pré-condições:**
- Deve existir administrador cadastrado.

**Passos:**
1. Acessar a tela de login.
2. Informar e-mail e senha válidos.
3. Confirmar o login.

**Resultado esperado:**
O administrador deve ser autenticado e obter acesso à área
administrativa.

**Status:** Não executado

---

### CT-030 — Rejeitar credenciais inválidas

**Requisito:** RF018 — Autenticação do administrador  
**Prioridade:** Alta  
**Tipo:** Funcional / Segurança  

**Passos:**
1. Acessar a tela de login.
2. Informar credenciais inválidas.
3. Confirmar o login.

**Resultado esperado:**
O acesso não deve ser concedido e o sistema deve informar a falha de
autenticação.

**Status:** Não executado

---

## RF019 — Recuperação de Senha

### CT-031 — Solicitar recuperação de senha

**Requisito:** RF019 — Recuperação de senha  
**Prioridade:** Alta  
**Tipo:** Funcional  

**Pré-condições:**
- Deve existir administrador cadastrado.

**Passos:**
1. Acessar a opção de recuperação de senha.
2. Informar os dados solicitados.
3. Confirmar a solicitação.

**Resultado esperado:**
O sistema deve iniciar o processo de recuperação da senha conforme o
fluxo definido.

**Status:** Não executado

---

## RF020 — Painel de Atendimentos

### CT-032 — Exibir atendimentos no painel

**Requisito:** RF020 — Painel de atendimentos  
**Prioridade:** Alta  
**Tipo:** Funcional / Interface  

**Pré-condições:**
- O administrador deve estar autenticado.
- Devem existir atendimentos cadastrados.

**Passos:**
1. Acessar o painel.
2. Verificar os atendimentos apresentados.

**Resultado esperado:**
O painel deve apresentar os atendimentos e seus estados previstos,
incluindo novos, em atendimento e aguardando retorno, além das demais
informações definidas no requisito.

**Status:** Não executado

---

## RF021 — Detalhes do Atendimento

### CT-033 — Consultar detalhes de atendimento

**Requisito:** RF021 — Detalhes do atendimento  
**Prioridade:** Alta  
**Tipo:** Funcional / Interface  

**Pré-condições:**
- O administrador deve estar autenticado.
- Deve existir um atendimento.

**Passos:**
1. Acessar o painel.
2. Selecionar um atendimento.
3. Verificar os detalhes apresentados.

**Resultado esperado:**
O sistema deve apresentar as informações previstas para o atendimento,
incluindo os dados necessários para que o administrador acompanhe a
solicitação e seu histórico.

**Status:** Não executado

---

## RF022 — Resumo do Atendimento

### CT-034 — Visualizar resumo do atendimento

**Requisito:** RF022 — Resumo do atendimento  
**Prioridade:** Alta  
**Tipo:** Funcional / Interface  

**Pré-condições:**
- Deve existir atendimento com resumo disponível.

**Passos:**
1. Acessar os detalhes do atendimento.
2. Localizar o resumo.

**Resultado esperado:**
O resumo correspondente ao atendimento deve estar disponível ao
administrador.

**Status:** Não executado

---

## RF023 — Assumir Atendimento

### CT-035 — Administrador assumir atendimento transferido

**Requisito:** RF023 — Assumir atendimento  
**Regra de negócio:** RN005 — Transferência para atendimento humano  
**Prioridade:** Alta  
**Tipo:** Funcional / Integração  

**Pré-condições:**
- Deve existir atendimento transferido para atendimento humano.
- O administrador deve estar autenticado.

**Passos:**
1. Acessar o atendimento transferido.
2. Selecionar a ação para assumir o atendimento.
3. Confirmar a ação.

**Resultado esperado:**
O atendimento deve passar para o administrador após a confirmação,
permitindo a continuidade do atendimento humano.

**Status:** Não executado

---

## RF024 — Administrador Indisponível

### CT-036 — Registrar solicitação quando não houver administrador disponível

**Requisito:** RF024 — Administrador indisponível  
**Regra de negócio:** RN005 — Transferência para atendimento humano  
**Prioridade:** Alta  
**Tipo:** Funcional  

**Pré-condições:**
- Nenhum administrador deve estar disponível.

**Passos:**
1. Solicitar atendimento humano.
2. Aguardar o processamento.

**Resultado esperado:**
O cliente deve ser informado da indisponibilidade e a solicitação deve
ser registrada para atendimento posterior.

**Status:** Não executado

---

## RF025 — Perfil do Administrador

### CT-037 — Visualizar dados do perfil

**Requisito:** RF025 — Perfil do administrador  
**Prioridade:** Média  
**Tipo:** Funcional / Interface  

**Pré-condições:**
- O administrador deve estar autenticado.

**Passos:**
1. Acessar o perfil.
2. Verificar os dados apresentados.

**Resultado esperado:**
O sistema deve apresentar os dados previstos no requisito, incluindo
nome, e-mail e telefone do administrador.

**Status:** Não executado

---

## RF026 — Confirmação de Exclusão

### CT-038 — Solicitar confirmação antes de excluir

**Requisito:** RF026 — Confirmação de exclusão  
**Prioridade:** Alta  
**Tipo:** Funcional / Interface  

**Pré-condições:**
- Deve existir uma ação de exclusão disponível.

**Passos:**
1. Acionar a opção de exclusão.
2. Verificar o comportamento antes da conclusão da ação.

**Resultado esperado:**
O sistema deve solicitar confirmação antes de efetivar a exclusão.

**Status:** Não executado

---

### CT-039 — Cancelar confirmação de exclusão

**Requisito:** RF026 — Confirmação de exclusão  
**Prioridade:** Alta  
**Tipo:** Funcional / Interface  

**Passos:**
1. Acionar uma opção de exclusão.
2. Quando solicitada confirmação, cancelar a operação.
3. Verificar o registro correspondente.

**Resultado esperado:**
A exclusão não deve ser realizada.

**Status:** Não executado

---

## RF027 — Estados da Interface Administrativa

### CT-040 — Exibir estado de carregamento

**Requisito:** RF027 — Estados da interface administrativa  
**Prioridade:** Média  
**Tipo:** Interface / Usabilidade  

**Passos:**
1. Acessar uma funcionalidade que dependa do carregamento de dados.
2. Observar a interface durante o processamento.

**Resultado esperado:**
A interface deve apresentar indicação adequada de carregamento.

**Status:** Não executado

---

### CT-041 — Exibir estado sem atendimentos

**Requisito:** RF027 — Estados da interface administrativa  
**Prioridade:** Média  
**Tipo:** Interface / Usabilidade  

**Pré-condições:**
- Não devem existir atendimentos para apresentação.

**Passos:**
1. Acessar a área correspondente.
2. Verificar o estado apresentado.

**Resultado esperado:**
A interface deve apresentar adequadamente o estado de ausência de
atendimentos.

**Status:** Não executado

---

# Requisitos Não Funcionais

## RNF001 — Segurança

### CT-042 — Impedir acesso não autorizado

**Requisito:** RNF001 — Segurança  
**Prioridade:** Alta  
**Tipo:** Segurança  

**Passos:**
1. Tentar acessar uma informação ou funcionalidade protegida sem
   autorização.
2. Verificar o resultado.

**Resultado esperado:**
O sistema deve impedir o acesso não autorizado e não deve disponibilizar
informações protegidas.

**Status:** Não executado

---

## RNF002 — Privacidade

### CT-043 — Proteger dados pessoais

**Requisito:** RNF002 — Privacidade  
**Prioridade:** Alta  
**Tipo:** Segurança / Privacidade  

**Passos:**
1. Utilizar dados pessoais em um atendimento.
2. Tentar acessá-los por usuário não autorizado.
3. Verificar o resultado.

**Resultado esperado:**
Dados pessoais e mensagens do cliente não devem ser disponibilizados
para usuários não autorizados.

**Status:** Não executado

---

## RNF003 — Desempenho

### CT-044 — Verificar tempo de resposta

**Requisito:** RNF003 — Desempenho  
**Prioridade:** Alta  
**Tipo:** Desempenho  

**Passos:**
1. Enviar uma mensagem válida.
2. Medir o tempo até o recebimento da resposta.

**Resultado esperado:**
Em condições adequadas de funcionamento das dependências externas,
o tempo ideal de resposta deve permanecer entre 2 e 5 segundos por
interação, conforme definido no requisito.

**Status:** Não executado

---

## RNF004 — Disponibilidade

### CT-045 — Verificar disponibilidade do serviço

**Requisito:** RNF004 — Disponibilidade  
**Prioridade:** Alta  
**Tipo:** Disponibilidade  

**Passos:**
1. Acessar o chatbot durante o período de funcionamento definido.
2. Iniciar uma interação.
3. Enviar uma mensagem.

**Resultado esperado:**
O serviço deve permanecer disponível durante o período definido.

**Observação:** A execução objetiva depende da definição do período
de disponibilidade.

**Status:** Não executado

---

## RNF005 — Confiabilidade

### CT-046 — Manter informações durante o atendimento

**Requisito:** RNF005 — Confiabilidade  
**Prioridade:** Alta  
**Tipo:** Confiabilidade  

**Passos:**
1. Iniciar uma conversa.
2. Enviar múltiplas mensagens.
3. Verificar as informações registradas.

**Resultado esperado:**
O sistema deve executar suas funções de forma consistente, evitando
perda indevida das informações processadas.

**Status:** Não executado

---

## RNF006 — Clareza das Respostas

### CT-047 — Verificar clareza das respostas

**Requisito:** RNF006 — Clareza das respostas  
**Prioridade:** Média  
**Tipo:** Usabilidade  

**Passos:**
1. Enviar uma solicitação válida.
2. Receber a resposta.
3. Avaliar sua compreensão.

**Resultado esperado:**
A resposta deve apresentar linguagem compreensível ao usuário.

**Status:** Não executado

---

## RNF007 — Linguagem Natural

### CT-048 — Compreender diferentes formas de escrita

**Requisito:** RNF007 — Linguagem natural  
**Prioridade:** Alta  
**Tipo:** Funcional / Usabilidade  

**Passos:**
1. Enviar uma solicitação com escrita formal.
2. Repetir a solicitação utilizando abreviação.
3. Repetir utilizando linguagem informal.
4. Comparar o comportamento.

**Resultado esperado:**
O chatbot deve conseguir tratar diferentes formas de escrita que
representem a mesma solicitação dentro das capacidades definidas.

**Status:** Não executado

---

## RNF008 — Integração com WhatsApp

### CT-049 — Enviar e receber mensagem pelo WhatsApp

**Requisito:** RNF008 — Integração com WhatsApp  
**Prioridade:** Alta  
**Tipo:** Integração  

**Pré-condições:**
- A integração com WhatsApp deve estar disponível.

**Passos:**
1. Enviar mensagem pelo WhatsApp.
2. Aguardar o processamento.
3. Verificar a resposta.

**Resultado esperado:**
A mensagem deve ser recebida e a resposta deve ser enviada pelo
WhatsApp.

**Status:** Não executado

---

## RNF009 — Tratamento de Erros

### CT-050 — Tratar falha de processamento

**Requisito:** RNF009 — Tratamento de erros  
**Prioridade:** Alta  
**Tipo:** Confiabilidade  

**Passos:**
1. Provocar uma situação em que a solicitação não possa ser processada.
2. Verificar a resposta.

**Resultado esperado:**
O sistema deve tratar a falha e apresentar resposta adequada ao usuário,
sem encerrar indevidamente o atendimento.

**Status:** Não executado

---

## RNF010 — Rastreabilidade

### CT-051 — Verificar registro da interação

**Requisito:** RNF010 — Rastreabilidade  
**Prioridade:** Alta  
**Tipo:** Rastreabilidade  

**Passos:**
1. Realizar uma interação.
2. Consultar seu registro.
3. Comparar o registro com a interação realizada.

**Resultado esperado:**
As informações necessárias para rastrear a interação devem permanecer
registradas conforme definido pelo sistema.

**Status:** Não executado

---

## RNF011 — Escalabilidade

### CT-052 — Verificar comportamento com múltiplos clientes simultâneos

**Requisito:** RNF011 — Escalabilidade  
**Prioridade:** Média  
**Tipo:** Desempenho / Carga  

**Pré-condições:**
- Deve existir ambiente apropriado para teste de carga.

**Passos:**
1. Registrar o comportamento em condição normal.
2. Simular aumento de clientes simultâneos.
3. Monitorar funcionamento e tempo de resposta.
4. Testar, quando o ambiente permitir, a referência de 50 a 100 clientes.

**Resultado esperado:**
O sistema deve suportar a carga de referência estabelecida no requisito
sem falhas que impeçam o atendimento.

**Status:** Não executado

---

## RNF012 — Manutenibilidade

### CT-053 — Avaliar organização para manutenção

**Requisito:** RNF012 — Manutenibilidade  
**Prioridade:** Média  
**Tipo:** Manutenibilidade  

**Pré-condições:**
- O código-fonte deve estar disponível.

**Passos:**
1. Analisar a organização dos componentes.
2. Verificar separação de responsabilidades.
3. Verificar possibilidade de alteração isolada de funcionalidades.

**Resultado esperado:**
A estrutura deve favorecer manutenção e evolução do sistema.

**Status:** Não executado

---

## RNF013 — Continuidade do Atendimento

### CT-054 — Preservar contexto durante transferência

**Requisito:** RNF013 — Continuidade do atendimento  
**Prioridade:** Alta  
**Tipo:** Integração  

**Passos:**
1. Iniciar conversa com o chatbot.
2. Trocar mensagens.
3. Transferir para atendimento humano.
4. Consultar o atendimento como administrador.

**Resultado esperado:**
O histórico necessário para continuidade do atendimento deve permanecer
disponível após a transferência.

**Status:** Não executado

---

## RNF014 — Controle de Acesso

### CT-055 — Restringir informação ao usuário autorizado

**Requisito:** RNF014 — Controle de acesso  
**Prioridade:** Alta  
**Tipo:** Segurança  

**Passos:**
1. Solicitar informação protegida sem autorização.
2. Registrar o resultado.
3. Realizar a solicitação devidamente autorizado.
4. Comparar os resultados.

**Resultado esperado:**
A informação protegida deve ser disponibilizada somente quando houver
identificação e autorização adequadas.

**Status:** Não executado

---

## RNF015 — Armazenamento

### CT-056 — Verificar persistência das informações

**Requisito:** RNF015 — Armazenamento  
**Prioridade:** Alta  
**Tipo:** Persistência  

**Passos:**
1. Realizar um atendimento.
2. Gerar informações durante a interação.
3. Consultar posteriormente os dados armazenados.

**Resultado esperado:**
As informações previstas para persistência devem permanecer armazenadas
e associadas corretamente ao atendimento.

**Status:** Não executado

---

## RNF016 — Recuperação de Falhas

### CT-057 — Permitir recuperação após falha

**Requisito:** RNF016 — Recuperação de falhas  
**Prioridade:** Alta  
**Tipo:** Confiabilidade  

**Passos:**
1. Provocar uma falha de processamento ou comunicação.
2. Verificar o tratamento realizado.
3. Realizar nova tentativa quando aplicável.

**Resultado esperado:**
O sistema deve permitir recuperação ou nova tentativa conforme o
comportamento previsto para a falha.

**Status:** Não executado

---

## RNF017 — Consistência das Informações

### CT-058 — Verificar consistência com a fonte oficial

**Requisito:** RNF017 — Consistência das informações  
**Prioridade:** Alta  
**Tipo:** Funcional / Integração  

**Pré-condições:**
- Devem existir dados conhecidos no PostgreSQL acessíveis pela Web API.

**Passos:**
1. Consultar uma informação pelo sistema.
2. Consultar o valor correspondente na fonte oficial.
3. Comparar os resultados.

**Resultado esperado:**
A informação apresentada ao usuário deve ser consistente com os dados
oficiais obtidos por meio da Web API/PostgreSQL.

**Status:** Não executado

---

## RNF018 — Experiência do Usuário

### CT-059 — Avaliar facilidade de utilização

**Requisito:** RNF018 — Experiência do usuário  
**Prioridade:** Média  
**Tipo:** Usabilidade  

**Passos:**
1. Executar o fluxo principal disponível.
2. Observar as orientações apresentadas.
3. Verificar se o usuário consegue prosseguir pelo fluxo.

**Resultado esperado:**
A interação deve permitir que o usuário compreenda as ações necessárias
para utilizar o sistema.

**Status:** Não executado

---

## RNF019 — Registro do Atendimento Humano

### CT-060 — Disponibilizar histórico ao administrador

**Requisito:** RNF019 — Registro do atendimento humano  
**Prioridade:** Alta  
**Tipo:** Funcional / Integração  

**Pré-condições:**
- Deve existir conversa transferida para atendimento humano.

**Passos:**
1. Realizar conversa com o chatbot.
2. Transferir o atendimento.
3. Acessar o atendimento como administrador.
4. Verificar o histórico.

**Resultado esperado:**
O histórico anterior deve permanecer disponível ao administrador para
permitir a continuidade do atendimento.

**Status:** Não executado

---

# Considerações Finais

Os casos de teste apresentados neste documento foram elaborados com base
nos requisitos funcionais, requisitos não funcionais e regras de negócio
definidos para o sistema.

A execução será realizada conforme as funcionalidades forem
implementadas e disponibilizadas para validação durante o
desenvolvimento.

Na Sprint 2, serão priorizados pelo menos cinco casos relacionados aos
requisitos essenciais do sistema, conforme solicitado para as
atividades de QA da sprint.

Os dados necessários à execução desses casos serão definidos em
conjunto com a equipe responsável pelo Backend 1, permitindo que a
carga inicial do banco de dados contemple os cenários necessários.

Os resultados das execuções, evidências, observações e eventuais
defeitos encontrados serão registrados e acompanhados durante o
processo de testes.

Este documento poderá ser atualizado conforme novos cenários forem
identificados, requisitos forem refinados ou novas funcionalidades
forem disponibilizadas.
