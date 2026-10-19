import BaseHeader from "../components/BaseHeader"
import BaseStatCard from "../components/BaseStatCard"

function DashboardMock() {

    return (
        <div className="min-h-screen bg-[#252121]">

            <BaseHeader />

            <main className="pt-40">

                <div className="flex justify-center gap-12">

                    <BaseStatCard
                        valor="0"
                        titulo="Novos Atendimentos"
                    />

                    <BaseStatCard
                        valor="0"
                        titulo="Em Atendimento"
                    />

                    <BaseStatCard
                        valor="0"
                        titulo="Aguardando retorno"
                    />

                    <BaseStatCard
                        valor="0"
                        titulo="Atendimentos hoje"
                    />

                </div>

                <section className="mt-12 w-full pl-50 pr-50">

                    <h1 className="text-left text-white font-semibold text-[24px]">
                        Clientes Recentes
                    </h1>

                    <div className="mt-6 w-full h-50 flex items-center justify-center">

                        <p className="text-[#9E9A9A]">
                            Sem clientes encontrados
                        </p>

                    </div>

                </section>

            </main>

        </div>
    )
}

export default DashboardMock