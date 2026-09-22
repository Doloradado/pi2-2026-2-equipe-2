/**
 * Componente para exibição de uma estatística do painel.
 *
 * @param {Object} props
 * @param {string|number} props.valor - Valor numérico exibido no card.
 * @param {string} props.titulo - Descrição da estatística.
 *
 * Valores padrão:
 * - valor: "00"
 * - titulo: "Sem título"
 */

function BaseStatCard({
    valor = "00",
    titulo = "Sem titulo",
}) {
    return (
        <div className="bg-[#151313] rounded-xl w-70 h-40 flex flex-col items-center justify-center gap-2">
            <span className="text-6xl font-bold text-[#C4B2B2]">
                {valor}
            </span>
            <span className="text-sm font-semibold text-[#9E9A9A]">
                {titulo}
            </span>
        </div>
    )
}

export default BaseStatCard