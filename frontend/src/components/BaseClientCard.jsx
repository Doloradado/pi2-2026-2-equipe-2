/**
 * Componente para exibir um cliente e suas ações no painel.
 *
 * @param {Object} props
 * @param {string} props.nome - Nome do cliente.
 * @param {string} props.data - Data e horário do atendimento recebido.
 * @param {string} props.status - Status atual do atendimento.
 * @param {Function} props.onVerRespostas - Função executada ao clicar em "Ver respostas".
 * @param {Function} props.onWhatsApp - Função executada ao clicar no ícone do WhatsApp.
 * @param {Function} props.onExcluir - Função executada ao clicar no ícone de exclusão.
 *
 * Valores padrão:
 * - nome: "Cliente"
 * - data: "Data não informada"
 * - status: "NOVO"
 * - onVerRespostas: função vazia
 * - onWhatsApp: função vazia
 * - onExcluir: função vazia
 */

function BaseClientCard({
  nome = "Cliente",
  data = "Data não informada",
  status = "NOVO",
  onVerRespostas,
  onWhatsApp,
  onExcluir,
}) {
  return (
    <div className="w-full h-25 bg-[#151313] rounded-xl flex items-center px-6 flex-shrink-0">

      <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-[#252121] flex items-center justify-center">
        <h1 className="text-[60px]">👤</h1>
      </div>

      <div className="ml-5 flex flex-col justify-center w-70">
        <h2 className="text-white font-semibold text-[16px]">
          {nome}
        </h2>

        <p className="text-[#9E9A9A] text-[12px] mt-2">
          Atendimento recebido em {data}
        </p>
      </div>

      <div className="ml-10">
        <button
          type="button"
          onClick={onVerRespostas}
          className="bg-[#780606] hover:bg-[#9E0B0B] transition text-white text-[12px] font-semibold rounded-lg px-8 py-3"
        >
          Ver respostas
        </button>
      </div>

      <div className="ml-16">
        <button
          type="button"
          onClick={onWhatsApp}
          className="transition hover:opacity-60"
        >
          <img
            src="/imagens/whatsapp.svg"
            alt="WhatsApp"
            className="w-8 h-8"
          />
        </button>
      </div>

      <div className="ml-16">
        <span className="bg-[#0B5616] text-white text-[12px] font-semibold rounded-full px-12 py-2">
          {status}
        </span>
      </div>

      <div className="ml-auto">
        <button
          type="button"
          onClick={onExcluir}
          className="transition hover:opacity-60"
        >
          <img
            src="/imagens/lixeira.svg"
            alt="Lixeira"
            className="w-8 h-8"
          />
        </button>
      </div>

    </div>
  )
}

export default BaseClientCard