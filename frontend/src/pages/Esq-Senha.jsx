import { useState } from "react"
import { useNavigate } from "react-router-dom"

import BaseButton from "../components/BaseButton"
import BaseInput from "../components/BaseInput"

function EsqSenha() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [erro, setErro] = useState("")
    const [emailEnviado, setEmailEnviado] = useState(false)

    function handleEmail() {
        if (!email.trim()) {
            setErro("Digite seu e-mail.")
            return
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setErro("Digite um e-mail válido.")
            return
        }

        setErro("")

        //
        //
        //MUDAR ESSA PARTE AQUI QUANDO REALMENTE TIVER VALIDAÇÂO DO EMAIL ENVIADO DE VERDADE!!!!
        setEmailEnviado(true)
        //AQ SO DEIXA PASSAR DE QUALQUER JEITO SE ESTIVER CORRETO A FORMATAÇÃO DO EMAIL!!!!
        //
        //
    }
    return (
        <div>
            {emailEnviado ? (
                <div className="min-h-screen flex flex-col items-center gap-5 justify-center bg-[#252121] px-5 py-8">
                    <h1 className="w-full text-center text-[24px] font-semibold leading-tight text-white">
                        E-mail enviado!
                    </h1>

                    <p className="w-full text-center text-sm leading-relaxed text-white">
                        Enviamos um link para redefinir sua senha. Verifique sua caixa de entrada e siga as instruções.
                    </p>

                    <div className="flex w-full justify-center">
                            <BaseButton
                                texto="Voltar para o login"
                                variante="login"
                                onClick={() => navigate("/login")}
                            />
                        </div>
                </div>
            ) : (
                <div className="min-h-screen flex flex-col items-center justify-center bg-[#252121] px-5 py-8">
                    <div className="flex w-full max-w-sm flex-col items-center gap-5">
                        <h1 className="w-full text-center text-[24px] font-semibold leading-tight text-white">
                            Recuperar senha
                        </h1>

                        <p className="w-full text-center text-sm leading-relaxed text-white">
                            Informe o e-mail cadastrado na sua conta para recuperar sua senha.
                        </p>
                        <div className="flex w-full justify-center">
                            <BaseInput
                                tipo="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                    setErro("")
                                }}
                            />
                        </div>

                        <p className="w-full text-center text-sm leading-relaxed text-white">
                            Enviaremos para seu e-mail um código que será solicitado na próxima etapa.
                        </p>

                        {erro && (
                            <p className="w-full text-center text-sm leading-relaxed text-red-400">
                                {erro}
                            </p>
                        )}

                        <div className="flex w-full justify-center">
                            <BaseButton
                                texto="Solicitar"
                                variante="login"
                                onClick={handleEmail}
                            />
                        </div>

                        <div className="flex w-full justify-center">
                            <BaseButton
                                texto="Voltar"
                                variante="sembg"
                                onClick={() => navigate("/login")}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default EsqSenha