import { useState } from "react"

import BaseHeader from "../components/BaseHeader"
import BaseStatCard from "../components/BaseStatCard"
import BaseClientCard from "../components/BaseClientCard"

function Dashboard() {
    const [clienteParaExcluir, setClienteParaExcluir] = useState(null)

    function abrirConfirmacao(cliente) {
        setClienteParaExcluir(cliente)
    }

    function cancelarExclusao() {
        setClienteParaExcluir(null)
    }

    function confirmarExclusao() {
        console.log("Excluindo:", clienteParaExcluir)

        setClienteParaExcluir(null)
    }

    return (
        <div className="min-h-screen bg-[#252121]">
            <BaseHeader />

            <main className="pt-40">
                <div className="flex justify-center gap-12">
                    <BaseStatCard
                        valor="08"
                        titulo="Novos Atendimentos"
                    />

                    <BaseStatCard
                        valor="05"
                        titulo="Em Atendimento"
                    />

                    <BaseStatCard
                        valor="03"
                        titulo="Aguardando retorno"
                    />

                    <BaseStatCard
                        valor="12"
                        titulo="Atendimentos hoje"
                    />
                </div>

                <section className="mt-12 w-full pl-50 pr-50">
                    <h1 className="text-left text-white font-semibold text-[24px]">
                        Clientes Recentes
                    </h1>

                    <div className="mt-6 max-h-[500px] overflow-y-auto flex flex-col gap-4">

                        <BaseClientCard
                            nome="Tereza dos Santos"
                            data="18/09/2026 às 09:42"
                            status="NOVO"
                            onVerRespostas={() => alert("Ver respostas")}
                            onWhatsApp={() => alert("WhatsApp")}
                            onExcluir={() =>
                                abrirConfirmacao("Tereza dos Santos")
                            }
                        />

                        <BaseClientCard
                            nome="Carlos Oliveira"
                            data="17/09/2026 às 15:20"
                            status="NOVO"
                            onVerRespostas={() => alert("Ver respostas")}
                            onWhatsApp={() => alert("WhatsApp")}
                            onExcluir={() =>
                                abrirConfirmacao("Carlos Oliveira")
                            }
                        />

                        <BaseClientCard
                            nome="Mariana Souza"
                            data="16/09/2026 às 11:05"
                            status="NOVO"
                            onVerRespostas={() => alert("Ver respostas")}
                            onWhatsApp={() => alert("WhatsApp")}
                            onExcluir={() =>
                                abrirConfirmacao("Mariana Souza")
                            }
                        />

                    </div>
                </section>
            </main>

            {clienteParaExcluir && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50">

                    <div className="bg-[#353333] rounded-xl w-96 p-8 flex flex-col items-center">

                        <h2 className="text-white text-xl font-semibold text-center">
                            Deseja excluir {" "}
                            <span className="text-white font-semibold">
                                {clienteParaExcluir}
                            </span>?
                        </h2>

                        <p className="text-[#9E9A9A] text-sm text-center mt-3">
                            Essa ação não poderá ser desfeita.
                        </p>
                        <div className="flex gap-4 mt-8">

                            <button
                                type="button"
                                onClick={confirmarExclusao}
                                className="bg-[#AD1818] hover:bg-[#D91E1E] transition text-white font-semibold rounded-lg px-6 py-3"
                            >
                                Excluir
                            </button>

                            <button
                                type="button"
                                onClick={cancelarExclusao}
                                className="bg-[#353333] hover:text-[#FA2F2F] transition text-[#D91E1E] font-semibold rounded-lg px-6 py-3"
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Dashboard