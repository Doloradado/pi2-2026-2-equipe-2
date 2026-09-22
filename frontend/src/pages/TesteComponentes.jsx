import { useState } from "react"

import BaseButton from "../components/BaseButton"
import BaseInput from "../components/BaseInput"
import BaseStatCard from "../components/BaseStatCard"
import BaseClientCard from "../components/BaseClientCard"
import BaseHeader from "../components/BaseHeader"

function TesteComponentes() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  return (
    <div className="min-h-screen bg-[#322E2E]">

      {/* Cabeçalho */}
      <BaseHeader />

      {/* Área de testes */}
      <main className="flex flex-col items-center gap-6 px-6 py-10">

        <h1 className="text-white text-2xl font-semibold">
          Teste dos componentes
        </h1>

        {/* BaseButton */}
        <section className="flex flex-col items-center gap-3">
          <p className="text-white font-medium">
            BaseButton
          </p>

          <BaseButton
            texto="Acessar Painel"
            variante="login"
            onClick={() => alert("Botão funcionando!")}
          />

          <BaseButton
            texto="Ver respostas"
            variante="acao"
            onClick={() => alert("Ver respostas funcionando!")}
          />

          <BaseButton
            texto="Botão desabilitado"
            disabled={true}
          />
        </section>

        {/* BaseInput */}
        <section className="flex flex-col items-center gap-3">
          <p className="text-white font-medium">
            BaseInput
          </p>

          <BaseInput
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <BaseInput
            tipo="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <BaseInput
            placeholder="Campo desabilitado"
            disabled={true}
          />
        </section>

        {/* BaseStatCard */}
        <section className="flex flex-col items-center gap-3">
          <p className="text-white font-medium">
            BaseStatCard
          </p>

          <div className="flex gap-6">
            <BaseStatCard
              valor="3"
              titulo="Novos Atendimentos"
            />

            <BaseStatCard
              valor="6"
              titulo="Em Atendimento"
            />
          </div>
        </section>

        {/* BaseClientCard */}
        <section className="w-full max-w-4xl flex flex-col items-center gap-3">
          <p className="text-white font-medium">
            BaseClientCard
          </p>

          <div className="w-full flex flex-col gap-4">
            <BaseClientCard
              nome="Tereza dos Santos"
              data="18/09/2026 às 09:42"
              status="NOVO"
              onVerRespostas={() => alert("Ver respostas")}
              onWhatsApp={() => alert("WhatsApp")}
              onExcluir={() => alert("Excluir")}
            />

            <BaseClientCard
              nome="Carlos Oliveira"
              data="17/09/2026 às 15:20"
              status="NOVO"
              onVerRespostas={() => alert("Ver respostas")}
              onWhatsApp={() => alert("WhatsApp")}
              onExcluir={() => alert("Excluir")}
            />
          </div>
        </section>

      </main>
    </div>
  )
}

export default TesteComponentes