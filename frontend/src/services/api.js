const API_URL = `${window.location.protocol}//${window.location.hostname}:8080/api/Chatbot`;

function getHeaders(json = false) {
  const token = localStorage.getItem("token");

  return {
    ...(json ? { "Content-Type": "application/json" } : {}),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

async function tratarResposta(response, mensagemErro) {
  if (response.status === 401) {
    localStorage.removeItem("token");
    window.location.href = "/login";
    throw new Error("Sessão expirada. Faça login novamente.");
  }

  if (!response.ok) {
    throw new Error(mensagemErro);
  }

  return await response.json();
}

export async function getClientes() {
  const response = await fetch(`${API_URL}/clientes`, {
    headers: getHeaders(),
  });

  return tratarResposta(response, "Erro ao buscar clientes.");
}

export async function getClientePorId(clienteId) {
  const response = await fetch(`${API_URL}/clientes/${clienteId}`, {
    headers: getHeaders(),
  });

  return tratarResposta(response, "Erro ao buscar cliente.");
}

export async function criarSessao(clienteId) {
  const response = await fetch(`${API_URL}/sessao`, {
    method: "POST",
    headers: getHeaders(true),
    body: JSON.stringify(clienteId),
  });

  return tratarResposta(response, "Erro ao criar sessão de atendimento.");
}

export async function enviarMensagem(
  sessaoId,
  remetente,
  conteudo,
  tipoMidia = "TEXTO",
) {
  const response = await fetch(`${API_URL}/mensagem`, {
    method: "POST",
    headers: getHeaders(true),
    body: JSON.stringify({
      sessaoId,
      remetente,
      conteudo,
      tipoMidia,
    }),
  });

  return tratarResposta(response, "Erro ao enviar mensagem.");
}

export async function getMensagens(sessaoId) {
  const response = await fetch(`${API_URL}/sessoes/${sessaoId}/mensagens`, {
    headers: getHeaders(),
  });

  return tratarResposta(response, "Erro ao buscar mensagens.");
}
