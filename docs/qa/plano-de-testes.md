# Plano de Testes

## 1. Objetivo

Este plano de testes tem como objetivo definir a estratégia de testes
para o sistema de atendimento por chatbot, estabelecendo o escopo,
os tipos de testes, o ambiente de execução, os critérios de entrada
e saída e a forma de registro de defeitos e evidências.

Os testes terão como finalidade verificar se as funcionalidades
implementadas estão de acordo com os requisitos funcionais e não
funcionais definidos para o sistema, além de identificar possíveis
defeitos durante o desenvolvimento.

---

## 2. Escopo dos Testes

Os testes abrangerão as funcionalidades e comportamentos definidos
nos requisitos funcionais e não funcionais do sistema.

### 2.1 Funcionalidades incluídas

Serão consideradas no escopo:

- Identificação do cliente;
- Atendimento automático;
- Identificação da intenção do cliente;
- Resposta às dúvidas frequentes;
- Consulta de informações do cliente;
- Recebimento e transcrição de áudios;
- Tratamento de mensagens fora do assunto;
- Geração de resumo da conversa;
- Transferência para atendimento humano;
- Registro das conversas.

### 2.2 Requisitos não funcionais

Também serão verificados, quando aplicáveis e testáveis no ambiente
disponível:

- Segurança e controle de acesso;
- Privacidade;
- Desempenho;
- Disponibilidade;
- Confiabilidade;
- Clareza das respostas;
- Linguagem natural;
- Integração com WhatsApp;
- Tratamento de erros;
- Rastreabilidade;
- Continuidade do atendimento;
- Armazenamento;
- Recuperação de falhas;
- Consistência das informações;
- Experiência do usuário.

---

## 3. Tipos de Teste

### 3.1 Testes Funcionais

Serão realizados testes funcionais para verificar se as funcionalidades
implementadas apresentam o comportamento esperado de acordo com os
requisitos funcionais e seus critérios de aceitação.

Serão considerados cenários positivos, negativos e fluxos alternativos.

### 3.2 Testes de Integração

Serão realizados testes para verificar a comunicação entre os
componentes do sistema, incluindo, quando aplicável, frontend,
backend, banco de dados, chatbot e serviços externos.

### 3.3 Testes de Interface

A interface web será verificada quanto ao funcionamento de seus
elementos e à apresentação adequada dos estados e informações
necessários para utilização do sistema.

### 3.4 Testes de Usabilidade

Serão realizadas verificações relacionadas à facilidade de utilização
e compreensão do sistema, considerando principalmente a clareza das
respostas e a interação do usuário com o chatbot e com a interface.

### 3.5 Testes de Segurança e Controle de Acesso

Serão verificados os comportamentos relacionados à identificação do
cliente, controle de acesso e proteção contra acesso indevido às
informações de outros clientes.

### 3.6 Testes de Regressão

Após correções ou alterações no sistema, funcionalidades previamente
testadas poderão ser executadas novamente para verificar se as
mudanças introduziram novos defeitos.

---

## 4. Ambiente de Teste

O ambiente de testes será atualizado conforme as tecnologias e
ambientes utilizados pela equipe durante o desenvolvimento.

### Aplicação
- Interface web;
- Chatbot;
- Backend;
- Banco de dados.

### Ferramentas
- GitHub — gerenciamento de código, issues e defeitos;
- Navegador web — execução dos testes da interface;
- WhatsApp — execução dos testes relacionados ao chatbot;
- Ferramentas adicionais poderão ser incluídas conforme a necessidade
  do projeto.

---

## 5. Requisitos e Funcionalidades a Serem Testados

Os testes serão elaborados com base nos requisitos funcionais e não
funcionais definidos pela equipe.

| Requisito | Funcionalidade |
|------------|----------------|
| RF001 | Identificação do cliente |
| RF002 | Atendimento automático |
| RF003 | Identificação da intenção do cliente |
| RF004 | Resposta às dúvidas frequentes |
| RF005 | Consulta de informações do cliente |
| RF006 | Recebimento e transcrição de áudios |
| RF007 | Tratamento de mensagens fora do assunto |
| RF008 | Resumo da conversa |
| RF009 | Transferência para atendimento humano |
| RF010 | Registro das conversas |

Cada requisito será associado posteriormente aos seus respectivos
casos de teste para garantir a rastreabilidade entre requisito,
implementação e teste.

---

## 6. Cenários de Teste

Os cenários serão derivados dos fluxos normais, fluxos alternativos
e critérios de aceitação definidos nos requisitos.

Serão considerados:

- Cenários de sucesso;
- Entradas inválidas;
- Fluxos alternativos;
- Situações de erro;
- Tentativas de acesso não autorizado;
- Informações inexistentes ou indisponíveis;
- Falhas na compreensão de mensagens;
- Falhas na transcrição de áudios;
- Transferência para atendimento humano;
- Persistência e recuperação do histórico das conversas.

Os passos detalhados, pré-condições e resultados esperados serão
documentados separadamente nos casos de teste.

---

## 7. Critérios de Entrada

A execução dos testes de uma funcionalidade poderá ser iniciada quando:

- A funcionalidade estiver implementada e disponível para teste;
- O requisito correspondente estiver definido;
- O ambiente necessário para execução estiver disponível;
- Os casos de teste correspondentes estiverem documentados;
- Não houver impedimentos conhecidos que impossibilitem a execução.

---

## 8. Critérios de Saída

Uma funcionalidade poderá ser considerada testada quando:

- Os casos de teste planejados tiverem sido executados;
- Os resultados obtidos estiverem registrados;
- Defeitos encontrados estiverem documentados;
- Defeitos impeditivos relacionados à funcionalidade tiverem sido
  corrigidos e retestados;
- Os critérios de aceitação do requisito tiverem sido verificados.

---

## 9. Riscos

Durante a execução dos testes poderão ocorrer:

- Funcionalidades ainda não implementadas;
- Alterações nos requisitos durante o desenvolvimento;
- Indisponibilidade do ambiente de testes;
- Problemas na integração entre os componentes;
- Dependência de serviços externos;
- Dados insuficientes para execução de determinados cenários;
- Tempo limitado para execução e regressão dos testes.

Os riscos identificados durante o projeto poderão ser adicionados
a esta seção.

---

## 10. Registro de Defeitos

Os defeitos identificados durante os testes serão registrados por
meio de issues no GitHub.

Sempre que aplicável, o registro deverá conter:

- Título do defeito;
- Requisito relacionado;
- Caso de teste relacionado;
- Pré-condições;
- Passos para reprodução;
- Resultado esperado;
- Resultado obtido;
- Evidências;
- Severidade;
- Status.

Após a correção, o cenário relacionado ao defeito deverá ser
executado novamente para verificar a correção.

---

## 11. Evidências

As evidências poderão incluir:

- Capturas de tela;
- Registros das conversas com o chatbot;
- Respostas de requisições;
- Logs;
- Vídeos, quando necessários;
- Outras informações que comprovem o resultado obtido.

As evidências deverão ser associadas aos respectivos casos de teste
ou defeitos sempre que necessário.

---

## 12. Resultado Esperado

Espera-se que a execução dos testes permita verificar a conformidade
do sistema com os requisitos definidos, identificar defeitos antes
da entrega e fornecer evidências sobre o funcionamento das
funcionalidades implementadas.

O plano poderá ser atualizado durante o desenvolvimento conforme
novos requisitos, funcionalidades, riscos ou necessidades de teste
forem identificados.
