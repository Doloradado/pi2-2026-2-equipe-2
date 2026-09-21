import { useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#322E2E] gap-6">

      <img
        src="imagens/logo.svg"
        alt="Logo"
        className="w-48"
      />

      <h1 className="text-white font-semibold text-[24px] leading-[100%]">
        Painel de Atendimento
      </h1>

      <p className="text-white text-sm">
        Gerencie as informações coletadas pelo assistente virtual
      </p>

      <input
        type="text"
        placeholder="E-mail"
        className="w-72 p-2 rounded-lg bg-white"
      />

      <input
        type="text"
        placeholder="Senha"
        className="w-72 p-2 rounded-lg bg-white"
      />

      <button
        onClick={() => navigate("/painel")}
        className="bg-[#AD1818] text-white w-72 p-2 rounded-lg font-semibold hover:bg-[#8F1414] transition"
      >
        Acessar Painel
      </button>

      <button className="text-black font-semibold hover:text-[#FFFFFF] transition">
                        Esqueci minha senha
                    </button>

    </div>
  )
}

export default Login