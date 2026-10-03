[1mdiff --git a/frontend/src/App.jsx b/frontend/src/App.jsx[m
[1mindex 854fa91..ebbc562 100644[m
[1m--- a/frontend/src/App.jsx[m
[1m+++ b/frontend/src/App.jsx[m
[36m@@ -1,18 +1,9 @@[m
 import { Navigate, Route, Routes } from "react-router-dom"[m
 [m
 import Layout from "./layouts/Layout"[m
[31m-[m
[31m-function Login() {[m
[31m-  return <h1>Login</h1>[m
[31m-}[m
[31m-[m
[31m-function Dashboard() {[m
[31m-  return <h1>Dashboard</h1>[m
[31m-}[m
[31m-[m
[31m-function Atendimento() {[m
[31m-  return <h1>Atendimento</h1>[m
[31m-}[m
[32m+[m[32mimport Login from "./pages/Login"[m
[32m+[m[32mimport TesteComponentes from "./pages/TesteComponentes"[m
[32m+[m[32mimport Dashboard from "./pages/Dashboard"[m
 [m
 function NotFound() {[m
   return <h1>Página não encontrada</h1>[m
[36m@@ -21,7 +12,9 @@[m [mfunction NotFound() {[m
 function App() {[m
   return ([m
     <Routes>[m
[31m-      <Route path="/login" element={<Login />} />[m
[32m+[m
[32m+[m[32m<Route path="/login" element={<Login />} />[m
[32m+[m[32m<Route path="/teste" element={<TesteComponentes />} />[m
 [m
       <Route element={<Layout />}>[m
         <Route path="/dashboard" element={<Dashboard />} />[m
[1mdiff --git a/frontend/src/PROJETO PI 2.code-workspace b/frontend/src/PROJETO PI 2.code-workspace[m
[1mnew file mode 100644[m
[1mindex 0000000..62f264a[m
[1m--- /dev/null[m
[1m+++ b/frontend/src/PROJETO PI 2.code-workspace[m	
[36m@@ -0,0 +1,12 @@[m
[32m+[m[32m{[m
[32m+[m	[32m"folders": [[m
[32m+[m		[32m{[m
[32m+[m			[32m"path": "../../.."[m
[32m+[m		[32m},[m
[32m+[m		[32m{[m
[32m+[m			[32m"name": "pi2-2026-2-equipe-2",[m
[32m+[m			[32m"path": "../.."[m
[32m+[m		[32m}[m
[32m+[m	[32m],[m
[32m+[m	[32m"settings": {}[m
[32m+[m[32m}[m
\ No newline at end of file[m
[1mdiff --git a/frontend/src/pages/Login.jsx b/frontend/src/pages/Login.jsx[m
[1mnew file mode 100644[m
[1mindex 0000000..e72c36e[m
[1m--- /dev/null[m
[1m+++ b/frontend/src/pages/Login.jsx[m
[36m@@ -0,0 +1,84 @@[m
[32m+[m[32mimport { useState } from "react"[m
[32m+[m[32mimport { useNavigate } from "react-router-dom"[m
[32m+[m
[32m+[m[32mimport BaseButton from "../components/BaseButton"[m
[32m+[m[32mimport BaseInput from "../components/BaseInput"[m
[32m+[m
[32m+[m[32mfunction Login() {[m
[32m+[m[32m  const navigate = useNavigate()[m
[32m+[m
[32m+[m[32m  const [email, setEmail] = useState("")[m
[32m+[m[32m  const [senha, setSenha] = useState("")[m
[32m+[m[32m  const [erro, setErro] = useState("")[m
[32m+[m
[32m+[m[32m  function handleLogin() {[m
[32m+[m[32m    if (!email || !senha) {[m
[32m+[m[32m      setErro("Preencha o e-mail e a senha.")[m
[32m+[m[32m      return[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    if (!email.includes("@")) {[m
[32m+[m[32m      setErro("Digite um e-mail válido.")[m
[32m+[m[32m      return[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    setErro("")[m
[32m+[m
[32m+[m[32m    navigate("/dashboard")[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  return ([m
[32m+[m[32m    <div className="min-h-screen flex flex-col items-center justify-center bg-[#252121] gap-6">[m
[32m+[m
[32m+[m[32m      <img[m
[32m+[m[32m        src="/imagens/logo.svg"[m
[32m+[m[32m        alt="Logo"[m
[32m+[m[32m        className="w-48"[m
[32m+[m[32m      />[m
[32m+[m
[32m+[m[32m      <h1 className="text-white font-semibold text-[24px] leading-[100%]">[m
[32m+[m[32m        Painel de Atendimento[m
[32m+[m[32m      </h1>[m
[32m+[m
[32m+[m[32m      <p className="text-white text-sm">[m
[32m+[m[32m        Gerencie as informações coletadas pelo assistente virtual[m
[32m+[m[32m      </p>[m
[32m+[m
[32m+[m[32m      <BaseInput[m
[32m+[m[32m        tipo="email"[m
[32m+[m[32m        placeholder="E-mail"[m
[32m+[m[32m        value={email}[m
[32m+[m[32m        onChange={(e) => setEmail(e.target.value)}[m
[32m+[m[32m      />[m
[32m+[m
[32m+[m[32m      <BaseInput[m
[32m+[m[32m        tipo="password"[m
[32m+[m[32m        placeholder="Senha"[m
[32m+[m[32m        value={senha}[m
[32m+[m[32m        onChange={(e) => setSenha(e.target.value)}[m
[32m+[m[32m      />[m
[32m+[m
[32m+[m[32m      {erro && ([m
[32m+[m[32m        <p className="text-red-400 text-sm">[m
[32m+[m[32m          {erro}[m
[32m+[m[32m        </p>[m
[32m+[m[32m      )}[m
[32m+[m
[32m+[m[32m      <BaseButton[m
[32m+[m[32m        texto="Acessar Painel"[m
[32m+[m[32m        variante="login"[m
[32m+[m[32m        onClick={handleLogin}[m
[32m+[m[32m      />[m
[32m+[m
[32m+[m[32m      <button[m
[32m+[m[32m        type="button"[m
[32m+[m[32m        className="text-black font-semibold hover:text-white transition"[m
[32m+[m[32m      >[m
[32m+[m[32m        Esqueci minha senha[m
[32m+[m[32m      </button>[m
[32m+[m
[32m+[m[32m    </div>[m
[32m+[m[32m  )[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mexport default Login[m
