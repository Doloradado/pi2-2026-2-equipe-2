//[#780606]

function Painel() {
    return (
        <div className="min-h-screen flex flex-col bg-[#252121] flex items-center">
            <header className="fixed top-0 left-0 w-full h-25 bg-[#780606] flex items-center justify-between pl-12 pr-6 z-50">

                <div className="flex items-center gap-4">

                    <img
                        src="/imagens/logo2.svg"
                        alt="Logo"
                        className="w-24"
                    />

                    <div className="flex flex-col justify-center">
                        <h1 className="text-white font-semibold text-[24px] leading-[100%]">
                            Olá, Wilson!
                        </h1>

                        <p className="text-white text-[14px] mt-1">
                            Acompanhe os atendimentos recebidos pelo assistente virtual.
                        </p>
                    </div>



                </div>

                <nav className="flex items-center gap-6">
                    <button className="text-white hover:text-[#AD1818] transition">
                        Administrador
                    </button>
                </nav>


            </header>

            <div className="mt-40 flex gap-12">

                <div className="bg-[#151313] rounded-xl w-70 h-40 flex flex-col items-center justify-center gap-2">
                    <span className="text-6xl font-bold text-[#C4B2B2]">
                        08
                    </span>
                    <span className="text-sm font-semibold text-[#9E9A9A]">
                        Novos Atendimentos
                    </span>
                </div>

                <div className="bg-[#151313] rounded-xl w-70 h-40 flex flex-col items-center justify-center gap-2">
                    <span className="text-6xl font-bold text-[#C4B2B2]">
                        05
                    </span>
                    <span className="text-sm font-semibold text-[#9E9A9A]">
                        Em Atendimento
                    </span>
                </div>

                <div className="bg-[#151313] rounded-xl w-70 h-40 flex flex-col items-center justify-center gap-2">
                    <span className="text-6xl font-bold text-[#C4B2B2]">
                        03
                    </span>
                    <span className="text-sm font-semibold text-[#9E9A9A]">
                        Aguardando retorno
                    </span>
                </div>

                <div className="bg-[#151313] rounded-xl w-70 h-40 flex flex-col items-center justify-center gap-2">
                    <span className="text-6xl font-bold text-[#C4B2B2]">
                        12
                    </span>
                    <span className="text-sm font-semibold text-[#9E9A9A]">
                        Atendimentos hoje
                    </span>
                </div>

            </div>
            <div className="mt-12 w-full pl-50">
                <h1 className="text-left text-white font-semibold text-[24px]">
                    Cliente Recentes
                </h1>
            </div>

            <div className="w-full pl-50 pr-50 mt-6 max-h-[500px] overflow-y-auto flex flex-col gap-4">

                {/* CLIENTE 1 */}
                <div className="w-full h-25 bg-[#151313] rounded-xl flex items-center px-6 flex-shrink-0">

                    <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-[#252121] flex items-center justify-center">
                        <h1 className="text-[60px]">👤</h1>
                    </div>

                    <div className="ml-5 flex flex-col justify-center w-70">
                        <h2 className="text-white font-semibold text-[16px]">
                            Tereza dos Santos
                        </h2>

                        <p className="text-[#9E9A9A] text-[12px] mt-2">
                            Atendimento recebido em 18/09/2026 às 09:42
                        </p>
                    </div>

                    <div className="ml-10">
                        <button className="bg-[#780606] hover:bg-[#9E0B0B] transition text-white text-[12px] font-semibold rounded-lg px-8 py-3">
                            Ver respostas
                        </button>
                    </div>

                    <div className="ml-16">
                        <button className="transition hover:opacity-60">
                            <img
                                src="/imagens/whatsapp.svg"
                                alt="WhatsApp"
                                className="w-8 h-8"
                            />
                        </button>
                    </div>

                    <div className="ml-16">
                        <span className="bg-[#087A1C] text-white text-[12px] font-semibold rounded-full px-12 py-2">
                            NOVO
                        </span>
                    </div>

                    <div className="ml-auto">
                        <button className="transition hover:opacity-60">
                            <img
                                src="/imagens/lixeira.svg"
                                alt="Lixeira"
                                className="w-8 h-8"
                            />
                        </button>
                    </div>

                </div>


                {/* CLIENTE 2 */}
                <div className="w-full h-25 bg-[#151313] rounded-xl flex items-center px-6 flex-shrink-0">

                <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-[#252121] flex items-center justify-center">
                        <h1 className="text-[60px]">👤</h1>
                    </div>

                    <div className="ml-5 flex flex-col justify-center w-70">
                        <h2 className="text-white font-semibold text-[16px]">
                            Carlos Oliveira
                        </h2>

                        <p className="text-[#9E9A9A] text-[12px] mt-2">
                            Atendimento recebido em 17/09/2026 às 15:20
                        </p>
                    </div>

                    <div className="ml-10">
                        <button className="bg-[#780606] hover:bg-[#9E0B0B] transition text-white text-[12px] font-semibold rounded-lg px-8 py-3">
                            Ver respostas
                        </button>
                    </div>

                    <div className="ml-16">
                        <button className="transition hover:opacity-60">
                            <img
                                src="/imagens/whatsapp.svg"
                                alt="WhatsApp"
                                className="w-8 h-8"
                            />
                        </button>
                    </div>

                    <div className="ml-16">
                        <span className="bg-[#087A1C] text-white text-[12px] font-semibold rounded-full px-12 py-2">
                            NOVO
                        </span>
                    </div>

                    <div className="ml-auto">
                        <button className="transition hover:opacity-60">
                            <img
                                src="/imagens/lixeira.svg"
                                alt="Lixeira"
                                className="w-8 h-8"
                            />
                        </button>
                    </div>

                </div>


                {/* CLIENTE 3 */}
                <div className="w-full h-25 bg-[#151313] rounded-xl flex items-center px-6 flex-shrink-0">

                <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-[#252121] flex items-center justify-center">
                        <h1 className="text-[60px]">👤</h1>
                    </div>

                    <div className="ml-5 flex flex-col justify-center w-70">
                        <h2 className="text-white font-semibold text-[16px]">
                            Mariana Souza
                        </h2>

                        <p className="text-[#9E9A9A] text-[12px] mt-2">
                            Atendimento recebido em 16/09/2026 às 11:05
                        </p>
                    </div>

                    <div className="ml-10">
                        <button className="bg-[#780606] hover:bg-[#9E0B0B] transition text-white text-[12px] font-semibold rounded-lg px-8 py-3">
                            Ver respostas
                        </button>
                    </div>

                    <div className="ml-16">
                        <button className="transition hover:opacity-60">
                            <img
                                src="/imagens/whatsapp.svg"
                                alt="WhatsApp"
                                className="w-8 h-8"
                            />
                        </button>
                    </div>

                    <div className="ml-16">
                        <span className="bg-[#087A1C] text-white text-[12px] font-semibold rounded-full px-12 py-2">
                            NOVO
                        </span>
                    </div>

                    <div className="ml-auto">
                        <button className="transition hover:opacity-60">
                            <img
                                src="/imagens/lixeira.svg"
                                alt="Lixeira"
                                className="w-8 h-8"
                            />
                        </button>
                    </div>

                </div>

                {/* Pode continuar adicionando mais cards aqui */}

            </div>


        </div>
    )
}

export default Painel