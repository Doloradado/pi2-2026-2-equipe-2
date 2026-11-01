# Mapeamento de Índices do Banco de Dados

Este documento descreve os índices mapeados no PostgreSQL para otimização de consultas e garantia de integridade de dados do Chatbot.

## 1. Tabela: `Clientes`

| Nome do Índice | Coluna(s) | Tipo | Finalidade / Justificativa |
| :--- | :--- | :--- | :--- |
| `PK_Clientes` | `Id` | B-Tree (PRIMARY KEY) | Chave primária da tabela. |
| `IX_Clientes_TelefoneWhatsapp` | `TelefoneWhatsapp` | B-Tree (UNIQUE) | Garante a unicidade do número do WhatsApp e otimiza buscas no login/atendimento. |

## 2. Tabela: `SessoesAtendimento`

| Nome do Índice | Coluna(s) | Tipo | Finalidade / Justificativa |
| :--- | :--- | :--- | :--- |
| `PK_SessoesAtendimento` | `Id` | B-Tree (PRIMARY KEY) | Chave primária da tabela. |
| `IX_SessoesAtendimento_ClienteId` | `ClienteId` | B-Tree (FOREIGN KEY) | Agiliza a busca de todas as sessões pertencentes a um cliente específico. |

## 3. Tabela: `HistoricoMensagens`

| Nome do Índice | Coluna(s) | Tipo | Finalidade / Justificativa |
| :--- | :--- | :--- | :--- |
| `PK_HistoricoMensagens` | `Id` | B-Tree (PRIMARY KEY) | Chave primária da tabela. |
| `IX_HistoricoMensagens_SessaoId` | `SessaoId` | B-Tree (FOREIGN KEY) | Otimiza a recuperação do histórico de mensagens filtrado por sessão de atendimento. |