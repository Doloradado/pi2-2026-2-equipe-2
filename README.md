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
