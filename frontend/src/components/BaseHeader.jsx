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
    const [headerVisivel, setHeaderVisivel] = useState(true)

    const menuRef = useRef(null)
    const ultimaPosicaoScroll = useRef(0)

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
    useEffect(() => {
        function controlarHeader() {
            const posicaoAtual = window.scrollY

            if (
                posicaoAtual > ultimaPosicaoScroll.current &&
                posicaoAtual > 80
            ) {
                setHeaderVisivel(false)
            } else if (posicaoAtual < ultimaPosicaoScroll.current) {
                setHeaderVisivel(true)
            }

            ultimaPosicaoScroll.current = posicaoAtual
        }

        window.addEventListener("scroll", controlarHeader)

        return () => {
            window.removeEventListener("scroll", controlarHeader)
        }
    }, [])
    return (
        <header
            className={`fixed top-0 left-0 z-50 flex w-full flex-col gap-3 bg-[#780606] p-4 transition-transform duration-300 md:h-25 md:flex-row md:items-center md:justify-between md:pl-12 md:pr-6 ${headerVisivel ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            <div className="flex w-full items-center gap-3 md:w-auto md:gap-4">
                <img
                    src="/imagens/logo2.svg"
                    alt="Logo"
                    className="w-24"
                />

                <div className="flex flex-col justify-center">
                    <h1 className="font-instrument text-[18px] font-bold leading-[100%] text-white md:text-[24px]">
                        Olá, {nome}!
                    </h1>

                    <p className="font-instrument mt-1 text-[14px] font-normal text-white md:text-[20px]">
                        {descricao}
                    </p>
                </div>
            </div>

            <div ref={menuRef} className="relative self-center md:self-auto">
                <button
                    type="button"
                    onClick={() => setMenuAberto(!menuAberto)}
                    className="font-instrument text-[17px] font-bold text-white hover:text-[#AD1818] transition md:text-[20px]"
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
