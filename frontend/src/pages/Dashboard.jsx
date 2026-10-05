import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import BaseHeader from "../components/BaseHeader"
import BaseStatCard from "../components/BaseStatCard"
import BaseClientCard from "../components/BaseClientCard"
import DashboardMock from "./Dashboard-mock"
import DashboardMockC from "./DashboardMockC"

import { getAtendimentos } from "../services/mockApi"

function Dashboard() {
    const navigate = useNavigate()

    const [estado, setEstado] = useState("mock")
    const [atendimentos, setAtendimentos] = useState([])
    const [clienteParaExcluir, setClienteParaExcluir] = useState(null)

    useEffect(() => {
        let ativo = true

        async function carregar() {
            setEstado("loading")

            const dados = await getAtendimentos()

            if (!ativo) return

            if (dados.length === 0) {
                setEstado("mock")
            } else {
                setAtendimentos(dados)
                setEstado("data")
            }
        }

        carregar()

        return () => {
            ativo = false
        }
    }, [])

    function abrirConfirmacao(cliente) {
        setClienteParaExcluir(cliente)
    }

    function cancelarExclusao() {
        setClienteParaExcluir(null)
    }

    function confirmarExclusao() {
        setAtendimentos((listaAtual) =>
            listaAtual.filter(
                (atendimento) => atendimento.id !== clienteParaExcluir.id
            )
        )

        setClienteParaExcluir(null)
    }

    if (estado === "mock") {
        return <DashboardMock />
    }

    if (estado === "loading") {
        return <DashboardMockC />
    }

    const totalNovos = atendimentos.filter((a) => a.status === "NOVO").length
    const totalEmAtendimento = atendimentos.filter(
        (a) => a.status === "EM ATENDIMENTO"
    ).length
    const totalAguardando = atendimentos.filter(
        (a) => a.status === "AGUARDANDO RETORNO"
    ).length
    const totalHoje = atendimentos.length

    return (
        <div className="min-h-screen bg-[#252121]">
            <BaseHeader />

            <main className="pt-[180px] md:pt-40">
                <div className="mx-auto grid w-full max-w-7xl grid-cols-1 place-items-center gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
                    <BaseStatCard
                        valor={String(totalNovos).padStart(2, "0")}
                        titulo="Novos Atendimentos"
                    />

                    <BaseStatCard
                        valor={String(totalEmAtendimento).padStart(2, "0")}
                        titulo="Em Atendimento"
                    />

                    <BaseStatCard
                        valor={String(totalAguardando).padStart(2, "0")}
                        titulo="Aguardando retorno"
                    />

                    <BaseStatCard
                        valor={String(totalHoje).padStart(2, "0")}
                        titulo="Atendimentos hoje"
                    />
                </div>

                <section className="mt-12 w-full px-6 md:px-8 lg:pl-50 lg:pr-50">
                    <h1 className="text-left text-white font-semibold text-[24px]">
                        Clientes Recentes
                    </h1>

                    <div className="mt-6 max-h-[500px] overflow-y-auto flex flex-col gap-4 pb-4">
                        {atendimentos.map((atendimento) => (
                            <BaseClientCard
                                key={atendimento.id}
                                nome={atendimento.cliente}
                                data={atendimento.data}
                                status={atendimento.status}
                                onVerRespostas={() =>
                                    navigate(`/atendimento/${atendimento.id}`)
                                }
                                onWhatsApp={() => alert("WhatsApp")}
                                onExcluir={() =>
                                    abrirConfirmacao(atendimento)
                                }
                            />
                        ))}
                    </div>
                </section>
            </main>

            {clienteParaExcluir && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50">
                    <div className="bg-[#353333] rounded-xl w-96 p-8 flex flex-col items-center">
                        <h2 className="text-white text-xl font-semibold text-center">
                            Deseja excluir{" "}
                            <span className="text-white font-semibold">
                                {clienteParaExcluir.cliente}
                            </span>
                            ?
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