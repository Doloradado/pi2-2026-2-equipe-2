# Casos de Teste

Este documento apresenta os casos de teste elaborados com base nos
requisitos funcionais do sistema.

## RF001 — Identificação do Cliente

### CT-001 — Identificar cliente cadastrado

**Requisito:** RF001 — Identificação do cliente  
**Prioridade:** Alta  
**Tipo:** Funcional  

**Pré-condições:**
- O cliente deve estar previamente cadastrado no sistema.
- O número de WhatsApp utilizado deve estar associado ao cliente cadastrado.

**Passos:**
1. Iniciar uma conversa com o chatbot utilizando um número de WhatsApp cadastrado.
2. Enviar uma mensagem ao chatbot.
3. Aguardar o processamento da identificação.

**Resultado esperado:**
O chatbot deve reconhecer o número de WhatsApp, identificar corretamente o cliente e iniciar o atendimento.

**Status:** Não executado

---

### CT-002 — Identificar cliente com número não cadastrado

**Requisito:** RF001 — Identificação do cliente  
**Prioridade:** Alta  
**Tipo:** Funcional  

**Pré-condições:**
- O número de WhatsApp utilizado não deve estar cadastrado no sistema.

**Passos:**
1. Iniciar uma conversa com o chatbot utilizando um número de WhatsApp não cadastrado.
2. Enviar uma mensagem ao chatbot.
3. Aguardar o processamento da identificação.

**Resultado esperado:**
O chatbot deve identificar que o número de WhatsApp não está cadastrado
e solicitar informações adicionais para identificação do cliente.

**Status:** Não executado

---

### CT-003 — Informar dados de identificação inválidos

**Requisito:** RF001 — Identificação do cliente  
**Prioridade:** Alta  
**Tipo:** Funcional  

**Pré-condições:**
- O número de WhatsApp utilizado não deve estar cadastrado no sistema.
- O chatbot deve ter solicitado informações adicionais para identificação do cliente.

**Passos:**
1. Iniciar uma conversa com o chatbot utilizando um número de WhatsApp não cadastrado.
2. Aguardar a solicitação de informações adicionais para identificação.
3. Informar dados de identificação inválidos.

**Resultado esperado:**
O chatbot deve identificar que as informações fornecidas são inválidas
e solicitar a correção dos dados.

**Status:** Não executado

---

### CT-004 — Impedir acesso às informações de outro cliente

**Requisito:** RF001 — Identificação do cliente  
**Prioridade:** Alta  
**Tipo:** Funcional / Segurança  

**Pré-condições:**
- O cliente deve estar identificado pelo sistema.
- Devem existir informações cadastradas pertencentes a outro cliente.

**Passos:**
1. Iniciar uma conversa com o chatbot utilizando um cliente identificado.
2. Solicitar informações pertencentes a outro cliente.
3. Aguardar a resposta do chatbot.

**Resultado esperado:**
O chatbot não deve disponibilizar informações pertencentes a outro cliente.

**Status:** Não executado

---

## RF002 — Atendimento automático

### CT-005 — Responder automaticamente à solicitação do cliente

**Requisito:** RF002 — Atendimento automático  
**Prioridade:** Alta  
**Tipo:** Funcional  

**Pré-condições:**
- O cliente deve ter iniciado um atendimento com o chatbot.
- A mensagem enviada deve estar dentro do escopo de atendimento do sistema.

**Passos:**
1. Enviar ao chatbot uma mensagem relacionada a um assunto previsto no atendimento.
2. Aguardar o processamento da mensagem.

**Resultado esperado:**
O chatbot deve processar a solicitação e fornecer automaticamente uma
resposta adequada ao cliente.

**Status:** Não executado

---

### CT-006 — Solicitar reformulação de mensagem não compreendida

**Requisito:** RF002 — Atendimento automático  
**Prioridade:** Alta  
**Tipo:** Funcional  

**Pré-condições:**
- O cliente deve ter iniciado um atendimento com o chatbot.

**Passos:**
1. Enviar ao chatbot uma mensagem que não possa ser compreendida pelo sistema.
2. Aguardar o processamento da mensagem.

**Resultado esperado:**
O chatbot deve informar que não compreendeu a solicitação e pedir ao
cliente que reformule a mensagem.

**Status:** Não executado

---

### CT-007 — Encaminhar solicitação para atendimento humano

**Requisito:** RF002 — Atendimento automático  
**Prioridade:** Alta  
**Tipo:** Funcional  

**Pré-condições:**
- O cliente deve ter iniciado um atendimento com o chatbot.
- A solicitação enviada deve exigir atendimento humano.

**Passos:**
1. Enviar ao chatbot uma solicitação que necessite de atendimento humano.
2. Aguardar o processamento da solicitação.

**Resultado esperado:**
O chatbot deve identificar a necessidade de atendimento humano e
encaminhar a solicitação ao administrador responsável.

**Status:** Não executado

---

## RF003 — Identificação da intenção do cliente

### CT-008 — Identificar corretamente a intenção do cliente

**Requisito:** RF003 — Identificação da intenção do cliente  
**Prioridade:** Alta  
**Tipo:** Funcional  

**Pré-condições:**
- O cliente deve ter iniciado um atendimento com o chatbot.

**Passos:**
1. Enviar uma mensagem com uma intenção prevista pelo sistema.
2. Aguardar o processamento da mensagem.

**Resultado esperado:**
O chatbot deve identificar corretamente a intenção presente na mensagem
e direcionar o atendimento de acordo com ela.

**Status:** Não executado

---

### CT-009 — Reconhecer diferentes mensagens com a mesma intenção

**Requisito:** RF003 — Identificação da intenção do cliente  
**Prioridade:** Alta  
**Tipo:** Funcional  

**Pré-condições:**
- O cliente deve ter iniciado um atendimento com o chatbot.
- A intenção utilizada no teste deve ser reconhecida pelo sistema.

**Passos:**
1. Enviar uma mensagem relacionada a uma intenção prevista pelo sistema.
2. Registrar a intenção identificada pelo chatbot.
3. Enviar outra mensagem, escrita de forma diferente, mas com a mesma intenção.
4. Verificar a intenção identificada novamente.

**Resultado esperado:**
O chatbot deve reconhecer que as diferentes mensagens representam a
mesma intenção e direcionar ambas para o mesmo tipo de atendimento.

**Status:** Não executado

---

### CT-010 — Tratar mensagem com intenção ambígua

**Requisito:** RF003 — Identificação da intenção do cliente  
**Prioridade:** Alta  
**Tipo:** Funcional  

**Pré-condições:**
- O cliente deve ter iniciado um atendimento com o chatbot.

**Passos:**
1. Enviar uma mensagem cuja intenção não possa ser determinada claramente.
2. Aguardar o processamento da mensagem.

**Resultado esperado:**
O chatbot deve identificar a ambiguidade e solicitar informações
adicionais ao cliente para determinar corretamente sua intenção.

**Status:** Não executado

---

## RF004 — Respostas a perguntas frequentes

### CT-011 — Responder corretamente a uma pergunta frequente

**Requisito:** RF004 — Respostas a perguntas frequentes  
**Prioridade:** Alta  
**Tipo:** Funcional  

**Pré-condições:**
- O cliente deve ter iniciado um atendimento com o chatbot.
- A pergunta utilizada no teste deve estar cadastrada entre as perguntas frequentes do sistema.

**Passos:**
1. Enviar ao chatbot uma pergunta frequente cadastrada no sistema.
2. Aguardar o processamento da mensagem.

**Resultado esperado:**
O chatbot deve reconhecer a pergunta e fornecer a resposta correspondente
cadastrada no sistema.

**Status:** Não executado

---

### CT-012 — Reconhecer variação de uma pergunta frequente

**Requisito:** RF004 — Respostas a perguntas frequentes  
**Prioridade:** Alta  
**Tipo:** Funcional  

**Pré-condições:**
- O cliente deve ter iniciado um atendimento com o chatbot.
- Deve existir uma pergunta frequente cadastrada no sistema.

**Passos:**
1. Enviar uma pergunta frequente utilizando uma formulação diferente da cadastrada.
2. Aguardar o processamento da mensagem.

**Resultado esperado:**
O chatbot deve identificar a pergunta frequente mesmo quando formulada
de maneira diferente e fornecer a resposta correspondente.

**Status:** Não executado

---

### CT-013 — Tratar pergunta não cadastrada como frequente

**Requisito:** RF004 — Respostas a perguntas frequentes  
**Prioridade:** Alta  
**Tipo:** Funcional  

**Pré-condições:**
- O cliente deve ter iniciado um atendimento com o chatbot.
- A pergunta utilizada não deve possuir uma resposta cadastrada entre as perguntas frequentes.

**Passos:**
1. Enviar ao chatbot uma pergunta que não esteja cadastrada entre as perguntas frequentes.
2. Aguardar o processamento da mensagem.

**Resultado esperado:**
O chatbot não deve fornecer uma resposta de FAQ incorreta para a pergunta
e deve continuar o atendimento conforme o fluxo definido pelo sistema.

**Status:** Não executado

---

## RF005 — Fornecimento de informações do cliente

### CT-014 — Fornecer informações do próprio cliente

**Requisito:** RF005 — Fornecimento de informações do cliente  
**Prioridade:** Alta  
**Tipo:** Funcional  

**Pré-condições:**
- O cliente deve estar identificado pelo sistema.
- Devem existir informações cadastradas associadas ao cliente.

**Passos:**
1. Iniciar o atendimento com um cliente identificado.
2. Solicitar uma informação referente ao próprio cliente.
3. Aguardar o processamento da solicitação.

**Resultado esperado:**
O chatbot deve fornecer corretamente as informações cadastradas
associadas ao cliente identificado.

**Status:** Não executado

---

### CT-015 — Impedir acesso às informações de outro cliente

**Requisito:** RF005 — Fornecimento de informações do cliente  
**Prioridade:** Alta  
**Tipo:** Funcional / Segurança  

**Pré-condições:**
- O cliente deve estar identificado pelo sistema.
- Devem existir informações cadastradas pertencentes a outro cliente.

**Passos:**
1. Iniciar o atendimento com um cliente identificado.
2. Solicitar uma informação pertencente a outro cliente.
3. Aguardar o processamento da solicitação.

**Resultado esperado:**
O chatbot não deve fornecer informações pertencentes a outro cliente.

**Status:** Não executado

---

### CT-016 — Tratar solicitação de informação não disponível

**Requisito:** RF005 — Fornecimento de informações do cliente  
**Prioridade:** Alta  
**Tipo:** Funcional  

**Pré-condições:**
- O cliente deve estar identificado pelo sistema.
- A informação solicitada não deve estar disponível para o cliente.

**Passos:**
1. Solicitar uma informação que não esteja disponível nos dados do cliente.
2. Aguardar o processamento da solicitação.

**Resultado esperado:**
O chatbot não deve apresentar informações inexistentes ou pertencentes
a outro cliente.

**Status:** Não executado

---

## RF006 — Transcrição de áudio

### CT-017 — Transcrever corretamente uma mensagem de áudio

**Requisito:** RF006 — Transcrição de áudio  
**Prioridade:** Alta  
**Tipo:** Funcional  

**Pré-condições:**
- O cliente deve ter iniciado um atendimento com o chatbot.
- O sistema deve estar apto a receber mensagens de áudio.

**Passos:**
1. Enviar ao chatbot uma mensagem de áudio com fala clara e compreensível.
2. Aguardar o processamento do áudio.

**Resultado esperado:**
O chatbot deve transcrever corretamente o conteúdo da mensagem de áudio
e utilizá-lo no fluxo de atendimento.

**Status:** Não executado

---

### CT-018 — Tratar mensagem de áudio incompreensível

**Requisito:** RF006 — Transcrição de áudio  
**Prioridade:** Alta  
**Tipo:** Funcional  

**Pré-condições:**
- O cliente deve ter iniciado um atendimento com o chatbot.
- O sistema deve estar apto a receber mensagens de áudio.

**Passos:**
1. Enviar ao chatbot uma mensagem de áudio cuja fala não possa ser compreendida.
2. Aguardar o processamento do áudio.

**Resultado esperado:**
O chatbot deve identificar que não foi possível compreender ou transcrever
adequadamente o áudio e solicitar ao cliente uma nova mensagem.

**Status:** Não executado

---

### CT-019 — Tratar arquivo de áudio inválido

**Requisito:** RF006 — Transcrição de áudio  
**Prioridade:** Alta  
**Tipo:** Funcional  

**Pré-condições:**
- O cliente deve ter iniciado um atendimento com o chatbot.
- O sistema deve estar apto a receber mensagens de áudio.

**Passos:**
1. Enviar ao chatbot um arquivo de áudio inválido ou que não possa ser processado.
2. Aguardar o processamento.

**Resultado esperado:**
O chatbot deve tratar a falha sem interromper o atendimento e informar
que não foi possível processar o áudio.

**Status:** Não executado

---

## RF007 — Tratamento de mensagens fora do escopo

### CT-020 — Identificar mensagem fora do escopo

**Requisito:** RF007 — Tratamento de mensagens fora do escopo  
**Prioridade:** Alta  
**Tipo:** Funcional  

**Pré-condições:**
- O cliente deve ter iniciado um atendimento com o chatbot.

**Passos:**
1. Enviar ao chatbot uma mensagem sobre um assunto que não faça parte do escopo de atendimento.
2. Aguardar o processamento da mensagem.

**Resultado esperado:**
O chatbot deve identificar que a mensagem está fora do escopo de
atendimento e informar adequadamente o cliente.

**Status:** Não executado

---

### CT-021 — Não fornecer informações inventadas para assunto fora do escopo

**Requisito:** RF007 — Tratamento de mensagens fora do escopo  
**Prioridade:** Alta  
**Tipo:** Funcional  

**Pré-condições:**
- O cliente deve ter iniciado um atendimento com o chatbot.

**Passos:**
1. Enviar uma pergunta sobre um assunto que não faça parte das informações disponíveis no sistema.
2. Aguardar a resposta do chatbot.

**Resultado esperado:**
O chatbot não deve inventar ou fornecer informações não disponíveis no
sistema para responder à solicitação.

**Status:** Não executado

---

## RF008 — Resumo da conversa

### CT-022 — Gerar resumo da conversa

**Requisito:** RF008 — Resumo da conversa  
**Prioridade:** Alta  
**Tipo:** Funcional  

**Pré-condições:**
- Deve existir uma conversa entre o cliente e o chatbot.
- A conversa deve possuir informações suficientes para a geração do resumo.

**Passos:**
1. Iniciar uma conversa com o chatbot.
2. Trocar mensagens contendo informações relacionadas ao atendimento.
3. Solicitar ou acionar a geração do resumo da conversa.

**Resultado esperado:**
O sistema deve gerar um resumo contendo as principais informações
da conversa realizada com o cliente.

**Status:** Não executado

---

### CT-023 — Manter no resumo as informações relevantes da conversa

**Requisito:** RF008 — Resumo da conversa  
**Prioridade:** Alta  
**Tipo:** Funcional  

**Pré-condições:**
- Deve existir uma conversa contendo informações relevantes sobre o atendimento.

**Passos:**
1. Realizar uma conversa contendo diferentes informações relacionadas ao atendimento.
2. Gerar o resumo da conversa.
3. Comparar o resumo gerado com as informações fornecidas durante o atendimento.

**Resultado esperado:**
O resumo deve apresentar as principais informações fornecidas durante
a conversa, preservando o contexto necessário para a continuidade do atendimento.

**Status:** Não executado

---

## RF009 — Transferência para atendimento humano

### CT-024 — Transferir atendimento para um humano

**Requisito:** RF009 — Transferência para atendimento humano  
**Prioridade:** Alta  
**Tipo:** Funcional  

**Pré-condições:**
- O cliente deve estar em atendimento com o chatbot.
- Deve ocorrer uma situação que necessite de atendimento humano.

**Passos:**
1. Iniciar uma conversa com o chatbot.
2. Realizar uma solicitação que necessite de atendimento humano.
3. Aguardar o processamento da solicitação.

**Resultado esperado:**
O chatbot deve encaminhar o atendimento para um responsável humano.

**Status:** Não executado

---

### CT-025 — Manter histórico da conversa após transferência

**Requisito:** RF009 — Transferência para atendimento humano  
**Prioridade:** Alta  
**Tipo:** Funcional / Integração  

**Pré-condições:**
- Deve existir uma conversa em andamento entre o cliente e o chatbot.
- O atendimento deve ser transferido para um responsável humano.

**Passos:**
1. Realizar uma conversa com o chatbot.
2. Enviar mensagens contendo informações relacionadas ao atendimento.
3. Acionar a transferência para atendimento humano.
4. Verificar as informações disponibilizadas ao responsável pelo atendimento.

**Resultado esperado:**
O histórico da conversa realizada com o chatbot deve ser mantido e
disponibilizado para a continuidade do atendimento humano.

**Status:** Não executado

---

## RF010 — Registro das conversas

### CT-026 — Registrar conversa realizada com o cliente

**Requisito:** RF010 — Registro das conversas  
**Prioridade:** Alta  
**Tipo:** Funcional  

**Pré-condições:**
- O cliente deve ter iniciado um atendimento com o chatbot.

**Passos:**
1. Iniciar uma conversa com o chatbot.
2. Trocar mensagens durante o atendimento.
3. Encerrar ou finalizar a conversa.
4. Verificar o registro da conversa no sistema.

**Resultado esperado:**
O sistema deve registrar a conversa realizada com o cliente,
mantendo as informações do atendimento.

**Status:** Não executado

---

### CT-027 — Consultar histórico de conversa registrada

**Requisito:** RF010 — Registro das conversas  
**Prioridade:** Alta  
**Tipo:** Funcional  

**Pré-condições:**
- Deve existir uma conversa previamente registrada pelo sistema.

**Passos:**
1. Acessar o histórico de conversas registradas.
2. Localizar uma conversa realizada anteriormente.
3. Consultar as informações da conversa.

**Resultado esperado:**
O sistema deve disponibilizar corretamente as informações da conversa
registrada para consulta.

**Status:** Não executado

---

# Casos de Teste — Requisitos Não Funcionais

## RNF001 — Segurança

### CT-028 — Impedir acesso não autorizado às informações do sistema

**Requisito:** RNF001 — Segurança  
**Prioridade:** Alta  
**Tipo:** Segurança  

**Pré-condições:**
- O sistema deve possuir informações armazenadas que tenham acesso restrito.
- O usuário utilizado no teste não deve possuir autorização para acessar essas informações.

**Passos:**
1. Tentar acessar informações do sistema utilizando um usuário sem autorização.
2. Aguardar o processamento da solicitação.
3. Verificar se as informações protegidas foram disponibilizadas.

**Resultado esperado:**
O sistema deve impedir o acesso não autorizado e não deve disponibilizar
as informações protegidas.

**Status:** Não executado

---

### CT-029 — Permitir acesso autorizado às informações do sistema

**Requisito:** RNF001 — Segurança  
**Prioridade:** Alta  
**Tipo:** Segurança  

**Pré-condições:**
- O sistema deve possuir informações com acesso restrito.
- O usuário utilizado no teste deve possuir autorização para acessar essas informações.

**Passos:**
1. Acessar o sistema utilizando um usuário autorizado.
2. Solicitar acesso às informações permitidas para esse usuário.
3. Verificar o resultado da solicitação.

**Resultado esperado:**
O sistema deve permitir o acesso às informações para as quais o usuário
possui autorização.

**Status:** Não executado

---

## RNF002 — Privacidade

### CT-030 — Proteger informações pessoais do cliente

**Requisito:** RNF002 — Privacidade  
**Prioridade:** Alta  
**Tipo:** Segurança / Privacidade  

**Pré-condições:**
- Devem existir informações pessoais de clientes armazenadas no sistema.

**Passos:**
1. Realizar um atendimento utilizando dados pessoais de um cliente.
2. Tentar acessar esses dados por meio de um usuário não autorizado.
3. Verificar as informações disponibilizadas pelo sistema.

**Resultado esperado:**
O sistema não deve disponibilizar informações pessoais ou mensagens do
cliente para usuários não autorizados.

**Status:** Não executado

---

## RNF003 — Desempenho

### CT-031 — Verificar tempo de resposta do chatbot

**Requisito:** RNF003 — Desempenho  
**Prioridade:** Alta  
**Tipo:** Desempenho  

**Pré-condições:**
- O chatbot deve estar disponível para atendimento.

**Passos:**
1. Enviar uma mensagem válida ao chatbot.
2. Medir o tempo entre o envio da mensagem e o recebimento da resposta.
3. Verificar se o atendimento permanece fluido.

**Resultado esperado:**
O chatbot deve processar a mensagem e fornecer a resposta em tempo
adequado para manter uma interação fluida.

**Status:** Não executado

---

## RNF004 — Disponibilidade

### CT-032 — Verificar disponibilidade do chatbot

**Requisito:** RNF004 — Disponibilidade  
**Prioridade:** Alta  
**Tipo:** Disponibilidade  

**Pré-condições:**
- O teste deve ser realizado durante o período definido para funcionamento do serviço.

**Passos:**
1. Acessar o chatbot durante o período de funcionamento.
2. Iniciar uma interação.
3. Enviar uma mensagem ao chatbot.

**Resultado esperado:**
O chatbot deve estar disponível e permitir a realização do atendimento
durante o período definido para funcionamento.

**Status:** Não executado

---

## RNF005 — Confiabilidade

### CT-033 — Manter informações durante o atendimento

**Requisito:** RNF005 — Confiabilidade  
**Prioridade:** Alta  
**Tipo:** Confiabilidade  

**Pré-condições:**
- O chatbot deve estar disponível para atendimento.

**Passos:**
1. Iniciar uma conversa com o chatbot.
2. Enviar múltiplas mensagens e informações durante o atendimento.
3. Verificar o processamento das mensagens enviadas.
4. Consultar as informações registradas durante a conversa.

**Resultado esperado:**
O chatbot deve executar suas funções de forma consistente, sem perda
de mensagens, documentos ou informações processadas.

**Status:** Não executado

---

## RNF006 — Clareza das respostas

### CT-034 — Verificar clareza das respostas do chatbot

**Requisito:** RNF006 — Clareza das respostas  
**Prioridade:** Média  
**Tipo:** Usabilidade  

**Pré-condições:**
- O chatbot deve estar disponível para atendimento.

**Passos:**
1. Enviar uma solicitação válida ao chatbot.
2. Receber a resposta apresentada pelo sistema.
3. Avaliar se a resposta é clara, objetiva e compreensível.

**Resultado esperado:**
A resposta fornecida pelo chatbot deve ser clara, objetiva e
compreensível para o cliente.

**Status:** Não executado

---

## RNF007 — Linguagem natural

### CT-035 — Compreender diferentes formas de escrita

**Requisito:** RNF007 — Linguagem natural  
**Prioridade:** Alta  
**Tipo:** Funcional / Usabilidade  

**Pré-condições:**
- O chatbot deve estar disponível para atendimento.

**Passos:**
1. Enviar uma pergunta utilizando escrita formal.
2. Enviar a mesma pergunta utilizando uma abreviação.
3. Enviar a mesma pergunta utilizando uma expressão informal.
4. Comparar o processamento das mensagens.

**Resultado esperado:**
O chatbot deve compreender diferentes formas de escrita que expressem
a mesma solicitação.

**Status:** Não executado

---

## RNF008 — Integração com WhatsApp

### CT-036 — Enviar e receber mensagens pelo WhatsApp

**Requisito:** RNF008 — Integração com WhatsApp  
**Prioridade:** Alta  
**Tipo:** Integração  

**Pré-condições:**
- O chatbot deve estar integrado ao WhatsApp.

**Passos:**
1. Enviar uma mensagem de texto ao chatbot pelo WhatsApp.
2. Aguardar o processamento.
3. Verificar o recebimento da resposta pelo WhatsApp.

**Resultado esperado:**
O chatbot deve receber a mensagem e enviar sua resposta por meio do
WhatsApp.

**Status:** Não executado

---

### CT-037 — Enviar áudio pelo WhatsApp

**Requisito:** RNF008 — Integração com WhatsApp  
**Prioridade:** Alta  
**Tipo:** Integração  

**Pré-condições:**
- O chatbot deve estar integrado ao WhatsApp.

**Passos:**
1. Enviar uma mensagem de áudio ao chatbot pelo WhatsApp.
2. Aguardar o processamento do áudio.
3. Verificar o recebimento da resposta.

**Resultado esperado:**
O chatbot deve receber e processar a mensagem de áudio enviada por
meio do WhatsApp.

**Status:** Não executado

---

## RNF009 — Tratamento de erros

### CT-038 — Informar falha de processamento ao cliente

**Requisito:** RNF009 — Tratamento de erros  
**Prioridade:** Alta  
**Tipo:** Confiabilidade  

**Pré-condições:**
- O chatbot deve estar disponível para atendimento.

**Passos:**
1. Provocar uma situação em que uma mensagem não possa ser processada corretamente.
2. Aguardar o tratamento da falha pelo sistema.
3. Verificar a resposta apresentada ao cliente.

**Resultado esperado:**
O chatbot deve identificar a falha e informar adequadamente o cliente
sobre o problema ocorrido.

**Status:** Não executado

---

## RNF010 — Rastreabilidade

### CT-039 — Registrar informações da interação

**Requisito:** RNF010 — Rastreabilidade  
**Prioridade:** Alta  
**Tipo:** Rastreabilidade  

**Pré-condições:**
- O cliente deve realizar uma interação com o chatbot.

**Passos:**
1. Iniciar um atendimento.
2. Enviar uma mensagem ao chatbot.
3. Receber a resposta do sistema.
4. Consultar o registro da interação.

**Resultado esperado:**
O registro da interação deve conter informações sobre cliente, data,
horário, mensagem, resposta e tipo de atendimento.

**Status:** Não executado

---

## RNF011 — Escalabilidade

### CT-040 — Verificar comportamento com aumento de mensagens

**Requisito:** RNF011 — Escalabilidade  
**Prioridade:** Média  
**Tipo:** Desempenho / Carga  

**Pré-condições:**
- O chatbot deve estar disponível para atendimento.
- Deve existir uma forma de realizar múltiplas solicitações ao sistema.

**Passos:**
1. Registrar o comportamento do sistema em condições normais de uso.
2. Aumentar a quantidade de mensagens processadas pelo chatbot.
3. Monitorar o funcionamento e o tempo de resposta.
4. Comparar o comportamento com as condições normais.

**Resultado esperado:**
O chatbot deve suportar o aumento do número de mensagens sem apresentar
degradação significativa de desempenho.

**Status:** Não executado

---

## RNF012 — Manutenibilidade

### CT-041 — Verificar facilidade de manutenção do sistema

**Requisito:** RNF012 — Manutenibilidade  
**Prioridade:** Média  
**Tipo:** Manutenibilidade  

**Pré-condições:**
- O código-fonte e a estrutura do projeto devem estar disponíveis para análise.

**Passos:**
1. Analisar a organização dos componentes do sistema.
2. Verificar a separação das responsabilidades no código.
3. Verificar se a estrutura permite localizar e alterar funcionalidades.
4. Avaliar se novas funcionalidades podem ser incorporadas sem alterações desnecessárias em componentes não relacionados.

**Resultado esperado:**
A estrutura do sistema deve facilitar correções, manutenção e
implementação de novas funcionalidades.

**Status:** Não executado

---

## RNF013 — Continuidade do atendimento

### CT-042 — Preservar histórico durante transferência do atendimento

**Requisito:** RNF013 — Continuidade do atendimento  
**Prioridade:** Alta  
**Tipo:** Integração  

**Pré-condições:**
- Deve existir uma conversa em andamento com o chatbot.
- O atendimento deve poder ser transferido para um administrador.

**Passos:**
1. Iniciar uma conversa com o chatbot.
2. Trocar mensagens durante o atendimento.
3. Transferir o atendimento para o administrador.
4. Verificar o histórico disponibilizado após a transferência.

**Resultado esperado:**
O histórico da conversa deve ser preservado após a transferência do
chatbot para o administrador.

**Status:** Não executado

---

## RNF014 — Controle de acesso

### CT-043 — Restringir informações específicas ao cliente autorizado

**Requisito:** RNF014 — Controle de acesso  
**Prioridade:** Alta  
**Tipo:** Segurança  

**Pré-condições:**
- Devem existir informações específicas associadas a um cliente.
- O sistema deve possuir mecanismo de identificação do cliente.

**Passos:**
1. Realizar uma solicitação de informação específica sem estar devidamente identificado ou autorizado.
2. Verificar a resposta do sistema.
3. Realizar a solicitação utilizando o cliente devidamente identificado e autorizado.
4. Verificar novamente a resposta.

**Resultado esperado:**
O sistema deve disponibilizar as informações específicas somente quando
o cliente estiver devidamente identificado e autorizado.

**Status:** Não executado

---

## RNF015 — Armazenamento

### CT-044 — Verificar armazenamento das informações processadas

**Requisito:** RNF015 — Armazenamento  
**Prioridade:** Alta  
**Tipo:** Armazenamento / Segurança  

**Pré-condições:**
- O sistema deve possuir mecanismo de armazenamento configurado.

**Passos:**
1. Realizar uma conversa com o chatbot.
2. Enviar mensagens e informações durante o atendimento.
3. Finalizar o atendimento.
4. Consultar as informações armazenadas pelo sistema.

**Resultado esperado:**
As conversas, documentos e demais informações processadas devem ser
armazenados de forma organizada e segura.

**Status:** Não executado

---

## RNF016 — Recuperação de falhas

### CT-045 — Permitir nova tentativa após falha no processamento

**Requisito:** RNF016 — Recuperação de falhas  
**Prioridade:** Alta  
**Tipo:** Confiabilidade  

**Pré-condições:**
- O chatbot deve estar disponível para atendimento.

**Passos:**
1. Provocar uma situação de falha no processamento de uma mensagem.
2. Verificar o comportamento apresentado pelo sistema.
3. Realizar uma nova tentativa de processamento, quando possível.

**Resultado esperado:**
O chatbot deve permitir uma nova tentativa após a ocorrência da falha,
quando isso for possível.

**Status:** Não executado

---

### CT-046 — Permitir nova tentativa após falha no envio

**Requisito:** RNF016 — Recuperação de falhas  
**Prioridade:** Alta  
**Tipo:** Confiabilidade  

**Pré-condições:**
- O chatbot deve estar disponível para atendimento.

**Passos:**
1. Provocar uma situação de falha no envio de uma mensagem.
2. Verificar o comportamento apresentado pelo sistema.
3. Realizar uma nova tentativa de envio, quando possível.

**Resultado esperado:**
O chatbot deve permitir uma nova tentativa de envio da mensagem após
a ocorrência da falha, quando isso for possível.

**Status:** Não executado

---

## RNF017 — Consistência das informações

### CT-047 — Manter respostas consistentes durante o atendimento

**Requisito:** RNF017 — Consistência das informações  
**Prioridade:** Alta  
**Tipo:** Funcional / Confiabilidade  

**Pré-condições:**
- O chatbot deve estar disponível para atendimento.

**Passos:**
1. Enviar uma pergunta ao chatbot.
2. Registrar a resposta fornecida.
3. Durante o mesmo atendimento, realizar novamente uma solicitação equivalente.
4. Comparar as informações apresentadas nas respostas.

**Resultado esperado:**
O chatbot deve fornecer informações consistentes e não deve apresentar
respostas contraditórias durante o atendimento.

**Status:** Não executado

---

## RNF018 — Experiência do usuário

### CT-048 — Verificar facilidade de utilização do chatbot

**Requisito:** RNF018 — Experiência do usuário  
**Prioridade:** Média  
**Tipo:** Usabilidade  

**Pré-condições:**
- O chatbot deve estar disponível para utilização.

**Passos:**
1. Iniciar um atendimento com o chatbot.
2. Realizar uma solicitação.
3. Seguir as orientações apresentadas durante o atendimento.
4. Avaliar a facilidade de compreensão e utilização do fluxo.

**Resultado esperado:**
A interação deve ser simples e intuitiva, permitindo que o cliente
compreenda facilmente as orientações fornecidas pelo chatbot.

**Status:** Não executado

---

## RNF019 — Registro do atendimento humano

### CT-049 — Disponibilizar histórico ao administrador após transferência

**Requisito:** RNF019 — Registro do atendimento humano  
**Prioridade:** Alta  
**Tipo:** Funcional / Integração  

**Pré-condições:**
- Deve existir uma conversa em andamento entre o cliente e o chatbot.
- O atendimento deve poder ser transferido para o administrador.

**Passos:**
1. Iniciar uma conversa com o chatbot.
2. Trocar mensagens durante o atendimento.
3. Transferir o atendimento para o administrador.
4. Acessar o atendimento como administrador.
5. Verificar o histórico da conversa anterior.

**Resultado esperado:**
O histórico realizado pelo chatbot deve permanecer disponível para o
administrador, permitindo a continuidade da conversa.

**Status:** Não executado

---

## Considerações Finais

Os casos de teste apresentados neste documento foram elaborados com base
nos requisitos funcionais e não funcionais definidos para o sistema.

A execução dos testes será realizada conforme as funcionalidades forem
implementadas e disponibilizadas para validação durante o desenvolvimento
do projeto.

Os resultados das execuções, evidências e eventuais defeitos encontrados
serão registrados e acompanhados durante o processo de testes.
