import { useState } from "react"

import BaseButton from "../components/BaseButton"
import BaseInput from "../components/BaseInput"
import { Route, useNavigate } from "react-router-dom"

function EsqSenha() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [erro, setErro] = useState("")


    function handleEmail() {

        if (!email.includes("@")) {
            setErro("Digite um e-mail válido.")
            return
        }

        setErro("")
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#252121] gap-6">

            <h1 className="text-white font-semibold text-[24px] leading-[100%]">
                Recuperar senha
            </h1>

            <p className="text-white text-sm">
                Informe o e-mail cadastrado na sua conta para recuperar sua senha
            </p>

            <BaseInput
                tipo="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />


            <p className="text-white text-sm">
                Enviaremos para seu e-mail  um código que será solicitado na proxima etapa
            </p>


            {erro && (
                <p className="text-red-400 text-sm">
                    {erro}
                </p>
            )}

            <BaseButton
                texto="Solicitar"
                variante="login"
                onClick={handleEmail}
            />


            <BaseButton
                texto="Voltar"
                variante="sembg"
                onClick={() => navigate("/login")}
            />

        </div>
    )
}

export default EsqSenha
