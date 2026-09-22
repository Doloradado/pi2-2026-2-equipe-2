const clientes = [
  {
    id: 1,
    nome: "Tereza dos Santos",
    telefone: "(88) 9XXXX-XXXX",
  },
  {
    id: 2,
    nome: "Mariana Sampaio",
    telefone: "(88) 9XXXX-XXXX",
  },
  {
    id: 3,
    nome: "Adrian Moreira",
    telefone: "(88) 9XXXX-XXXX",
  },
]

const atendimentos = [
  {
    id: 1,
    clienteId: 1,
    cliente: "Tereza dos Santos",
    telefone: "(88) 9XXXX-XXXX",
    data: "18/09/2026 às 09:42",
    status: "NOVO",
    ultimaMensagem: "Gostaria de saber mais sobre a consultoria.",
  },
  {
    id: 2,
    clienteId: 2,
    cliente: "Mariana Sampaio",
    telefone: "(88) 9XXXX-XXXX",
    data: "18/09/2026 às 13:05",
    status: "EM ATENDIMENTO",
    ultimaMensagem: "Tenho uma dúvida que você não conseguiu responder.",
  },
  {
    id: 3,
    clienteId: 3,
    cliente: "Adrian Moreira",
    telefone: "(88) 9XXXX-XXXX",
    data: "17/09/2026 às 18:00",
    status: "FINALIZADO",
    ultimaMensagem: "Obrigado pelo atendimento.",
  },
]

const conversas = {
  1: [
    {
      id: 1,
      remetente: "cliente",
      mensagem: "Oi, gostaria de saber quanto custa a consultoria.",
      horario: "09:40",
    },
    {
      id: 2,
      remetente: "chatbot",
      mensagem: "Olá! A consultoria online funciona de forma personalizada.",
      horario: "09:41",
    },
  ],

  2: [
    {
      id: 1,
      remetente: "cliente",
      mensagem: "Tenho uma dúvida que você não conseguiu responder.",
      horario: "13:02",
    },
    {
      id: 2,
      remetente: "chatbot",
      mensagem:
        "Não consegui compreender essa solicitação. Vou encaminhar você para um administrador.",
      horario: "13:03",
    },
    {
      id: 3,
      remetente: "sistema",
      mensagem: "Atendimento encaminhado.",
      horario: "13:05",
    },
  ],

  3: [
    {
      id: 1,
      remetente: "cliente",
      mensagem: "Muito obrigado pelas informações.",
      horario: "17:58",
    },
    {
      id: 2,
      remetente: "chatbot",
      mensagem: "Por nada! Estou à disposição.",
      horario: "18:00",
    },
  ],
}

function simularDelay(dados, tempo = 500) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dados)
    }, tempo)
  })
}

export async function getClientes() {
  return simularDelay(clientes)
}

export async function getAtendimentos() {
  return simularDelay(atendimentos)
}

export async function getAtendimentoById(id) {
  const atendimento = atendimentos.find(
    (item) => item.id === Number(id)
  )

  return simularDelay(atendimento || null)
}

export async function getConversaByAtendimentoId(id) {
  const conversa = conversas[Number(id)] || []

  return simularDelay(conversa)
}