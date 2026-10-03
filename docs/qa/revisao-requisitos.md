# Revisão dos Requisitos — Feedback de QA

## 1. Identificação

**Issue QA:** #50  
**Documento revisado:** Documento de Requisitos — Interface Web + Chatbot via WhatsApp  
**Responsável pela revisão:** QA  
**Status:** Revisão concluída após atualização dos requisitos

---

## 2. Objetivo

Este documento registra a revisão dos requisitos funcionais e não
funcionais do sistema sob a perspectiva de QA.

A análise considera principalmente:

- clareza;
- completude;
- testabilidade;
- critérios de aceitação;
- mensurabilidade;
- cobertura da interface web;
- ambiguidades;
- possíveis redundâncias.

Após a revisão inicial realizada pela QA, o documento de requisitos
foi atualizado pela equipe responsável.

Esta versão registra também a verificação das correções realizadas,
preservando os apontamentos iniciais para fins de rastreabilidade.

O objetivo da QA não é definir novos requisitos para o sistema, mas
identificar pontos que possam dificultar sua implementação ou
validação.

---

# 3. Resultado geral da revisão

A nova versão do documento apresentou melhorias significativas em
relação à versão analisada inicialmente.

Entre as principais alterações identificadas estão:

- inclusão de requisitos funcionais específicos da interface
  administrativa;
- definição do escopo de atendimento do chatbot;
- definição das intenções iniciais;
- definição das fontes oficiais de informação;
- detalhamento das informações consultáveis pelo cliente;
- definição do fluxo de cadastro de novos contatos;
- inclusão de mecanismos adicionais de validação de identidade;
- inclusão de requisitos de autenticação e controle administrativo;
- inclusão de regras de negócio vinculadas aos requisitos;
- inclusão de critérios Gherkin;
- definição de referência de desempenho;
- definição de referência de usuários simultâneos para escalabilidade.

A maior parte dos apontamentos funcionais identificados durante a
revisão inicial foi tratada na nova versão.

**Resultado da revisão de QA: Aprovado com observações.**

---

# 4. Cobertura da interface web

## Revisão inicial

O documento possuía como título "Interface Web + Chatbot via WhatsApp",
porém os requisitos funcionais apresentados estavam concentrados
principalmente no funcionamento do chatbot.

Não estavam claramente definidos os requisitos funcionais específicos
da interface administrativa.

## Verificação após atualização

**Situação: Resolvido**

Foram adicionados requisitos específicos para a interface
administrativa:

- RF018 — Autenticação do administrador;
- RF019 — Recuperação de senha do administrador;
- RF020 — Painel de atendimentos;
- RF021 — Consulta do atendimento;
- RF022 — Visualização do resumo do atendimento;
- RF023 — Assumir atendimento;
- RF024 — Registro de solicitação sem administrador disponível;
- RF025 — Perfil do administrador;
- RF026 — Confirmação de exclusão;
- RF027 — Estados da interface administrativa.

O apontamento referente à ausência de requisitos funcionais da
interface web foi considerado resolvido.

---

# 5. Revisão dos Requisitos Funcionais

## RF001 — Identificação do cliente

### Revisão inicial

Não estavam claramente definidos os dados adicionais necessários caso
o número de WhatsApp não estivesse associado a um cliente cadastrado.

### Verificação após atualização

**Situação: Resolvido**

A nova versão determina que, caso o número não esteja cadastrado,
deverá ser iniciado o fluxo de cadastro de novo contato.

O RF015 complementa o comportamento especificando a solicitação de:

- nome completo;
- objetivo principal;
- e-mail opcional.

Também foram adicionadas regras de negócio relacionadas à identificação
pelo WhatsApp e ao cadastro de novos contatos.

---

## RF002 — Atendimento automático

### Revisão inicial

O critério de aceitação determinava que o chatbot deveria responder
automaticamente às solicitações dentro do seu escopo, porém esse
escopo não estava claramente delimitado.

### Verificação após atualização

**Situação: Resolvido**

Foi adicionado o RF011 — Definição do escopo de atendimento.

O requisito estabelece como parte do escopo solicitações relacionadas
a:

- agendamento de sessões;
- cancelamento e remarcação;
- consulta de planos;
- valores;
- horários disponíveis;
- lembretes de pagamento;
- dúvidas frequentes sobre a consultoria ou métodos de treinamento.

Também foram definidos comportamentos para solicitações fora do
escopo.

---

## RF003 — Identificação da intenção do cliente

### Revisão inicial

Não estava claro se as intenções apresentadas eram apenas exemplos ou
se representavam o conjunto inicial de intenções do sistema.

### Verificação após atualização

**Situação: Resolvido**

A versão revisada define explicitamente as intenções iniciais:

- saudação;
- consulta de preços e planos;
- agendamento de sessão;
- cancelamento ou remarcação de sessão;
- consulta da situação financeira;
- solicitação de atendimento humano.

Também informa que a lista poderá ser ampliada conforme a evolução do
projeto.

---

## RF004 — Resposta às dúvidas frequentes

### Revisão inicial

Não estava claramente definida qual fonte deveria ser utilizada para
determinar se uma resposta estava correta.

### Verificação após atualização

**Situação: Resolvido**

A nova versão determina que as respostas devem utilizar informações
previamente disponibilizadas na base oficial de conhecimento.

Também foi criada a RN009 — Fonte oficial das informações do serviço,
estabelecendo como referência a base de conhecimento ou documento
oficial fornecido pelo Personal Trainer.

---

## RF005 — Consulta de informações do cliente

### Revisão inicial

Não estavam especificadas claramente quais informações poderiam ser
consultadas pelo cliente.

### Verificação após atualização

**Situação: Resolvido**

A versão revisada especifica informações que poderão ser consultadas,
incluindo:

- nome;
- plano atual;
- situação financeira;
- sessões realizadas recentemente;
- próximas sessões agendadas.

Também foram adicionadas regras relacionadas à proteção das informações
financeiras e à fonte oficial dos dados transacionais.

---

## RF006 — Recebimento e transcrição de áudios

### Revisão inicial

O termo "áudio compreensível" apresentava caráter subjetivo e não
estava definido o comportamento esperado em diferentes situações de
falha.

### Verificação após atualização

**Situação: Melhorado**

A versão atual detalha o tratamento de falhas:

- caso o áudio não possa ser transcrito, deverá ser solicitada uma
  mensagem de texto;
- caso esteja inaudível, deverá ser solicitado um novo envio.

O fluxo está mais claro e permite a elaboração de cenários de teste.

Permanece como observação para refinamento futuro a possibilidade de
definir de forma mais objetiva o que caracteriza um áudio
"compreensível".

---

## RF007 — Tratamento de mensagens fora do assunto

### Revisão inicial

A validação dependia de uma definição clara do escopo do chatbot.

### Verificação após atualização

**Situação: Resolvido**

A versão revisada especifica assuntos que não fazem parte do escopo,
incluindo:

- orientações específicas sobre dietas;
- diagnósticos de lesões ou dores;
- atendimento psicológico;
- prescrição de treinos avançados sem avaliação física presencial.

O RF011 também passou a definir o escopo de atendimento e a RN004
estabelece o comportamento esperado para solicitações fora dele.

---

## RF008 — Resumo da conversa

### Revisão inicial

O critério determinava que o resumo deveria apresentar as "principais
informações necessárias", sem definir seu conteúdo mínimo.

### Verificação após atualização

**Situação: Resolvido**

A nova versão especifica que o resumo deve conter:

- assunto principal;
- dúvidas;
- solicitações;
- informações relevantes identificadas durante a conversa.

A alteração torna o requisito mais adequado para elaboração de casos
de teste.

---

## RF009 — Transferência para atendimento humano

### Revisão inicial

Não estava completamente definido o comportamento quando nenhum
administrador estivesse disponível.

### Verificação após atualização

**Situação: Melhorado**

Foi criado o RF024 — Registro de solicitação sem administrador
disponível.

A nova versão determina que o cliente deverá ser informado e que a
solicitação deverá permanecer registrada para atendimento posterior.

Como refinamento futuro, poderá ser detalhada a forma como essas
solicitações pendentes serão apresentadas ao administrador.

---

## RF010 — Registro das conversas

### Revisão inicial

Foi sugerido maior alinhamento com o RNF010 — Rastreabilidade.

### Verificação após atualização

**Situação: Resolvido**

O RF010 estabelece que as mensagens enviadas e recebidas devem
permanecer vinculadas ao atendimento correspondente.

O RNF010 complementa esse comportamento especificando informações de
rastreabilidade, como:

- cliente;
- data;
- horário;
- mensagem;
- resposta;
- tipo de atendimento.

---

# 6. Novos requisitos funcionais

Durante a atualização do documento também foram adicionados novos
requisitos:

- RF011 — Definição do escopo de atendimento;
- RF012 — Gestão das intenções de atendimento;
- RF013 — Consulta da fonte oficial de informações;
- RF014 — Consulta dos dados transacionais;
- RF015 — Cadastro de novo contato;
- RF016 — Validação adicional de identidade;
- RF017 — Consulta das informações do cliente;
- RF018 — Autenticação do administrador;
- RF019 — Recuperação de senha do administrador;
- RF020 — Painel de atendimentos;
- RF021 — Consulta do atendimento;
- RF022 — Visualização do resumo do atendimento;
- RF023 — Assumir atendimento;
- RF024 — Registro de solicitação sem administrador disponível;
- RF025 — Perfil do administrador;
- RF026 — Confirmação de exclusão;
- RF027 — Estados da interface administrativa.

A inclusão desses requisitos aumentou a cobertura funcional do
documento, principalmente em relação à interface administrativa.

---

# 7. Revisão dos Requisitos Não Funcionais

## RNF001 — Segurança

### Revisão inicial

O requisito possuía descrição ampla e poucos comportamentos diretamente
verificáveis.

### Verificação após atualização

**Situação: Melhorado**

A nova versão passou a contar com requisitos funcionais relacionados a:

- autenticação do administrador;
- identificação do cliente;
- validação adicional de identidade;
- controle de acesso.

Esses requisitos complementam os aspectos de segurança.

---

## RNF002 — Privacidade

### Revisão inicial

O requisito mencionava normas de proteção de dados aplicáveis, mas não
definia critérios específicos de validação.

### Verificação após atualização

**Situação: Observação mantida**

O requisito permanece abrangente.

A definição de critérios mais específicos de privacidade poderá ser
realizada em refinamentos futuros do documento.

---

## RNF003 — Desempenho

### Revisão inicial

O requisito utilizava a expressão "tempo adequado", sem apresentar
uma referência mensurável.

### Verificação após atualização

**Situação: Resolvido**

Foi adicionada como referência do projeto a faixa de **2 a 5 segundos
por interação**, considerando a comunicação com a API do WhatsApp e o
processamento do modelo de linguagem.

A alteração permite planejar testes de desempenho utilizando uma
referência objetiva.

---

## RNF004 — Disponibilidade

### Revisão inicial

O requisito utilizava a expressão "período definido para funcionamento"
sem especificar esse período.

### Verificação após atualização

**Situação: Observação mantida**

O período de disponibilidade ainda não está explicitamente definido no
requisito.

Esse ponto poderá ser especificado em refinamentos futuros conforme a
definição do funcionamento do serviço.

---

## RNF005 — Confiabilidade

### Revisão inicial

O requisito utilizava conceitos amplos relacionados à consistência e
perda de informações.

### Verificação após atualização

**Situação: Observação mantida**

O requisito continua apresentando caráter geral.

Métricas específicas de confiabilidade poderão ser definidas
posteriormente caso sejam necessárias para testes de desempenho ou
confiabilidade.

---

## RNF006 — Clareza das respostas

### Revisão inicial

Os conceitos de respostas "claras", "objetivas" e "compreensíveis"
possuem caráter subjetivo.

### Verificação após atualização

**Situação: Observação mantida**

O requisito poderá ser avaliado principalmente por meio de testes de
usabilidade e avaliação das respostas apresentadas aos usuários.

---

## RNF007 — Linguagem natural

### Revisão inicial

Não estavam suficientemente delimitadas as variações de linguagem
esperadas.

### Verificação após atualização

**Situação: Melhorado**

A versão revisada passou a citar:

- abreviações;
- expressões informais;
- variações de uma mesma pergunta.

Os exemplos facilitam a elaboração de cenários de teste para linguagem
natural.

---

## RNF008 — Integração com WhatsApp

### Revisão inicial

Foi sugerido alinhar os tipos de conteúdo suportados com os requisitos
funcionais.

### Verificação após atualização

**Situação: Resolvido**

O requisito define explicitamente o envio e recebimento de mensagens e
áudios por meio do WhatsApp.

O RF006 também especifica o tratamento das mensagens de áudio.

---

## RNF009 — Tratamento de erros

### Revisão inicial

O comportamento esperado em diferentes situações de erro não estava
suficientemente detalhado.

### Verificação após atualização

**Situação: Melhorado**

A versão revisada estabelece comportamentos para falhas temporárias no
modelo de linguagem ou banco de dados e para tipos de mídia não
suportados.

O sistema deverá realizar novas tentativas quando possível e informar
ao cliente quando o formato enviado não for suportado.

---

## RNF010 — Rastreabilidade

### Revisão inicial

Foi sugerido seu alinhamento com o RF010.

### Verificação após atualização

**Situação: Resolvido**

O requisito especifica informações a serem registradas:

- cliente;
- data;
- horário;
- mensagem;
- resposta;
- tipo de atendimento.

O RF010 complementa esse comportamento vinculando as mensagens ao
atendimento correspondente.

---

## RNF011 — Escalabilidade

### Revisão inicial

Não existia uma referência de quantidade de usuários simultâneos.

### Verificação após atualização

**Situação: Melhorado**

Foi adicionada como referência do projeto a capacidade de **50 a 100
clientes utilizando o serviço simultaneamente**.

Como refinamento futuro, o limite aceitável de degradação poderá ser
relacionado às métricas de desempenho estabelecidas no RNF003.

---

## RNF012 — Manutenibilidade

### Revisão inicial

O requisito apresentava caráter amplo e não possuía critérios
diretamente mensuráveis.

### Verificação após atualização

**Situação: Observação mantida**

O requisito continua apresentando uma definição geral de
manutenibilidade.

Critérios técnicos mais específicos poderão ser definidos conforme a
evolução da arquitetura do projeto.

---

## RNF013 — Continuidade do atendimento

### Revisão inicial

Foi observada sobreposição com requisitos relacionados à transferência
e preservação do histórico.

### Verificação após atualização

**Situação: Aceito como requisito complementar**

O RNF013 estabelece a preservação do histórico durante a transferência
do chatbot para o administrador.

O comportamento é consistente com os demais requisitos relacionados à
transferência para atendimento humano.

---

## RNF014 — Controle de acesso

### Revisão inicial

As condições de autenticação e autorização ainda não estavam
suficientemente representadas pelos requisitos funcionais.

### Verificação após atualização

**Situação: Resolvido**

A versão revisada adicionou requisitos que complementam o controle de
acesso.

O RF018 define a autenticação do administrador por e-mail e senha.

Os RF001, RF005 e RF016 tratam da identificação, acesso às informações
do cliente e validação adicional de identidade.

---

## RNF015 — Armazenamento

### Revisão inicial

Os termos "organizada" e "segura" possuíam caráter amplo.

### Verificação após atualização

**Situação: Melhorado**

Outros requisitos passaram a estabelecer que os dados transacionais
utilizam PostgreSQL por meio da Web API e que as mensagens permanecem
vinculadas aos respectivos atendimentos.

Critérios adicionais de segurança de armazenamento poderão ser
refinados posteriormente.

---

## RNF016 — Recuperação de falhas

### Revisão inicial

O requisito utilizava a expressão "quando possível" sem especificar
condições para novas tentativas.

### Verificação após atualização

**Situação: Observação mantida**

O comportamento geral de nova tentativa está definido, porém detalhes
como quantidade de tentativas e intervalos não foram especificados.

Esses parâmetros poderão ser definidos conforme a implementação da
integração.

---

## RNF017 — Consistência das informações

### Revisão inicial

Não estava claramente definida a fonte de referência para validar a
consistência das informações.

### Verificação após atualização

**Situação: Resolvido**

A nova versão determina que os dados transacionais de clientes, sessões
e agendamentos utilizem o PostgreSQL por meio da Web API como fonte
oficial.

Também foram criadas regras de negócio específicas para as fontes
oficiais das informações.

---

## RNF018 — Experiência do usuário

### Revisão inicial

Os conceitos de interface "simples" e "intuitiva" possuem caráter
subjetivo.

### Verificação após atualização

**Situação: Melhorado**

A versão revisada passou a incluir explicitamente a experiência da
interface administrativa.

O RF027 também define estados da interface para situações de
carregamento, ausência de atendimentos e confirmação de ações.

A avaliação dos aspectos subjetivos deste requisito poderá ser
complementada pelo teste de usabilidade previsto para a Sprint 2.

---

## RNF019 — Registro do atendimento humano

### Revisão inicial

Foi identificada possível sobreposição com requisitos relacionados à
transferência e continuidade do atendimento.

### Verificação após atualização

**Situação: Aceito como requisito complementar**

O requisito mantém a exigência de preservação do histórico quando o
atendimento for transferido ao administrador.

O comportamento permanece consistente com os demais requisitos
relacionados ao atendimento humano.

---

# 8. Regras de negócio

## Verificação após atualização

**Situação: Implementado**

A versão revisada passou a apresentar dez regras de negócio:

- RN001 — Identificação pelo WhatsApp;
- RN002 — Proteção das informações financeiras;
- RN003 — Fonte de verdade das marcações;
- RN004 — Atendimento fora do escopo;
- RN005 — Transferência para atendimento humano;
- RN006 — Novas intenções;
- RN007 — Cadastro de novo contato;
- RN008 — Validação adicional de identidade;
- RN009 — Fonte oficial das informações do serviço;
- RN010 — Fonte oficial dos dados transacionais.

As regras estão vinculadas aos requisitos correspondentes.

---

# 9. Critérios Gherkin

## Verificação após atualização

**Situação: Implementado**

A versão atual passou a utilizar cenários no formato:

- Dado;
- Quando;
- Então.

Os critérios Gherkin foram adicionados aos requisitos e também às
regras de negócio.

A estrutura facilita a compreensão do comportamento esperado e poderá
ser utilizada como base para a elaboração dos casos de teste de QA.

---

# 10. Observações para refinamentos futuros

Após a atualização, alguns pontos ainda podem ser refinados conforme a
evolução do projeto.

As principais observações são:

1. definir, caso necessário, critérios mais objetivos para considerar
   um áudio compreensível;
2. detalhar como solicitações aguardando atendimento humano serão
   posteriormente apresentadas ao administrador;
3. definir critérios mais específicos de privacidade;
4. definir o período esperado de disponibilidade do chatbot;
5. estabelecer métricas adicionais de confiabilidade, caso necessárias;
6. utilizar o teste de usabilidade para avaliar clareza e compreensão
   das respostas;
7. relacionar a escalabilidade às métricas de desempenho, caso sejam
   realizados testes de carga;
8. definir critérios técnicos de manutenibilidade conforme a evolução
   da arquitetura;
9. detalhar parâmetros de novas tentativas em situações de falha,
   conforme a implementação.

Esses itens são registrados como **observações para refinamentos
futuros** e não impedem a aprovação da versão atual dos requisitos pela
QA.

---

# 11. Conclusão

A nova versão do documento tratou a maior parte dos apontamentos
levantados durante a revisão inicial de QA.

As alterações aumentaram a clareza, cobertura e testabilidade dos
requisitos, principalmente por meio da:

- definição do escopo do chatbot;
- especificação das intenções iniciais;
- definição das fontes oficiais de informação;
- inclusão dos requisitos da interface administrativa;
- inclusão das regras de negócio;
- utilização de critérios Gherkin;
- definição de referências para desempenho e escalabilidade.

Os pontos restantes foram registrados como observações para
refinamentos futuros e não foram considerados bloqueadores para a
aprovação da versão atual.

**Resultado final da revisão de QA: Aprovado com observações.**

A revisão referente à Issue QA #50 é considerada concluída.
