import BaseHeader from "../components/BaseHeader"
import BaseStatCard from "../components/BaseStatCard"
import DashboardMock from "./Dashboard-mock"

function DashboardMockC() {

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

                    <div className="mt-6 w-full h-50 flex flex-col items-center justify-center">

                        <h1 className="text-left text-white font-semibold text-[30px]">
                            Carregando Atendimentos...
                        </h1>

                        <p className="text-white mt-4">
                            Aguarde enquanto buscamos os atendimentos recebidos.
                        </p>
                        <div className="mt-12 flex items-center justify-center">
                            <div
                                className="
      h-[120px] w-[120px] shrink-0
      rounded-full
      border-[10px] border-white/15
      border-t-white
      animate-spin
    "
                            />
                        </div>
                    </div>

                </section>

            </main>

        </div>
    )
}

export default DashboardMockC