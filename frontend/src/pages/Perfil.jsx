import { useState } from "react";
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
        <main>
            <BaseHeader />
            <div className="mx-auto max-w-6xl p-6 pt-31">
                <h1 className="font-jomhuria text-[64px] font-normal text-black">
                    Meu perfil
                </h1>

                <p className="font-instrument mt-2 text-[24px] font-bold text-black">
                    Wilson Meirelles
                </p>

                <div className="mt-8">
                    <h2 className="font-plex text-[20px] font-semibold text-black">
                        Email associado ao sistema
                    </h2>
                    <div className="mt-2 flex items-center justify-between">
                        <p className="font-plex text-[20px] font-semibold text-black">
                            {email}
                        </p>

                        <button
                            type="button"
                            onClick={() => setModalEmailAberto(true)}
                            className="font-plex text-[20px] font-semibold text-black hover:text-[#AD1818]"
                        >
                            Editar
                        </button>
                    </div>
                    <div className="mt-8">
                        <h2 className="font-plex text-[20px] font-semibold text-black">
                            Telefone associado ao sistema
                        </h2>

                        <div className="mt-2 flex items-center justify-between">
                            <p className="font-plex text-[20px] font-semibold text-black">
                                {telefone}
                            </p>

                            <button
                                type="button"
                                onClick={() => setModalTelefoneAberto(true)}
                                className="font-plex text-[20px] font-semibold text-black hover:text-[#AD1818]"
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
                                className="font-inter text-[16px] font-normal rounded-xl bg-[#252121] px-4 py-3 text-white outline-none"
                            />

                            <input
                                type="password"
                                placeholder="Digite sua senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                className="font-plex text-[16px] font-normal rounded-xl bg-[#252121] px-4 py-3 text-white outline-none"
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
                                className="font-inter rounded-xl px-5 py-2 text-[24px] font-bold text-gray-300 hover:text-white"
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
                                }
                                }
                                className="font-inter rounded-xl bg-[#AD1818] px-6 py-3 text-[20px] font-bold text-white hover:bg-[#780606]"
                            >
                                confirmar
                            </button>
                        </div>

                    </div>
                </div>
            )
            }
            {
                modalTelefoneAberto && (
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
                                    className="font-inter font-normal rounded-xl bg-[#252121] px-4 py-3 text-[16px] text-white outline-none"
                                />

                                <input
                                    type="password"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                    placeholder="Digite sua senha"
                                    className="font-plex font-normal rounded-xl bg-[#252121] px-4 py-3 text-[16px] text-white outline-none"
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
                                    className="font-inter rounded-xl px-5 py-2 text-[24px] font-bold text-gray-300 hover:text-white"
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
                                        if(numeros.length < 10 || numeros.length > 11)
                                        {
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
                )
            }
        </main >
    )
}

export default Perfil