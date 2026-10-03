import BaseHeader from "../components/BaseHeader"
import BaseStatCard from "../components/BaseStatCard"
import BaseClientCard from "../components/BaseClientCard"

function Dashboard() {
    return (
        <div className="min-h-screen bg-[#252121]">
            <BaseHeader />

            <main className="pt-40">
                {/* CARDS DE ESTATÍSTICAS */}
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

                {/* CLIENTES RECENTES */}
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

                        <BaseClientCard
                            nome="Mariana Souza"
                            data="16/09/2026 às 11:05"
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

export default Dashboard