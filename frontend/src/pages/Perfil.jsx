import { useState } from "react"
import BaseHeader from "../components/BaseHeader"
import BaseBackButton from "../components/BaseBackButton"

function Perfil() {
    const [modalEmailAberto, setModalEmailAberto] = useState(false)
    const email = "wilson@email.com"
    const [senha, setSenha] = useState("")
    const [novoEmail, setNovoEmail] = useState("")

    const [modalTelefoneAberto, setModalTelefoneAberto] = useState(false)
    const telefone = "(88) 9XXXX-XXXX"
    const [novoTelefone, setNovoTelefone] = useState("")

    const [errosEmail, setErrosEmail] = useState({
        novoEmail: "",
        senha: "",
    })
    const [errosTelefone, setErrosTelefone] = useState({
        novoTelefone: "",
        senha: "",
    })
    const [mensagemEmail, setMensagemEmail] = useState("")
    const [mensagemTelefone, setMensagemTelefone] = useState("")
    function formatarTelefone(valor) {
        const digitos = valor.replace(/\D/g, "").slice(0, 11)

        if (digitos.length === 0) {
            return ""
        }

        if (digitos.length === 1) {
            return `(${digitos}`
        }

        const ddd = digitos.slice(0, 2)
        const numero = digitos.slice(2)

        if (numero.length === 0) {
            return `(${ddd})`
        }

        const celular = numero.startsWith("9")
        const limiteAntesDoHifen = celular ? 5 : 4

        if (numero.length <= limiteAntesDoHifen) {
            return `(${ddd}) ${numero}`
        }

        return `(${ddd}) ${numero.slice(0, limiteAntesDoHifen)}-${numero.slice(limiteAntesDoHifen)}`
    }
    function validarFormularioEmail() {
        const novosErros = {
            novoEmail: "",
            senha: "",
        }


        const emailNormalizado = novoEmail.trim()

        if (!emailNormalizado) {
            novosErros.novoEmail = "Informe o novo e-mail."
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailNormalizado)) {
            novosErros.novoEmail = "Digite um e-mail válido."
        }

        if (!senha.trim()) {
            novosErros.senha = "Informe sua senha."
        }

        setErrosEmail(novosErros)

        return Object.values(novosErros).every((erro) => erro === "")
    }
    function validarFormularioTelefone() {
        const novosErros = {
            novoTelefone: "",
            senha: "",
        }

        const telefoneNormalizado = novoTelefone.replace(/\D/g, "")

        if (!telefoneNormalizado) {
            novosErros.novoTelefone = "Informe o novo telefone."
        } else if (
            telefoneNormalizado.length !== 10 &&
            telefoneNormalizado.length !== 11
        ) {
            novosErros.novoTelefone =
                "Digite um telefone com DDD e 10 ou 11 dígitos."
        }

        if (!senha.trim()) {
            novosErros.senha = "Informe sua senha."
        }

        setErrosTelefone(novosErros)

        return Object.values(novosErros).every((erro) => erro === "")
    }
    return (
        <main className="min-h-screen bg-[#252121] text-white">
            <BaseHeader />

            <div className="w-full p-6 pt-[180px] md:pt-31">
                <BaseBackButton />
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
                                onChange={(e) => {
                                    setNovoEmail(e.target.value)

                                    setErrosEmail((errosAtuais) => ({
                                        ...errosAtuais,
                                        novoEmail: "",
                                    }))
                                    setMensagemEmail("")
                                }}
                                aria-invalid={Boolean(errosEmail.novoEmail)}
                                aria-describedby={
                                    errosEmail.novoEmail ? "erro-novo-email" : undefined
                                }
                                className="font-inter rounded-xl bg-[#EDE6E6] px-4 py-3 text-[16px] font-normal text-black outline-none"
                            />

                            {errosEmail.novoEmail && (
                                <p
                                    id="erro-novo-email"
                                    role="alert"
                                    className="font-inter text-sm text-red-400"
                                >
                                    {errosEmail.novoEmail}
                                </p>
                            )}
                            <input
                                type="password"
                                placeholder="Digite sua senha"
                                value={senha}
                                onChange={(e) => {
                                    setSenha(e.target.value)

                                    setErrosEmail((errosAtuais) => ({
                                        ...errosAtuais,
                                        senha: "",
                                    }))
                                    setMensagemEmail("")
                                }}
                                aria-invalid={Boolean(errosEmail.senha)}
                                aria-describedby={
                                    errosEmail.senha ? "erro-senha-email" : undefined
                                }
                                className="font-plex rounded-xl bg-[#EDE6E6] px-4 py-3 text-[16px] font-normal text-black outline-none"
                            />

                            {errosEmail.senha && (
                                <p
                                    id="erro-senha-email"
                                    role="alert"
                                    className="font-inter text-sm text-red-400"
                                >
                                    {errosEmail.senha}
                                </p>
                            )}
                        </div>
                        {mensagemEmail && (
                            <p
                                role="status"
                                className="font-inter text-sm text-amber-300"
                            >
                                {mensagemEmail}
                            </p>
                        )}
                        <div className="mt-6 flex justify-end gap-3">
                            <button
                                type="button"
                                onClick={() => {
                                    setMensagemEmail("")
                                    setNovoEmail("")
                                    setSenha("")
                                    setErrosEmail({
                                        novoEmail: "",
                                        senha: "",
                                    })
                                    setModalEmailAberto(false)
                                }}
                                className="font-inter rounded-xl px-5 py-2 text-[24px] font-bold text-gray-300 hover:text-[#AD1818]"
                            >
                                cancelar
                            </button>

                            <button
                                type="button"
                                onClick={() => {
                                    setMensagemEmail("")

                                    if (!validarFormularioEmail()) {
                                        return
                                    }

                                    setMensagemEmail(
                                        "Os campos são válidos, mas a alteração ainda depende da integração com o servidor."
                                    )
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
                                    setNovoTelefone(formatarTelefone(e.target.value))

                                    setErrosTelefone((errosAtuais) => ({
                                        ...errosAtuais,
                                        novoTelefone: "",
                                    }))

                                    setMensagemTelefone("")
                                }}
                                aria-invalid={Boolean(errosTelefone.novoTelefone)}
                                aria-describedby={
                                    errosTelefone.novoTelefone
                                        ? "erro-novo-telefone"
                                        : undefined
                                }
                                className="font-inter rounded-xl bg-[#EDE6E6] px-4 py-3 text-[16px] font-normal text-black outline-none"
                            />

                            {errosTelefone.novoTelefone && (
                                <p
                                    id="erro-novo-telefone"
                                    role="alert"
                                    className="font-inter text-sm text-red-400"
                                >
                                    {errosTelefone.novoTelefone}
                                </p>
                            )}

                            <input
                                type="password"
                                value={senha}
                                onChange={(e) => {
                                    setSenha(e.target.value)

                                    setErrosTelefone((errosAtuais) => ({
                                        ...errosAtuais,
                                        senha: "",
                                    }))

                                    setMensagemTelefone("")
                                }}
                                placeholder="Digite sua senha"
                                aria-invalid={Boolean(errosTelefone.senha)}
                                aria-describedby={
                                    errosTelefone.senha
                                        ? "erro-senha-telefone"
                                        : undefined
                                }
                                className="font-plex rounded-xl bg-[#EDE6E6] px-4 py-3 text-[16px] font-normal text-black outline-none"
                            />

                            {errosTelefone.senha && (
                                <p
                                    id="erro-senha-telefone"
                                    role="alert"
                                    className="font-inter text-sm text-red-400"
                                >
                                    {errosTelefone.senha}
                                </p>
                            )}
                        </div>
                        {mensagemTelefone && (
                            <p
                                role="status"
                                className="font-inter text-sm text-amber-300"
                            >
                                {mensagemTelefone}
                            </p>
                        )}
                        <div className="mt-6 flex justify-end gap-3">
                            <button
                                type="button"
                                onClick={() => {
                                    setSenha("")
                                    setNovoTelefone("")
                                    setErrosTelefone({
                                        novoTelefone: "",
                                        senha: "",
                                    })
                                    setMensagemTelefone("")
                                    setModalTelefoneAberto(false)
                                }}
                                className="font-inter rounded-xl px-5 py-2 text-[24px] font-bold text-gray-300 hover:text-[#AD1818]"
                            >
                                cancelar
                            </button>

                            <button
                                type="button"
                                onClick={() => {
                                    setMensagemTelefone("")

                                    if (!validarFormularioTelefone()) {
                                        return
                                    }

                                    setMensagemTelefone(
                                        "Os campos são válidos, mas a alteração ainda depende da integração com o servidor."
                                    )
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
