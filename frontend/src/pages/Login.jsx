import { useState } from "react"
import { useNavigate } from "react-router-dom"

import BaseButton from "../components/BaseButton"
import BaseInput from "../components/BaseInput"

function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [erro, setErro] = useState("")

  function handleLogin() {
    if (!email || !senha) {
      setErro("Preencha o e-mail e a senha.")
      return
    }

    if (!email.includes("@")) {
      setErro("Digite um e-mail válido.")
      return
    }

    setErro("")

    navigate("/dashboard")
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#252121] gap-6">

      <img
        src="/imagens/logo.svg"
        alt="Logo"
        className="w-48"
      />

      <h1 className="text-white font-semibold text-[24px] leading-[100%]">
        Painel de Atendimento
      </h1>

      <p className="text-white text-sm">
        Gerencie as informações coletadas pelo assistente virtual
      </p>

      <BaseInput
        tipo="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <BaseInput
        tipo="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      {erro && (
        <p className="text-red-400 text-sm">
          {erro}
        </p>
      )}

      <BaseButton
        texto="Acessar Painel"
        variante="login"
        onClick={handleLogin}
      />

      <button
        type="button"
        className="text-black font-semibold hover:text-white transition"
      >
        Esqueci minha senha
      </button>

    </div>
  )
}

export default Login
