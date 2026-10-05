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
  onVerRespostas = () => { },
  onWhatsApp = () => { },
  onExcluir = () => { },
}) {
  const coresStatus = {
    NOVO: "bg-[#0B5616]",
    "EM ATENDIMENTO": "bg-[#062841]",
    FINALIZADO: "bg-[#786C12]",
    "AGUARDANDO RETORNO": "bg-[#5A4A0F]",
  }

  const corStatus = coresStatus[status] ?? "bg-[#0B5616]"

  return (
    <div className="w-full rounded-xl bg-[#151313] p-4 md:flex md:h-25 md:items-center md:px-6 md:py-0">

      <div className="min-w-0 flex-1">
        <h2 className="text-white font-semibold text-[16px] break-words">
          <span className="mr-2">👤</span>
          {nome}
        </h2>

        <p className="text-[#9E9A9A] text-[12px] mt-2 break-words">
          Atendimento recebido em {data}
        </p>
      </div>

      <div className="mt-4 grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-3 md:mt-0 md:flex md:items-center md:gap-6">

        <button
          type="button"
          onClick={onVerRespostas}
          className="whitespace-nowrap bg-[#780606] hover:bg-[#9E0B0B] transition text-white text-[12px] font-semibold rounded-lg px-6 py-3 md:px-8"
        >
          Ver respostas
        </button>

        <button
          type="button"
          onClick={onWhatsApp}
          className="shrink-0 transition hover:opacity-60"
        >
          <img
            src="/imagens/whatsapp.svg"
            alt="WhatsApp"
            className="w-8 h-8"
          />
        </button>

        <button
          type="button"
          onClick={onExcluir}
          className="shrink-0 transition hover:opacity-60"
        >
          <img
            src="/imagens/lixeira.svg"
            alt="Lixeira"
            className="w-8 h-8"
          />
        </button>

        <span
          className={`col-span-3 w-full text-center whitespace-nowrap text-white text-[12px] font-semibold rounded-full px-4 py-2 ${corStatus} md:col-span-1 md:w-auto md:min-w-[200px] md:px-6`}
        >
          {status}
        </span>

      </div>

    </div>
  )
}

export default BaseClientCard