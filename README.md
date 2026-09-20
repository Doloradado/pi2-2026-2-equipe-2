## Chatbot & Histórico de Clientes - API

Repositório oficial do backend para a disciplina de Projeto Integrador II (Professor Bruno Riccelli) - **Equipe 2**.

Este projeto consiste em uma Web API desenvolvida para gerenciar as interações de um chatbot com respostas pré-programadas e fornecer o histórico de clientes e conversas para um painel web (Frontend).

## Tecnologias Utilizadas

* Backend: C# com .NET 8 (Web API)
* Banco de Dados:PostgreSQL
* Infraestrutura: Docker e Docker Compose
* Arquitetura: RESTful API


## Como rodar o projeto localmente

A infraestrutura do projeto está 100% conteinerizada, o que significa que não precisa instalar o SDK do .NET ou o PostgreSQL na sua máquina local.

**Pré-requisitos:**
* [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado e rodando.
* Git instalado.

**Passo a Passo:**

1. Clone este repositório:
   ```bash
   git clone [https://github.com/Doloradado/pi2-2026-2-equipe-2.git](https://github.com/Doloradado/pi2-2026-2-equipe-2.git)
   
2. Acesse a pasta da aplicação pelo terminal:
   ```bash
   cd pi2-2026-2-equipe-2/ChatbotBackend

3. Construa e inicie os containers(na pasta ChatbotBackend):
   ```bash
   docker compose up --build
   
4. Para desligar pressione no terminal:
   ```bash
   Ctrl + C



   ---

### 🗄️ Camada de Banco de Dados e MER 

A modelagem do banco de dados foi construída seguindo estritamente os requisitos funcionais do projeto (identificação por WhatsApp, sessões de atendimento e histórico de mensagens), utilizando o **Entity Framework Core** com migrações automáticas para o **PostgreSQL**.

#### Como validar se o Banco e as Migrations estão integrados e funcionando:

Assim que você subir os containers com o `docker compose up --build`, o Entity Framework executará automaticamente as *migrations* pendentes, criando as tabelas estruturadas no PostgreSQL (`clientes`, `sessoes_atendimento` e `historico_mensagens`).

Para comprovar que tudo está rodando perfeitamente, você pode inspecionar o banco de dados de duas formas:

1. **Via Interface Gráfica (VS Code / Extensão PostgreSQL):**
   * Conecte-se ao servidor local configurado no `appsettings.json` (porta `5432`, base `chatbot_db`).
   * Expanda a pasta **`public` -> Tabelas**.
   * Você deverá visualizar as três tabelas oficiais do projeto criadas com sucesso:
     * `clientes`
     * `sessoes_atendimento`
     * `historico_mensagens`

2. **Via Logs da Aplicação no Terminal:**
   * Ao iniciar a API, os logs do Entity Framework exibirão a aplicação bem-sucedida das migrações (`Applying migration 'InitialCreate'`), confirmando que a conexão com o container PostgreSQL está ativa e respondendo.


---

## Frontend

### Stack
- **React** — biblioteca de UI
- **Vite** — build tool e dev server
- **JavaScript** — linguagem
- **Tailwind CSS** — estilização

### Objetivo
Interface administrativa para o profissional acompanhar as conversas
do chatbot e assumir manualmente uma conversa quando quiser.

### Observação
Somente o profissional será usuário deste sistema.
Os clientes dele **não** terão acesso a esta interface.