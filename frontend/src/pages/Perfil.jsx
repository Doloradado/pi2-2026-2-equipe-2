import { useState } from "react"
import BaseHeader from "../components/BaseHeader"

function Perfil() {
    const [modalEmailAberto, setModalEmailAberto] = useState(false)
    const [email, setEmail] = useState("wilson@email.com")
    const [senha, setSenha] = useState("")
    const [novoEmail, setNovoEmail] = useState("")

    const [modalTelefoneAberto, setModalTelefoneAberto] = useState(false)
    const [telefone, setTelefone] = useState("(88) 9XXXX-XXXX")
    const [novoTelefone, setNovoTelefone] = useState("")

    return (
        <main className="min-h-screen bg-[#252121] text-white">
            <BaseHeader />

            <div className="w-full p-6 pt-[180px] md:pt-31">
                <h1 className="font-jomhuria text-[64px] font-normal text-white">
                    Meu perfil
                </h1>

                <p className="font-instrument mt-2 text-[24px] font-bold text-white">
                    Wilson Meirelles
                </p>

                <div className="mt-8 flex flex-col gap-6">

                    <div className="rounded-3xl bg-[rgba(0,0,0,0.42)] p-6 pb-13">
                        <h2 className="font-plex text-[20px] font-semibold text-white">
                            Email associado ao sistema
                        </h2>

                        <div className="mt-4 flex items-center justify-between gap-4">
                            <p className="font-plex min-w-0 flex-1 break-words text-[20px] font-semibold text-gray-300">
                                {email}
                            </p>

                            <button
                                type="button"
                                onClick={() => setModalEmailAberto(true)}
                                className="font-plex shrink-0 rounded-2xl bg-[#780606] px-6 py-1 text-[18px] font-semibold text-white transition hover:bg-[#660D0D] md:px-13"
                            >
                                Editar
                            </button>
                        </div>
                    </div>

                    <div className="rounded-2xl bg-[rgba(0,0,0,0.42)] p-6 pb-13">
                        <h2 className="font-plex text-[20px] font-semibold text-white">
                            Telefone associado ao sistema
                        </h2>

                        <div className="mt-4 flex items-center justify-between gap-4">
                            <p className="font-plex text-[20px] font-semibold text-gray-300 break-words">
                                {telefone}
                            </p>

                            <button
                                type="button"
                                onClick={() => setModalTelefoneAberto(true)}
                                className="font-plex shrink-0 rounded-2xl bg-[#780606] px-6 py-1 text-[18px] font-semibold text-white transition hover:bg-[#660D0D] md:px-13"
                            >
                                Editar
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {modalEmailAberto && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6">
                    <div className="w-full max-w-md rounded-2xl bg-[#353333] p-6 text-white">

                        <h2 className="font-inter text-[24px] font-semibold">
                            Alterar email
                        </h2>

                        <div className="mt-5 flex flex-col gap-4">
                            <input
                                type="email"
                                placeholder="Digite o novo email"
                                value={novoEmail}
                                onChange={(e) => setNovoEmail(e.target.value)}
                                className="font-inter rounded-xl bg-[#EDE6E6] px-4 py-3 text-[16px] font-normal text-black outline-none"
                            />

                            <input
                                type="password"
                                placeholder="Digite sua senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                className="font-plex rounded-xl bg-[#EDE6E6] px-4 py-3 text-[16px] font-normal text-black outline-none"
                            />
                        </div>

                        <div className="mt-6 flex justify-end gap-3">
                            <button
                                type="button"
                                onClick={() => {
                                    setSenha("")
                                    setNovoEmail("")
                                    setModalEmailAberto(false)
                                }}
                                className="font-inter rounded-xl px-5 py-2 text-[24px] font-bold text-gray-300 hover:text-[#AD1818]"
                            >
                                cancelar
                            </button>

                            <button
                                type="button"
                                onClick={() => {
                                    if (!novoEmail || !senha) {
                                        alert("Preencha os campos adequadamente!!")
                                        return
                                    }

                                    if (!novoEmail.includes("@")) {
                                        alert("digite um email válido")
                                        return
                                    }

                                    setEmail(novoEmail)
                                    setNovoEmail("")
                                    setSenha("")
                                    setModalEmailAberto(false)
                                }}
                                className="font-inter rounded-xl bg-[#AD1818] px-6 py-3 text-[20px] font-bold text-white hover:bg-[#780606]"
                            >
                                confirmar
                            </button>
                        </div>

                    </div>
                </div>
            )}

            {modalTelefoneAberto && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6">
                    <div className="w-full max-w-md rounded-2xl bg-[#353333] p-6 text-white">

                        <h2 className="font-inter text-[24px] font-semibold">
                            Alterar telefone
                        </h2>

                        <div className="mt-5 flex flex-col gap-4">
                            <input
                                type="tel"
                                placeholder="Digite o novo telefone"
                                value={novoTelefone}
                                onChange={(e) => {
                                    const valor = e.target.value.replace(/[^0-9()-]/g, "")
                                    setNovoTelefone(valor)
                                }}
                                className="font-inter rounded-xl bg-[#EDE6E6] px-4 py-3 text-[16px] font-normal text-black outline-none"
                            />

                            <input
                                type="password"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                placeholder="Digite sua senha"
                                className="font-plex rounded-xl bg-[#EDE6E6] px-4 py-3 text-[16px] font-normal text-black outline-none"
                            />
                        </div>

                        <div className="mt-6 flex justify-end gap-3">
                            <button
                                type="button"
                                onClick={() => {
                                    setSenha("")
                                    setNovoTelefone("")
                                    setModalTelefoneAberto(false)
                                }}
                                className="font-inter rounded-xl px-5 py-2 text-[24px] font-bold text-gray-300 hover:text-[#AD1818]"
                            >
                                cancelar
                            </button>

                            <button
                                type="button"
                                onClick={() => {
                                    if (!novoTelefone || !senha) {
                                        alert("Preencha os campos adequadamente")
                                        return
                                    }

                                    const numeros = novoTelefone.replace(/\D/g, "")

                                    if (numeros.length < 10 || numeros.length > 11) {
                                        alert("Digite um telefone válido!!")
                                        return
                                    }

                                    setTelefone(novoTelefone)
                                    setNovoTelefone("")
                                    setSenha("")
                                    setModalTelefoneAberto(false)
                                }}
                                className="font-inter rounded-xl bg-[#AD1818] px-6 py-3 text-[20px] font-bold text-white hover:bg-[#780606]"
                            >
                                confirmar
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </main>
    )
}

export default Perfil
