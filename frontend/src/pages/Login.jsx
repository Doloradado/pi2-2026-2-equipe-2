import { useState } from "react"
import { useNavigate } from "react-router-dom"

import BaseButton from "../components/BaseButton"
import BaseInput from "../components/BaseInput"
function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [erro, setErro] = useState("")
  const [aviso, setAviso] = useState("")
  const [confirmando, setConfirmando] = useState(false)

  function handleLogin() {
    if (confirmando) {
      navigate("/dashboard")
      return
    }

    if (!email || !senha) {
      setErro("Preencha o e-mail e a senha.")
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErro("Digite um e-mail válido.")
      return
    }

    setErro("")
    setAviso("Os campos são válidos, mas a alteração ainda depende da integração com o servidor, clique novamente para entrar.")
    setConfirmando(true)
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
        onChange={(e) => { setEmail(e.target.value); setConfirmando(false); setAviso("") }}
      />

      <BaseInput
        tipo="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => { setSenha(e.target.value); setConfirmando(false); setAviso("") }}
      />

      {erro && (
        <p className="text-red-400 text-sm">
          {erro}
        </p>
      )}

      {aviso && (
        <p className="text-yellow-300 text-sm text-center max-w-md">
          {aviso}
        </p>
      )}

      <BaseButton
        texto="Acessar Painel"
        variante="login"
        onClick={handleLogin}
      />

      <BaseButton
        texto="Esqueci minha senha"
        variante="sembg"
        onClick={() => navigate("/esqsenha")}
      />
    </div>
  )
}

export default Login