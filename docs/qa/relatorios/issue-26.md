# Relatório de Testes — Issue #26

## 1. Identificação

- **Issue:** #26 — Implementar tela de Login
- **Issue de QA:** #58 — QA — Validar implementação da tela de Login (#26)
- **Requisito relacionado:** RF018 — Autenticação do administrador
- **Requisito não funcional relacionado:** RNF014 — Controle de acesso
- **Branch testada:** `frontend/implementar+tela+login/26`
- **Commit testado:** `be02e2b`
- **Responsável pelos testes:** QA
- **Resultado final:** Aprovado com observação

---

## 2. Objetivo

Validar a implementação da tela de Login desenvolvida na issue #26,
verificando os critérios de aceitação definidos, o funcionamento dos
campos obrigatórios, o redirecionamento para o Dashboard e a
conformidade visual com o protótipo disponibilizado pela equipe de Design.

---

## 3. Critérios de Aceitação

Foram considerados os seguintes critérios definidos na issue #26:

- Layout fiel ao protótipo;
- Validação impede envio com campos vazios;
- Botão redireciona para `/dashboard`, mesmo sem autenticação real no momento.

Também foram verificados os elementos previstos na implementação:

- Logo do projeto;
- Campo de e-mail;
- Campo de senha;
- Botão "Acessar Painel";
- Link "Esqueci minha senha".

---

## 4. Ambiente e Preparação

- Frontend executado localmente com Vite;
- URL utilizada: `http://localhost:5173/login`;
- Branch da issue testada em detached HEAD;
- Dependências verificadas com `npm install`;
- Aplicação iniciada com `npm run dev`;
- Protótipo do Figma utilizado como referência visual.

---

## 5. Casos de Teste

### QA-026-01 — Inicialização do frontend

**Objetivo:**  
Verificar se o frontend inicia corretamente na branch da issue #26.

**Procedimento:**  
1. Acessar a pasta `frontend`.
2. Executar `npm install`.
3. Executar `npm run dev`.

**Resultado esperado:**  
O frontend deve iniciar sem erros e disponibilizar a aplicação localmente.

**Resultado obtido:**  
O frontend iniciou corretamente pelo Vite, sem erros de inicialização,
e a aplicação foi disponibilizada em `http://localhost:5173/`.

**Status:** ✅ Aprovado

**Evidência:**  
`QA-026-01-inicializacao-frontend.png`

---

### QA-026-02 — Layout e elementos da tela de Login

**Objetivo:**  
Verificar se a tela de Login apresenta os elementos previstos e está
de acordo com o protótipo.

**Procedimento:**  
1. Acessar `/login`.
2. Verificar os elementos exibidos na tela.
3. Comparar a implementação com o protótipo disponibilizado pela equipe de Design.

**Resultado esperado:**  
A tela deve apresentar logo, título, descrição, campos de e-mail e senha,
botão "Acessar Painel" e link "Esqueci minha senha", mantendo o layout
de acordo com o protótipo.

**Resultado obtido:**  
Todos os elementos previstos foram exibidos. O layout está de acordo
com o protótipo, porém foi identificada uma divergência no link
"Esqueci minha senha": no protótipo o texto é vermelho, enquanto na
implementação aparece em preto sobre o fundo escuro, reduzindo sua
legibilidade.

**Status:** ⚠️ Aprovado com observação

**Evidência:**  
`QA-026-02-layout-login.png`

---

### QA-026-03 — Validação de campos obrigatórios

**Objetivo:**  
Verificar se o sistema impede o envio do formulário quando os campos
obrigatórios de e-mail e senha não estão preenchidos.

**Procedimento:**  
1. Acessar `/login`.
2. Manter os campos de e-mail e senha vazios e clicar em "Acessar Painel".
3. Preencher somente o campo de e-mail e clicar em "Acessar Painel".
4. Preencher somente o campo de senha e clicar em "Acessar Painel".
5. Observar o comportamento da aplicação em cada cenário.

**Resultado esperado:**  
O sistema deve impedir o envio do formulário sempre que um ou ambos
os campos obrigatórios não estiverem preenchidos.

**Resultado obtido:**  
Nos três cenários testados, o sistema permaneceu na tela de Login e
exibiu a mensagem "Preencha o e-mail e a senha.", impedindo o envio
do formulário.

**Status:** ✅ Aprovado

**Evidências:**  
- `QA-026-03a-campos-vazios.png`
- `QA-026-03b-sem-senha.png`
- `QA-026-03c-sem-email.png`

---

### QA-026-04 — Redirecionamento para o Dashboard

**Objetivo:**  
Verificar se o botão "Acessar Painel" redireciona o usuário para a rota
`/dashboard` após o preenchimento dos campos.

**Procedimento:**  
1. Acessar `/login`.
2. Preencher os campos de e-mail e senha.
3. Clicar no botão "Acessar Painel".
4. Verificar a rota acessada após a ação.

**Resultado esperado:**  
O usuário deve ser redirecionado para `/dashboard`, conforme definido
no critério de aceitação da issue.

**Resultado obtido:**  
Após o preenchimento dos campos e o clique em "Acessar Painel", o
usuário foi redirecionado corretamente para `/dashboard`.

A rota exibiu "Página não encontrada", pois a tela de Dashboard não
está implementada nesta branch da issue #26. O redirecionamento
previsto pela issue ocorreu corretamente.

**Status:** ✅ Aprovado

**Evidência:**  
`QA-026-04-redirecionamento-dashboard.png`

---

## 6. Resumo dos Resultados

| Caso | Descrição | Resultado |
|---|---|---|
| QA-026-01 | Inicialização do frontend | ✅ Aprovado |
| QA-026-02 | Layout e elementos da tela de Login | ⚠️ Aprovado com observação |
| QA-026-03 | Validação de campos obrigatórios | ✅ Aprovado |
| QA-026-04 | Redirecionamento para o Dashboard | ✅ Aprovado |

**Total de casos executados:** 4  
**Aprovados:** 3  
**Aprovados com observação:** 1  
**Reprovados:** 0  
**Defeitos funcionais encontrados:** 0  
**Observações:** 1

---

## 7. Defeitos e Observações

### OBS-026-01 — Cor e contraste do link "Esqueci minha senha"

Durante a comparação da implementação com o protótipo, foi identificada
uma divergência visual no link "Esqueci minha senha".

No protótipo, o texto é apresentado em vermelho. Na implementação
testada, o texto aparece em preto sobre o fundo escuro da página,
reduzindo significativamente sua legibilidade.

**Impacto:** Baixo.

**Recomendação:**  
Ajustar a cor do texto para manter a conformidade com o protótipo e
melhorar o contraste e a legibilidade do elemento.

---

## 8. Considerações Finais

A implementação da tela de Login atende aos principais critérios de
aceitação definidos na issue #26.

A aplicação iniciou corretamente, os elementos previstos estão presentes,
a validação dos campos obrigatórios impediu o envio do formulário nos
cenários testados e o botão "Acessar Painel" realizou corretamente o
redirecionamento para `/dashboard`.

Foi identificada apenas uma divergência visual referente à cor do link
"Esqueci minha senha", que apresenta baixo contraste em relação ao fundo
da página.

A observação encontrada não impede o funcionamento do fluxo principal
da tela de Login, porém recomenda-se sua correção para manter a
conformidade visual com o protótipo e melhorar a legibilidade da
interface.

**Resultado final da validação: ⚠️ Aprovado com observação.**
