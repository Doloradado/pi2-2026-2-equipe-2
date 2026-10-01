/**
 * Camada de acesso aos dados utilizada pelo frontend.
 *
 * Atualmente, as funções são fornecidas pelo mockApi.js
 * para permitir o desenvolvimento sem depender do backend.
 *
 * Quando a API real estiver disponível, este arquivo deverá
 * substituir a implementação mockada pelas chamadas HTTP
 * para o backend, mantendo as mesmas funções utilizadas
 * pelas páginas sempre que possível.
 *
 * Fluxo atual:
 * Página -> api.js -> mockApi.js
 *
 * Fluxo futuro:
 * Página -> api.js -> API real -> Backend
 */

export {
  getClientes,
  getAtendimentos,
  getAtendimentoById,
  getConversaByAtendimentoId,
} from "./mockApi.js"