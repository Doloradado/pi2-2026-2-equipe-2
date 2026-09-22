/**
 * Componente de botão reutilizável.
 *
 * @param {Object} props
 * @param {string} props.texto - Texto exibido dentro do botão.
 * @param {"login"|"acao"} props.variante - Define o estilo visual do botão.
 * @param {Function} props.onClick - Função executada ao clicar no botão.
 * @param {boolean} props.disabled - Define se o botão ficará desabilitado.
 *
 * Valores padrão:
 * - texto: "Clique aqui"
 * - variante: "login"
 * - onClick: função vazia
 * - disabled: false
 */
function BaseButton({
    texto = "Clicque aqui",
    variante = "login",
    onClick,
    disabled = false,
}) {
    const estilos = {
        login:
            "bg-[#AD1818] text-white w-72 p-2 rounded-lg font-semibold hover:bg-[#8F1414] transition",
        acao:
            "bg-[#780606] hover:bg-[#660D0D] transition text-white text-[12px] font-semibold rounded-lg px-8 py-3",
    }
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className={estilos[variante ?? estilos.login]}
        >
            {texto}
        </button>
    )
}

export default BaseButton