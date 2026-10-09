const API_URL = "http://localhost:8080/api/Chatbot";


export async function getClientes() {
  const response = await fetch(`${API_URL}/clientes`);

  if (!response.ok) {
    throw new Error("Erro ao buscar clientes.");
  }

  return await response.json();
}


export async function getClientePorId(clienteId) {
  const response = await fetch(`${API_URL}/clientes/${clienteId}`);

  if (!response.ok) {
    throw new Error("Erro ao buscar cliente.");
  }

  return await response.json();
}


export async function criarSessao(clienteId) {
  const response = await fetch(`${API_URL}/sessao`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(clienteId),
  });

  if (!response.ok) {
    throw new Error("Erro ao criar sessão de atendimento.");
  }

  return await response.json();
}


export async function enviarMensagem(
  sessaoId,
  remetente,
  conteudo,
  tipoMidia = "TEXTO",
) {
  const response = await fetch(`${API_URL}/mensagem`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sessaoId,
      remetente,
      conteudo,
      tipoMidia,
    }),
  });

  if (!response.ok) {
    throw new Error("Erro ao enviar mensagem.");
  }

  return await response.json();
}


export async function getMensagens(sessaoId) {
  const response = await fetch(`${API_URL}/sessoes/${sessaoId}/mensagens`);

  if (!response.ok) {
    throw new Error("Erro ao buscar mensagens.");
  }

  return await response.json();
}
