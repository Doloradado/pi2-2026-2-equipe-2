# Plano de Testes

## 1. Objetivo

Este plano de testes tem como objetivo definir a estratégia de testes
para o sistema de atendimento por chatbot e interface administrativa,
estabelecendo o escopo, os tipos de testes, o ambiente de execução,
os critérios de entrada e saída e a forma de registro de defeitos e
evidências.

Os testes terão como finalidade verificar se as funcionalidades
implementadas estão de acordo com os requisitos funcionais e não
funcionais definidos para o sistema, suas regras de negócio e critérios
de aceitação, além de identificar possíveis defeitos durante o
desenvolvimento.

O plano será atualizado ao longo do projeto conforme novos requisitos,
integrações e funcionalidades forem disponibilizados.

---

## 2. Escopo dos Testes

Os testes abrangerão as funcionalidades e comportamentos definidos
nos requisitos funcionais, requisitos não funcionais e regras de
negócio do sistema.

### 2.1 Chatbot e atendimento

Serão consideradas no escopo:

- Identificação do cliente;
- Atendimento automático;
- Identificação da intenção do cliente;
- Resposta às dúvidas frequentes;
- Consulta de informações do cliente;
- Recebimento e transcrição de áudios;
- Tratamento de mensagens fora do escopo;
- Geração de resumo da conversa;
- Transferência para atendimento humano;
- Registro das conversas;
- Definição do escopo de atendimento;
- Gestão das intenções;
- Consulta da fonte oficial de informações;
- Consulta dos dados transacionais;
- Cadastro de novo contato;
- Validação adicional de identidade.

### 2.2 Interface administrativa

Também fazem parte do escopo:

- Autenticação do administrador;
- Recuperação de senha;
- Painel de atendimentos;
- Consulta dos detalhes de um atendimento;
- Visualização do resumo do atendimento;
- Ação de assumir atendimento;
- Registro de solicitações sem administrador disponível;
- Visualização do perfil do administrador;
- Confirmação antes de ações de exclusão;
- Estados da interface administrativa, incluindo carregamento,
  ausência de dados e confirmação de ações.

### 2.3 Requisitos não funcionais

Também serão verificados, quando aplicáveis e testáveis no ambiente
disponível:

- Segurança;
- Privacidade;
- Desempenho;
- Disponibilidade;
- Confiabilidade;
- Clareza das respostas;
- Linguagem natural;
- Integração com WhatsApp;
- Tratamento de erros;
- Rastreabilidade;
- Escalabilidade;
- Manutenibilidade;
- Continuidade do atendimento;
- Controle de acesso;
- Armazenamento;
- Recuperação de falhas;
- Consistência das informações;
- Experiência do usuário;
- Registro do atendimento humano.

---

## 3. Tipos de Teste

### 3.1 Testes Funcionais

Serão realizados testes funcionais para verificar se as funcionalidades
implementadas apresentam o comportamento esperado de acordo com os
requisitos funcionais, critérios de aceitação, regras de negócio e
cenários Gherkin definidos.

Serão considerados cenários positivos, negativos e fluxos alternativos.

### 3.2 Testes de Integração

Serão realizados testes para verificar a comunicação entre os
componentes do sistema, incluindo, quando aplicável:

- frontend;
- backend;
- banco de dados PostgreSQL;
- chatbot;
- Web API;
- WhatsApp;
- outros serviços externos utilizados pelo projeto.

Durante a Sprint 2, será dada atenção especial às primeiras integrações
entre frontend, backend e banco de dados.

### 3.3 Testes de Interface

A interface web administrativa será verificada quanto ao funcionamento
de seus elementos, navegação e apresentação adequada dos dados e
estados previstos nos requisitos.

Serão considerados, quando implementados:

- carregamento;
- ausência de dados;
- mensagens de erro;
- mensagens de sucesso;
- confirmações de ações.

### 3.4 Testes de Usabilidade

Serão realizadas verificações relacionadas à facilidade de utilização
e compreensão do sistema.

A avaliação incluirá o chatbot e a interface administrativa.

Durante a Sprint 2 também será realizado teste de usabilidade do
protótipo de alta fidelidade do fluxo principal, com registro das
observações e sugestões de melhoria em relatório específico.

### 3.5 Testes de Segurança e Controle de Acesso

Serão verificados comportamentos relacionados a:

- identificação do cliente;
- validação adicional de identidade;
- acesso às informações do próprio cliente;
- impedimento de acesso às informações de outros clientes;
- autenticação do administrador;
- restrição das funcionalidades administrativas a usuários
  autenticados.

### 3.6 Testes de Desempenho e Carga

Quando o ambiente permitir, serão realizados testes relacionados ao
desempenho e à escalabilidade do sistema.

Como referências definidas nos requisitos, serão considerados:

- tempo ideal de resposta entre 2 e 5 segundos por interação;
- suporte de referência entre 50 e 100 clientes utilizando o serviço
  simultaneamente.

### 3.7 Testes de Regressão

Após correções ou alterações no sistema, funcionalidades previamente
testadas poderão ser executadas novamente para verificar se as
mudanças introduziram novos defeitos.

O resultado dos retestes deverá preservar o histórico da execução
anterior.

---

## 4. Ambiente de Teste

O ambiente de testes será atualizado conforme as tecnologias e
ambientes utilizados pela equipe durante o desenvolvimento.

### Aplicação

- Interface web;
- Chatbot;
- Backend;
- Web API;
- Banco de dados PostgreSQL;
- Integração com WhatsApp, quando disponível.

### Ambiente de desenvolvimento e integração

O projeto poderá ser executado utilizando serviços separados em
contêineres, conforme a arquitetura definida pela equipe.

Durante os testes de integração serão verificadas, quando disponíveis,
as comunicações entre:

Frontend → Backend → Banco de dados

e

Cliente → Chatbot → Serviços/API → Banco de dados

### Ferramentas

- GitHub — gerenciamento de código, issues, defeitos e evidências;
- Git — controle de versão;
- Docker — execução dos serviços em contêineres;
- Navegador web — execução dos testes da interface;
- WhatsApp — execução dos testes relacionados ao chatbot, quando a
  integração estiver disponível;
- Swagger ou ferramenta equivalente — validação das rotas do backend,
  quando aplicável;
- Ferramentas adicionais poderão ser incluídas conforme a necessidade
  do projeto.

---

## 5. Requisitos e Funcionalidades a Serem Testados

Os testes serão elaborados com base nos requisitos funcionais e não
funcionais definidos pela equipe.

### 5.1 Requisitos funcionais

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
| RF011 | Definição do escopo de atendimento |
| RF012 | Gestão das intenções de atendimento |
| RF013 | Consulta da fonte oficial de informações |
| RF014 | Consulta dos dados transacionais |
| RF015 | Cadastro de novo contato |
| RF016 | Validação adicional de identidade |
| RF017 | Consulta das informações do cliente |
| RF018 | Autenticação do administrador |
| RF019 | Recuperação de senha do administrador |
| RF020 | Painel de atendimentos |
| RF021 | Consulta do atendimento |
| RF022 | Visualização do resumo do atendimento |
| RF023 | Assumir atendimento |
| RF024 | Registro de solicitação sem administrador disponível |
| RF025 | Perfil do administrador |
| RF026 | Confirmação de exclusão |
| RF027 | Estados da interface administrativa |

Os casos de teste deverão manter a rastreabilidade com os requisitos
correspondentes.

### 5.2 Requisitos não funcionais

Os casos relacionados aos requisitos não funcionais serão executados
conforme a disponibilidade do ambiente e a possibilidade de
mensuração dos critérios estabelecidos.

Quando um requisito não possuir condições suficientes para execução
objetiva, a limitação deverá ser registrada no resultado do teste.

### 5.3 Regras de negócio

As regras de negócio RN001 a RN010 também serão consideradas na
elaboração e execução dos casos de teste relacionados aos respectivos
requisitos funcionais.

Os cenários Gherkin definidos no documento de requisitos poderão ser
utilizados como referência para derivação dos casos de teste.

---

## 6. Estratégia de Testes da Sprint 2

Durante a Sprint 2, a atividade de QA terá como foco:

- elaboração e/ou atualização de casos de teste relacionados aos
  requisitos considerados essenciais para o funcionamento do sistema;
- execução de pelo menos 5 casos de teste desses requisitos conforme
  as funcionalidades forem disponibilizadas;
- teste de usabilidade do protótipo de alta fidelidade;
- elaboração de relatório com sugestões de melhoria do protótipo;
- definição, em conjunto com Backend 1, dos dados de carga inicial
  necessários para execução dos casos;
- validação das funcionalidades entregues pelas demais áreas;
- validação das primeiras integrações entre frontend, backend e banco
  de dados;
- execução de retestes após correções identificadas pela QA.

A seleção dos casos prioritários deverá considerar os fluxos centrais
do sistema, riscos, dependências entre funcionalidades e impacto de
possíveis falhas.

---

## 7. Dados de Teste

Os dados necessários para execução dos casos deverão ser definidos
conforme os cenários planejados.

Durante a Sprint 2, a QA deverá alinhar com a equipe responsável pelo
Backend 1 os dados que deverão estar disponíveis no script de carga
inicial do banco de dados.

Quando aplicável, deverão existir dados suficientes para representar:

- clientes cadastrados;
- clientes com diferentes informações associadas;
- planos;
- situação financeira;
- sessões;
- agendamentos;
- atendimentos;
- históricos de mensagens;
- atendimentos em diferentes estados;
- administradores;
- demais entidades necessárias aos casos selecionados.

Os dados deverão permitir a execução de cenários positivos, negativos
e alternativos sem depender da criação manual de toda a massa antes
de cada execução.

---

## 8. Cenários de Teste

Os cenários serão derivados dos:

- fluxos normais;
- fluxos alternativos;
- critérios de aceitação;
- critérios Gherkin;
- regras de negócio;
- requisitos não funcionais aplicáveis.

Serão considerados:

- cenários de sucesso;
- entradas inválidas;
- fluxos alternativos;
- situações de erro;
- tentativas de acesso não autorizado;
- informações inexistentes ou indisponíveis;
- falhas na compreensão de mensagens;
- falhas na transcrição de áudios;
- transferência para atendimento humano;
- persistência e recuperação do histórico;
- autenticação do administrador;
- estados da interface;
- integração entre frontend, backend e banco de dados.

Os passos detalhados, pré-condições, dados necessários e resultados
esperados serão documentados separadamente nos casos de teste.

---

## 9. Critérios de Entrada

A execução dos testes de uma funcionalidade poderá ser iniciada quando:

- A funcionalidade estiver implementada e disponível para teste;
- O requisito correspondente estiver definido;
- Os critérios de aceitação estiverem disponíveis;
- O ambiente necessário para execução estiver disponível;
- Os dados necessários ao cenário estiverem disponíveis;
- Os casos de teste correspondentes estiverem documentados;
- Não houver impedimentos conhecidos que impossibilitem a execução.

---

## 10. Critérios de Saída

Uma funcionalidade poderá ser considerada testada quando:

- Os casos de teste planejados tiverem sido executados;
- Os resultados obtidos estiverem registrados;
- As evidências necessárias estiverem associadas aos testes;
- Defeitos encontrados estiverem documentados;
- Defeitos impeditivos relacionados à funcionalidade tiverem sido
  corrigidos e retestados;
- Os critérios de aceitação do requisito tiverem sido verificados.

---

## 11. Riscos

Durante a execução dos testes poderão ocorrer:

- Funcionalidades ainda não implementadas;
- Alterações nos requisitos durante o desenvolvimento;
- Indisponibilidade do ambiente de testes;
- Problemas na integração entre os componentes;
- Dependência de serviços externos;
- Indisponibilidade ou limitações da integração com WhatsApp;
- Dados insuficientes para execução de determinados cenários;
- Ausência de dados necessários no script de carga inicial;
- Dependência entre entregas de frontend e backend;
- Critérios ainda subjetivos em alguns requisitos não funcionais;
- Tempo limitado para execução e regressão dos testes.

Os riscos identificados durante o projeto poderão ser adicionados a
esta seção.

---

## 12. Registro de Defeitos

Os defeitos identificados durante os testes serão registrados por
meio de issues no GitHub.

Sempre que aplicável, o registro deverá conter:

- Título do defeito;
- Requisito relacionado;
- Caso de teste relacionado;
- Pré-condições;
- Dados utilizados;
- Passos para reprodução;
- Resultado esperado;
- Resultado obtido;
- Evidências;
- Severidade;
- Status.

Após a correção, o cenário relacionado ao defeito deverá ser executado
novamente para verificar a correção.

---

## 13. Evidências

As evidências poderão incluir:

- Capturas de tela;
- Registros das conversas com o chatbot;
- Respostas de requisições;
- Logs;
- Resultados apresentados pela interface;
- Registros do banco de dados, quando necessários;
- Vídeos, quando necessários;
- Outras informações que comprovem o resultado obtido.

As evidências deverão ser associadas aos respectivos casos de teste ou
defeitos sempre que necessário.

---

## 14. Rastreabilidade

Sempre que possível, deverá ser mantida a relação entre:

Requisito → Regra de negócio → Issue de desenvolvimento → Caso de teste
→ Resultado → Evidência → Defeito, quando existente.

Essa rastreabilidade permitirá verificar quais requisitos foram
implementados, testados e validados durante o desenvolvimento.

---

## 15. Resultado Esperado

Espera-se que a execução dos testes permita verificar a conformidade
do sistema com os requisitos definidos, identificar defeitos antes da
entrega e fornecer evidências sobre o funcionamento das funcionalidades
implementadas.

O plano poderá ser atualizado durante o desenvolvimento conforme novos
requisitos, funcionalidades, riscos, integrações ou necessidades de
teste forem identificados.
