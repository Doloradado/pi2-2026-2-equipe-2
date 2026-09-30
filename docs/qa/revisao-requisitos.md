# Revisão dos Requisitos — Feedback de QA

## 1. Objetivo

Este documento apresenta uma revisão dos requisitos funcionais e não
funcionais do sistema sob a perspectiva de QA.

O objetivo é identificar pontos ambíguos, incompletos ou não mensuráveis
que possam dificultar posteriormente a elaboração e execução dos casos
de teste.

As observações apresentadas não têm como objetivo definir novos
requisitos, mas indicar pontos que precisam ser esclarecidos ou
detalhados pela equipe responsável pelos requisitos.

---

## 2. Observações gerais

### 2.1. Requisitos da interface web

O documento é referente à "Interface Web + Chatbot via WhatsApp",
porém os requisitos funcionais estão concentrados principalmente nas
funcionalidades do chatbot.

Existem funcionalidades envolvendo o Administrador, mas não estão
detalhadas as funcionalidades que deverão estar disponíveis na
interface web.

### Impacto para QA

Sem esses requisitos, não é possível definir completamente quais
comportamentos do frontend deverão ser validados.

### Sugestão

Levantar com a equipe quais funcionalidades fazem parte da interface
web e criar requisitos funcionais específicos para elas.

Exemplos de pontos que podem precisar de requisitos, caso façam parte
do escopo definido pela equipe:

- autenticação do administrador;
- visualização de atendimentos;
- visualização de clientes;
- consulta ao histórico de conversas;
- abertura dos detalhes de um atendimento;
- recebimento de atendimentos transferidos pelo chatbot;
- ações disponíveis ao administrador durante um atendimento.

Esses itens devem ser confirmados com a equipe antes de serem
transformados em requisitos.

---

## 3. Revisão dos Requisitos Funcionais

### RF001 — Identificação do cliente

**Ponto identificado:**

No fluxo alternativo é informado que, caso o número de WhatsApp não
esteja cadastrado, o chatbot deverá solicitar "informações adicionais
para identificação".

Entretanto, não é especificado quais informações serão solicitadas.

Também é citado na descrição "outro mecanismo de identificação
definido pelo sistema", mas esse mecanismo não é definido.

**Impacto para QA:**

Não é possível determinar objetivamente quais informações o chatbot
deve solicitar nem qual comportamento deve ser considerado correto
para identificação alternativa.

**Sugestão:**

Especificar quais dados são utilizados para identificar um cliente
não reconhecido pelo número de WhatsApp e, caso exista outro mecanismo
de identificação, descrevê-lo.

---

### RF002 — Atendimento automático

**Ponto identificado:**

O critério de aceitação informa que o chatbot deve responder às
solicitações que estejam "dentro de seu escopo", porém o escopo de
atendimento não está especificado.

**Impacto para QA:**

Não é possível determinar quais assuntos obrigatoriamente devem ser
reconhecidos e respondidos pelo chatbot.

**Sugestão:**

Definir quais assuntos, categorias ou tipos de solicitação fazem parte
do escopo de atendimento automático.

---

### RF003 — Identificação da intenção do cliente

**Ponto identificado:**

O requisito apresenta exemplos de intenções, como preço,
funcionamento, prazo, pagamento e atendimento.

Entretanto, não fica claro se essa lista representa todas as intenções
que o sistema deverá reconhecer ou apenas exemplos.

**Impacto para QA:**

Não é possível determinar o conjunto completo de intenções que deverá
ser utilizado nos testes.

**Sugestão:**

Definir quais intenções fazem parte do escopo atual do chatbot ou
indicar explicitamente onde essa lista pode ser consultada.

---

### RF004 — Resposta às dúvidas frequentes

**Ponto identificado:**

O requisito determina que o chatbot responda utilizando informações
previamente disponibilizadas, porém não especifica quais informações
ou dúvidas frequentes fazem parte dessa base.

O critério também utiliza a expressão "responder corretamente".

**Impacto para QA:**

Para verificar se uma resposta está correta, é necessário possuir uma
fonte de referência que determine qual informação o chatbot deveria
fornecer.

**Sugestão:**

Definir ou referenciar a base de informações utilizada pelo chatbot,
permitindo comparar a resposta obtida com a resposta esperada.

---

### RF005 — Consulta de informações do cliente

**Ponto identificado:**

O requisito determina que o cliente possa consultar informações
relacionadas ao seu próprio atendimento, mas não especifica quais
informações podem ser consultadas.

**Impacto para QA:**

Não é possível determinar quais consultas devem obrigatoriamente
funcionar.

**Sugestão:**

Especificar quais informações do atendimento estarão disponíveis para
consulta pelo cliente.

---

### RF006 — Recebimento e transcrição de áudios

**Ponto identificado:**

O critério determina que "áudios compreensíveis" sejam transcritos e
processados, porém não define como avaliar se uma transcrição é
considerada aceitável.

**Impacto para QA:**

Pode haver subjetividade na decisão de aprovação ou reprovação do
teste, principalmente quando a transcrição apresentar pequenas
diferenças em relação ao áudio original.

**Sugestão:**

Definir o comportamento mínimo esperado para considerar a transcrição
válida ou estabelecer critérios para os cenários que deverão ser
testados.

---

### RF007 — Tratamento de mensagens fora do assunto

**Ponto identificado:**

O requisito informa que o chatbot deve identificar mensagens fora dos
assuntos atendidos, porém esses assuntos dependem da definição do
escopo do chatbot.

**Impacto para QA:**

Sem uma definição clara do escopo, não é possível determinar
objetivamente se determinada mensagem deveria ser respondida ou
tratada como fora do assunto.

**Sugestão:**

Relacionar este requisito à definição do escopo de atendimento
estabelecida para o RF002/RF003.

---

### RF008 — Resumo da conversa

**Ponto identificado:**

O critério determina que o resumo contenha "as principais informações
necessárias" para o administrador compreender o atendimento.

Não está especificado quais informações são consideradas essenciais.

**Impacto para QA:**

A avaliação do resumo se torna subjetiva, pois diferentes pessoas
podem considerar informações diferentes como importantes.

**Sugestão:**

Definir os elementos mínimos esperados no resumo.

Por exemplo, caso faça sentido para a regra de negócio:
- assunto do atendimento;
- solicitação principal;
- informações relevantes fornecidas pelo cliente;
- situação atual do atendimento.

A equipe deve definir quais desses elementos são realmente
obrigatórios.

---

### RF009 — Transferência para atendimento humano

**Ponto identificado:**

O fluxo alternativo informa que, caso nenhum administrador esteja
disponível, a solicitação deverá ser registrada.

Entretanto, não fica especificado o que acontece posteriormente com
essa solicitação.

**Impacto para QA:**

É possível testar se a solicitação foi registrada, mas não fica claro
qual comportamento posterior é esperado.

**Sugestão:**

Especificar, caso faça parte do escopo, como uma solicitação pendente
de atendimento humano deverá ser disponibilizada ou retomada quando
houver um administrador disponível.

---

### RF010 — Registro das conversas

**Ponto identificado:**

O requisito determina que as mensagens permaneçam disponíveis no
histórico, mas não especifica quais informações devem acompanhar cada
registro.

Existe posteriormente o RNF010, que cita cliente, data, horário,
mensagem, resposta e tipo de atendimento.

**Impacto para QA:**

Os dois requisitos precisam estar alinhados para que seja possível
determinar quais informações obrigatoriamente devem ser armazenadas.

**Sugestão:**

Relacionar explicitamente o RF010 ao RNF010 ou definir no requisito
funcional quais dados compõem o registro da conversa.

---

## 4. Revisão dos Requisitos Não Funcionais

### RNF001 — Segurança

**Ponto identificado:**

O requisito determina que os dados sejam protegidos contra acesso,
alteração ou divulgação não autorizada, mas é bastante amplo.

**Sugestão:**

Caso existam mecanismos de segurança obrigatórios definidos pelo
projeto, especificá-los ou referenciá-los para permitir a elaboração
de testes objetivos.

---

### RNF002 — Privacidade

**Ponto identificado:**

O requisito informa que os dados devem ser tratados de acordo com
"normas de proteção de dados aplicáveis", mas não especifica quais
normas ou comportamentos do sistema deverão garantir esse requisito.

**Sugestão:**

Especificar quais regras de privacidade terão impacto direto no
comportamento do sistema e poderão ser verificadas.

---

### RNF003 — Desempenho

**Ponto identificado:**

O requisito determina que as mensagens sejam processadas em "tempo
adequado para manter uma interação fluida".

A expressão "tempo adequado" não possui um valor mensurável.

**Impacto para QA:**

Não é possível determinar objetivamente quando um teste de desempenho
deve ser aprovado ou reprovado.

**Sugestão:**

Definir um tempo máximo esperado para resposta.

Exemplo de estrutura:

"O chatbot deverá responder às mensagens em até X segundos em
condições normais de operação."

O valor de X deve ser definido pela equipe.

---

### RNF004 — Disponibilidade

**Ponto identificado:**

O requisito determina que o chatbot esteja disponível durante o
"período definido para funcionamento", mas esse período não aparece
especificado.

**Impacto para QA:**

Não existe um período objetivo para verificar a disponibilidade.

**Sugestão:**

Definir o período esperado de funcionamento ou indicar onde essa
informação está especificada.

---

### RNF005 — Confiabilidade

**Ponto identificado:**

O requisito utiliza a expressão "de forma consistente" e determina
que sejam evitadas perdas de mensagens, documentos ou informações.

A parte referente à perda de dados pode ser testada, porém
"consistentemente" é um termo amplo.

**Sugestão:**

Detalhar quais comportamentos caracterizam a confiabilidade esperada,
principalmente em situações de erro ou interrupção.

---

### RNF006 — Clareza das respostas

**Ponto identificado:**

Os termos "claras, objetivas e compreensíveis" são subjetivos.

**Impacto para QA:**

Duas pessoas podem avaliar de maneiras diferentes se uma resposta é
suficientemente clara.

**Sugestão:**

Definir critérios mínimos de resposta ou exemplos do padrão esperado,
caso esse requisito precise ser validado formalmente.

---

### RNF007 — Linguagem natural

**Ponto identificado:**

O requisito determina que o chatbot compreenda abreviações,
expressões informais e variações de uma mesma pergunta, mas não
estabelece quais variações devem ser suportadas.

**Impacto para QA:**

O conjunto de testes pode se tornar indefinido.

**Sugestão:**

Definir um conjunto mínimo de exemplos ou categorias que deverão ser
reconhecidas para cada intenção.

---

### RNF008 — Integração com WhatsApp

**Ponto identificado:**

O requisito especifica envio e recebimento de mensagens e áudios,
mas outros requisitos mencionam documentos.

**Impacto para QA:**

Pode existir dúvida sobre quais tipos de conteúdo a integração com
WhatsApp deverá efetivamente suportar.

**Sugestão:**

Revisar os requisitos relacionados e definir claramente os tipos de
conteúdo suportados pela integração.

---

### RNF009 — Tratamento de erros

**Ponto identificado:**

O requisito determina que o cliente seja informado "adequadamente"
quando ocorrer uma falha, mas não define o comportamento esperado.

**Sugestão:**

Definir os principais cenários de erro e o comportamento esperado
para cada um deles.

---

### RNF010 — Rastreabilidade

O requisito já apresenta informações que devem ser registradas:
cliente, data, horário, mensagem, resposta e tipo de atendimento.

**Observação de QA:**

O requisito possui elementos mais objetivos que permitem a elaboração
de casos de teste.

Recomenda-se apenas verificar seu alinhamento com o RF010, referente
ao registro das conversas.

---

### RNF011 — Escalabilidade

**Ponto identificado:**

O requisito determina que o sistema suporte crescimento sem
"degradação significativa de desempenho".

Não existe definição do volume esperado nem do que caracteriza uma
degradação significativa.

**Impacto para QA:**

Não é possível elaborar um teste objetivo de carga ou escalabilidade
sem esses valores.

**Sugestão:**

Definir, caso esteja dentro do escopo do projeto:

- quantidade de usuários ou atendimentos simultâneos esperada;
- volume de mensagens;
- limite aceitável de degradação no tempo de resposta.

---

### RNF012 — Manutenibilidade

**Ponto identificado:**

O requisito determina que a estrutura facilite manutenção e novas
funcionalidades, mas não define características verificáveis.

**Sugestão:**

Caso seja necessário validar formalmente esse requisito, definir
práticas ou características arquiteturais esperadas, como separação
de responsabilidades, organização modular ou padrão definido pela
equipe.

---

### RNF013 — Continuidade do atendimento

**Ponto identificado:**

Este requisito determina que o histórico seja preservado quando o
atendimento é transferido ao administrador.

O mesmo comportamento já aparece no RF009 e novamente no RNF019.

**Sugestão:**

Verificar se RNF013 e RNF019 representam requisitos diferentes. Caso
tenham o mesmo objetivo, considerar unificá-los ou esclarecer a
diferença entre eles.

---

### RNF014 — Controle de acesso

**Ponto identificado:**

O requisito determina que informações específicas sejam
disponibilizadas somente ao cliente identificado e autorizado.

Existe relação direta com o RF001 e o RF005.

**Sugestão:**

Definir como é determinada a autorização do cliente e quais
informações são protegidas por esse controle.

---

### RNF015 — Armazenamento

**Ponto identificado:**

O requisito determina que as informações sejam armazenadas de forma
"organizada e segura", porém esses termos são amplos.

**Sugestão:**

Definir, quando aplicável, quais requisitos mínimos caracterizam o
armazenamento seguro e quais informações precisam ser persistidas.

---

### RNF016 — Recuperação de falhas

**Ponto identificado:**

O requisito informa que o chatbot deverá permitir nova tentativa
"quando possível".

Não está definido em quais situações a nova tentativa é possível.

**Impacto para QA:**

Não é possível determinar em quais falhas o mecanismo deve estar
disponível.

**Sugestão:**

Especificar quais tipos de falha permitem uma nova tentativa e qual
deve ser o comportamento do sistema nesses casos.

---

### RNF017 — Consistência das informações

**Ponto identificado:**

O requisito determina que o chatbot evite respostas contraditórias,
mas não define qual fonte deverá ser considerada como referência para
validar a informação correta.

**Sugestão:**

Relacionar este requisito à base de informações utilizada pelo
chatbot, permitindo comparar as respostas com uma fonte definida.

---

### RNF018 — Experiência do usuário

**Ponto identificado:**

Os termos "simples", "intuitiva" e "facilmente" são subjetivos.

**Impacto para QA:**

Não existe um critério objetivo para determinar aprovação ou
reprovação.

**Sugestão:**

Caso esse requisito precise ser testado formalmente, definir critérios
de usabilidade verificáveis ou um método de avaliação.

---

### RNF019 — Registro do atendimento humano

**Ponto identificado:**

O requisito determina novamente que o histórico do chatbot permaneça
disponível após a transferência para o administrador.

Esse comportamento também está presente no RF009 e RNF013.

**Sugestão:**

Verificar a possível redundância entre RF009, RNF013 e RNF019 e
manter requisitos separados apenas caso representem comportamentos ou
qualidades diferentes.

---

## 5. Pontos prioritários para revisão

Os principais pontos que podem dificultar a elaboração dos testes são:

1. Ausência de requisitos funcionais específicos para a interface web.
2. Falta de definição do escopo de assuntos e intenções do chatbot.
3. Critérios de aceitação que utilizam termos subjetivos.
4. Requisitos não funcionais sem valores mensuráveis, principalmente
   desempenho, disponibilidade e escalabilidade.
5. Informações não especificadas, como dados utilizados para
   identificação e informações disponíveis para consulta.
6. Possível redundância entre requisitos relacionados à continuidade
   e ao histórico do atendimento.
7. Necessidade de definir uma fonte de referência para validar as
   informações fornecidas pelo chatbot.

---

## 6. Conclusão

Os requisitos atuais apresentam os principais comportamentos
esperados para o chatbot, porém alguns pontos precisam ser detalhados
para permitir a criação de casos de teste objetivos.

Sob a perspectiva de QA, recomenda-se priorizar a definição dos
requisitos da interface web e tornar os critérios de aceitação mais
específicos e mensuráveis.

Após a atualização do documento de requisitos, recomenda-se realizar
uma nova revisão para verificar se os pontos levantados foram
esclarecidos antes da elaboração definitiva dos casos de teste.
