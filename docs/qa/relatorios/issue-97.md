# Relatório de QA — Issue #97

## 1. Identificação

- **Issue:** #97 — [Frontend] Criar tela de recuperação de senha
- **Desenvolvedor:** qw-tf
- **Branch testada:** `feat/tela-recuperacao-senha`
- **Commit testado:** `b9174be`
- **Responsável pela validação:** QA
- **Tipo de teste:** Funcional, interface e responsividade
- **Resultado geral:** Reprovado — necessita correção

---

## 2. Objetivo

Validar a implementação da tela de recuperação de senha, verificando a navegação a partir do Login, a renderização dos elementos da interface, a validação do campo de e-mail, o comportamento da solicitação, o retorno à tela de Login e a responsividade.

A validação considera os critérios de aceitação definidos na issue #97, sem exigir a implementação do envio real de e-mails, geração de tokens ou redefinição efetiva da senha, que não fazem parte do escopo desta atividade.

---

## 3. Critérios de aceitação

- O link "Esqueci minha senha" abre corretamente a nova tela.
- A página apresenta o formulário e os elementos visuais previstos.
- O formulário impede o envio quando o e-mail está vazio ou possui formato inválido.
- As mensagens de validação são claras e consistentes com as demais telas.
- A opção de voltar retorna à tela de Login.
- A tela funciona em diferentes tamanhos, sem cortes ou rolagem horizontal indesejada.
- A interface não informa que as instruções de recuperação foram enviadas sem confirmação real da operação.
- O frontend compila sem erros após a implementação.

---

## 4. Ambiente e preparação

- **Ambiente:** Desenvolvimento local
- **Frontend:** React com Vite
- **Navegador:** Brave
- **Endereço:** `http://localhost:5174`
- **Rota testada:** `/esqsenha`
- **Resolução mobile testada:** 375 × 667 px

O frontend foi iniciado utilizando o comando `npm run dev`. Como a porta 5173 estava ocupada, o Vite iniciou automaticamente na porta 5174, sem apresentar erros de inicialização.

A implementação foi testada diretamente na branch do desenvolvedor, em modo detached HEAD, sem alterações no código-fonte.

---

## 5. Casos de teste executados

### QA-097-01 — Inicialização do frontend

**Objetivo:** Verificar se o frontend inicia corretamente após a implementação.

**Procedimento:**
1. Acessar o diretório `frontend`.
2. Executar `npm run dev`.
3. Verificar a inicialização do servidor de desenvolvimento.

**Resultado esperado:**

O frontend deve iniciar sem apresentar erros.

**Resultado obtido:**

O Vite iniciou corretamente na porta 5174, sem erros de inicialização.

**Status:** Aprovado.

**Evidência:**

![QA-097-01 — Inicialização do frontend](../evidencias/issue-97/QA-097-01-inicializacao-frontend.png)

---

### QA-097-02 — Navegação e renderização da tela

**Objetivo:** Verificar o acesso à tela de recuperação e a apresentação dos elementos previstos.

**Procedimento:**
1. Acessar a tela de Login.
2. Clicar em "Esqueci minha senha".
3. Verificar a rota e os elementos apresentados.

**Resultado esperado:**

O sistema deve abrir a tela de recuperação com título, instruções, campo de e-mail, botão de solicitação e opção de retorno.

**Resultado obtido:**

A tela foi acessada pela rota `/esqsenha`, apresentando os elementos previstos: título "Recuperar senha", instruções, campo de e-mail, botão "Solicitar" e opção "Voltar".

**Status:** Aprovado.

**Evidência:**

![QA-097-02 — Tela de recuperação de senha](../evidencias/issue-97/QA-097-02-tela-recuperacao-senha.png)

---

### QA-097-03 — Validação de e-mail vazio

**Objetivo:** Verificar se o formulário impede solicitações sem preenchimento do e-mail.

**Procedimento:**
1. Acessar a tela de recuperação.
2. Manter o campo de e-mail vazio.
3. Clicar em "Solicitar".
4. Verificar a mensagem apresentada.

**Resultado esperado:**

O formulário deve impedir o prosseguimento e apresentar uma mensagem de validação.

**Resultado obtido:**

O sistema apresentou a mensagem "Digite um e-mail válido.", permanecendo na mesma tela.

**Status:** Aprovado.

**Evidência:**

![QA-097-03 — Validação de e-mail vazio](../evidencias/issue-97/QA-097-03-email-vazio.png)

---

### QA-097-04 — Validação de e-mail inválido

**Objetivo:** Verificar o tratamento de um endereço de e-mail com formato inválido.

**Procedimento:**
1. Acessar a tela de recuperação.
2. Preencher o campo com `teste123`.
3. Clicar em "Solicitar".
4. Verificar a mensagem apresentada.

**Resultado esperado:**

O formulário deve impedir o prosseguimento e informar que o endereço de e-mail possui formato inválido.

**Resultado obtido:**

O sistema apresentou a mensagem "Digite um e-mail válido.", impedindo o prosseguimento da solicitação.

**Status:** Aprovado.

**Evidência:**

![QA-097-04 — Validação de e-mail inválido](../evidencias/issue-97/QA-097-04-email-invalido.png)

---

### QA-097-05 — Solicitação com e-mail válido

**Objetivo:** Verificar o comportamento do formulário ao receber um endereço de e-mail válido.

**Procedimento:**
1. Acessar a tela de recuperação.
2. Preencher o campo com `teste@exemplo.com`.
3. Clicar em "Solicitar".
4. Observar o comportamento da interface.
5. Verificar possíveis erros no Console do navegador.

**Resultado esperado:**

A interface deve apresentar um feedback coerente sobre a solicitação, sem informar que um e-mail foi enviado sem confirmação real da operação.

**Resultado obtido:**

Após clicar em "Solicitar", a interface permaneceu sem alterações visíveis, não apresentando mensagem de confirmação, erro ou orientação. Não foram observados erros JavaScript no Console.

**Status:** Reprovado.

**Defeito relacionado:** DEF-097-01.

**Evidência:**

![QA-097-05 — Solicitação com e-mail válido sem feedback](../evidencias/issue-97/QA-097-05-email-valido-sem-feedback.png)

---

### QA-097-06 — Retorno à tela de Login

**Objetivo:** Verificar se a opção "Voltar" retorna corretamente à tela de Login.

**Procedimento:**
1. Acessar a tela de recuperação.
2. Clicar em "Voltar".
3. Verificar a navegação.

**Resultado esperado:**

O sistema deve retornar à rota `/login`.

**Resultado obtido:**

A opção "Voltar" retornou corretamente à tela de Login.

**Status:** Aprovado.

**Evidência:**

![QA-097-06 — Retorno à tela de Login](../evidencias/issue-97/QA-097-06-voltar-login.png)

---

### QA-097-07 — Responsividade da tela

**Objetivo:** Verificar a apresentação e a utilização da interface em uma resolução de dispositivo móvel.

**Procedimento:**
1. Abrir a tela de recuperação.
2. Ativar o modo responsivo do navegador.
3. Configurar a resolução de 375 × 667 px.
4. Verificar textos, campo de e-mail, botões e disposição dos elementos.

**Resultado esperado:**

A interface deve permanecer utilizável, sem cortes ou rolagem horizontal indesejada.

**Resultado obtido:**

Os elementos principais permaneceram visíveis e utilizáveis, sem cortes evidentes ou rolagem horizontal indesejada.

Entretanto, foram identificadas inconsistências no alinhamento dos textos, ausência de margens laterais adequadas e espaçamentos que prejudicam a apresentação visual em dispositivos móveis.

**Status:** Aprovado com observação.

**Observação relacionada:** OBS-097-01.

**Evidência:**

![QA-097-07 — Responsividade mobile](../evidencias/issue-97/QA-097-07-responsividade-mobile.png)

---

## 6. Resumo da execução

| Indicador | Quantidade |
|---|---:|
| Casos executados | 7 |
| Aprovados | 5 |
| Aprovados com observação | 1 |
| Reprovados | 1 |
| Defeitos funcionais identificados | 1 |
| Observações visuais | 1 |

**Resultado geral:** Reprovado — necessita correção.

---

## 7. Defeitos e observações

### DEF-097-01 — Ausência de feedback na solicitação com e-mail válido

**Caso relacionado:** QA-097-05  
**Severidade:** Média  
**Status:** Pendente de correção

**Descrição:**

Ao preencher um endereço de e-mail válido e clicar em "Solicitar", a interface não apresenta nenhuma resposta visível ao usuário.

**Comportamento esperado:**

A interface deve apresentar um feedback coerente com o estado da operação, sem afirmar que o e-mail foi enviado sem confirmação real.

**Comportamento observado:**

O formulário permanece sem alterações visíveis, sem apresentar confirmação, mensagem de erro ou orientação.

**Recomendação:**

Implementar um feedback adequado para a solicitação, considerando que o envio real de e-mail e a redefinição efetiva da senha não fazem parte do escopo desta issue.

---

### OBS-097-01 — Ajustes visuais na versão mobile

**Caso relacionado:** QA-097-07  
**Classificação:** Observação visual  
**Status:** Melhoria recomendada

**Descrição:**

Na resolução de 375 × 667 px, a interface permanece utilizável, mas apresenta inconsistências de alinhamento e espaçamento.

**Recomendação:**

Padronizar o alinhamento dos textos, adicionar margens laterais adequadas e revisar os espaçamentos verticais para melhorar a apresentação em dispositivos móveis.

---

### Observação técnica adicional

Durante a inspeção pelo DevTools, foram apresentados avisos relacionados a campos de formulário sem atributos `id` ou `name`.

Esses avisos não foram classificados como defeitos funcionais nesta validação, mas podem ser considerados em futuras melhorias de acessibilidade e estrutura dos formulários.

---

## 8. Considerações finais

A implementação da issue #97 apresentou funcionamento satisfatório na inicialização do frontend, navegação, renderização da tela, validação de e-mails vazios e inválidos e retorno ao Login.

A interface também permaneceu utilizável em resolução mobile, embora apresente oportunidades de melhoria visual.

Entretanto, foi identificado um defeito funcional no tratamento da solicitação com e-mail válido, pois a interface não apresenta feedback ao usuário após o acionamento do botão "Solicitar".

Dessa forma, a implementação foi **reprovada nesta validação**, permanecendo pendente a correção do defeito DEF-097-01.

Após a correção, recomenda-se realizar o reteste do caso QA-097-05 e atualizar este relatório, preservando o histórico da validação inicial.
