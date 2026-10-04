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

import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

function BaseHeader({
    nome = "Wilson",
    descricao = "Acompanhe os atendimentos recebidos pelo assistente virtual.",
    perfil = "Administrador",
}) {
    const [menuAberto, setMenuAberto] = useState(false)
    const menuRef = useRef(null)
    const navigate = useNavigate()

    useEffect(() => {
        function fecharMenu(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuAberto(false)
            }
        }

        document.addEventListener("mousedown", fecharMenu)
        return () => {
            document.removeEventListener("mousedown", fecharMenu)
        }
    }, [])
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

            <div ref={menuRef} className="relative">
                <button
                    type="button"
                    onClick={() => setMenuAberto(!menuAberto)}
                    className="font-instrument text-[20px] font-bold text-white hover:text-[#AD1818] transition"
                >
                    {perfil}
                </button>

                {menuAberto && (
                    <div className="absolute right-0 mt-2 w-36 rounded-lg bg-[#353333] p-2 text-white">
                        <button
                            type="button"
                            onClick={() => navigate("/perfil")}
                            className="font-inter text-[24px] font-semibold block w-full rounded px-3 py-2 text-left hover:bg-[#252121]"
                        >
                            Perfil
                        </button>

                        <button
                            type="button"
                            onClick={() => navigate("/login")}
                            className="font-inter text-[24px] font-bold block w-full rounded px-3 py-2 text-left hover:bg-[#252121]"
                        >
                            Sair
                        </button>
                    </div>
                )}
            </div>
        </header>
    )
}

export default BaseHeader
