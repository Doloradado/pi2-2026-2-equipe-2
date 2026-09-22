import assert from "node:assert/strict"
import {
  getClientes,
  getAtendimentos,
  getAtendimentoById,
  getConversaByAtendimentoId,
} from "./api.js"

const clientes = await getClientes()
assert.ok(clientes.length > 0)

const atendimentos = await getAtendimentos()
assert.ok(atendimentos.length > 0)

const atendimento = await getAtendimentoById(1)
assert.equal(atendimento.id, 1)

const conversa = await getConversaByAtendimentoId(1)
assert.ok(conversa.length > 0)

console.log("Todos os testes do mockApi passaram!")