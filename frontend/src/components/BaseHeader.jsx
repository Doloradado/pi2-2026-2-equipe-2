/**
 * Cabeçalho reutilizável das páginas administrativas.
 *
 * @param {Object} props
 * @param {string} props.nome - Nome exibido na saudação.
 * @param {string} props.descricao - Texto exibido abaixo da saudação.
 * @param {string} props.perfil - Texto exibido no lado direito do cabeçalho.
 *
 * Valores padrão:
 * - nome: "Wilson"
 * - descricao: "Acompanhe os atendimentos recebidos pelo assistente virtual."
 * - perfil: "Administrador"
 */
function BaseHeader({
    nome = "Wilson",
    descricao = "Acompanhe os atendimentos recebidos pelo assistente virtual.",
    perfil = "Administrador",
}) {
    return (
        <header className="fixed top-0 left-0 w-full h-25 bg-[#780606] flex items-center justify-between pl-12 pr-6 z-50">
            <div className="flex items-center gap-4">
                <img
                    src="/imagens/logo2.svg"
                    alt="Logo"
                    className="w-24"
                />

                <div className="flex flex-col justify-center">
                    <h1 className="text-white font-semibold text-[24px] leading-[100%]">
                        Olá, {nome}!
                    </h1>

                    <p className="text-white text-[14px] mt-1">
                        {descricao}
                    </p>
                </div>
            </div>

            <nav className="flex items-center gap-6">
                <button
                    type="button"
                    className="text-white hover:text-[#AD1818] transition"
                >
                    {perfil}
                </button>
            </nav>
        </header>
    )
}

export default BaseHeader
