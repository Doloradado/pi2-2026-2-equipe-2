import { useState } from "react";
import { useNavigate } from "react-router-dom";

import BaseButton from "../components/BaseButton";
import BaseInput from "../components/BaseInput";

const API_URL = `${window.location.protocol}//${window.location.hostname}:8080/api/Auth`;

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function handleLogin() {
    if (!email || !senha) {
      setErro("Preencha o e-mail e a senha.");
      return;
    }

    if (!email.includes("@")) {
      setErro("Digite um e-mail válido.");
      return;
    }

    setErro("");
    setCarregando(true);

    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
      });

      const dados = await response.json();

      if (!response.ok) {
        throw new Error(dados.mensagem || "E-mail ou senha inválidos.");
      }

      if (!dados.token) {
        throw new Error("A API não retornou um token de autenticação.");
      }

      localStorage.setItem("token", dados.token);
      navigate("/dashboard");
    } catch (error) {
      setErro(error.message || "Não foi possível realizar o login.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#252121] gap-6">
      <img src="/imagens/logo.svg" alt="Logo" className="w-48" />

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

      {erro && <p className="text-red-400 text-sm">{erro}</p>}

      <BaseButton
        texto={carregando ? "Entrando..." : "Acessar Painel"}
        variante="login"
        onClick={handleLogin}
      />

      <BaseButton
        texto="Esqueci minha senha"
        variante="sembg"
        onClick={() => navigate("/esqsenha")}
      />
    </div>
  );
}

export default Login;
