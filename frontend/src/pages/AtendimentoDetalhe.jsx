import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import BaseHeader from "../components/BaseHeader";
import {
    getAtendimentoById,
    getConversaByAtendimentoId,
} from "../services/api"


function AtendimentoDetalhe() {
    const { id } = useParams()
    const navigate = useNavigate()

    const [atendimento, setAtendimento] = useState(null)
    const [conversa, setConversa] = useState([])
    const [carregando, setCarregando] = useState(true)
    const [modalAberto, setModalAberto] = useState(false)
    const [status, setStatus] = useState("")
    useEffect(() => {
        async function CarregarDados() {
            const atendimentoEncontrado = await getAtendimentoById(id)
            if (!atendimentoEncontrado) {
                setAtendimento(null)
                setCarregando(false)
                return
            }
            const conversaEncontrada = await getConversaByAtendimentoId(id)

            setAtendimento(atendimentoEncontrado)
            setStatus(atendimentoEncontrado.status)
            setConversa(conversaEncontrada)
            setCarregando(false)
        }

        CarregarDados()
    }, [id])

    if (carregando) {
        return <p>Carregando...</p>
    }
    if (!atendimento) {
        return <p>Atendimento não encontrado.</p>
    }

    return (
        <main className="min-h-screen bg-[#252121] text-white">
            <BaseHeader />

            <div className="mx-auto max-w-6xl p-6 pt-31">
                <button
                    type="button"
                    onClick={() => navigate("/dashboard")}
                    className="font-inter mb-6 text-[16px] font-semibold text-gray-300 hover:text-white"
                >
                    <span>←</span> Voltar para atendimentos
                </button>
                <header className="mb-6">
                    <h1 className="font-jomhuria text-[64px] font-normal">
                        Atendimento de {atendimento.cliente}
                    </h1>

                    <p className="font-plex mt-1 text-gray-400">
                        <span className="text-[24px] font-bold">
                            whatsapp:
                        </span>{" "}
                        <span className="text-[20px] font-medium">
                            {atendimento.telefone}
                        </span>
                    </p>
                </header>

                <section className="grid grid-cols-2 gap-6">

                    <div className="rounded-2xl bg-[rgba(0,0,0,0.42)] p-6 text-white">
                        <h2 className="font-plex mb-4 text-[24px] font-bold">
                            Resumo do atendimento
                        </h2>

                        <p className="font-plex text-[20px] font-normal text-gray-300">
                            {atendimento.resumo}
                        </p>
                    </div>

                    <div className="rounded-2xl bg-[rgba(0,0,0,0.42)] p-6 text-white">
                        <h2 className="font-plex mb-4 text-[32px] font-bold">
                            Histórico da conversa
                        </h2>

                        <div className="space-y-4">
                            {conversa.map((mensagem) => (
                                <div
                                    key={mensagem.id}
                                    className={`flex flex-col ${mensagem.remetente === "chatbot"
                                        ? "items-end"
                                        : mensagem.remetente === "sistema"
                                            ? "items-center"
                                            : "items-start"
                                        }`}
                                >
                                    {mensagem.remetente === "sistema" ? (
                                        <div className="my-6 rounded-xl bg-[#353333] px-4 py-3 text-center">
                                            <p className="font-plex text-[24px] font-medium text-white">
                                                Atendimento encaminhado
                                            </p>

                                            <p className="font-plex mt-1 text-[20px] font-medium text-gray-300">
                                                O cliente solicitou atendimento humano.
                                            </p>
                                        </div>
                                    ) : (
                                        <>
                                            <p className="font-plex mb-1 text-[20px] font-medium uppercase text-gray-400">
                                                {mensagem.remetente}
                                            </p>

                                            <div
                                                className={`max-w-[75%] rounded-xl p-4 ${mensagem.remetente === "cliente"
                                                    ? "bg-[#114BB8] text-white"
                                                    : "bg-[#0D6720] text-white"
                                                    }`}
                                            >
                                                <p className="font-plex text-[20px] font-medium">
                                                    {mensagem.mensagem}
                                                </p>

                                                <span className="mt-2 block text-right text-xs text-gray-300">
                                                    {mensagem.horario}
                                                </span>
                                            </div>
                                        </>
                                    )}

                                </div>
                            ))}
                        </div>
                    </div>

                </section>
                <div className="mt-6 flex justify-end">

                    <button
                        type="button"
                        onClick={() => setModalAberto(true)}
                        className="font-plex rounded-xl bg-[#AD1818] px-6 py-3 text-[20px] font-semibold text-white hover:bg-[#780606]">
                        Assumir atendimento
                    </button>
                </div>

            </div >
            {modalAberto && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6">
                    <div className="w-full max-w-md rounded-2xl bg-[#353333] p-6 text-white">

                        <h2 className="font-instrument text-[24px] font-bold">
                            Assumir atendimento?
                        </h2>

                        <p className="font-inter mt-3 text-[16px] font-normal text-gray-300">
                            Você deseja assumir o atendimento deste cliente?
                        </p>

                        <div className="mt-6 flex justify-end gap-3">
                            <button
                                type="button"
                                onClick={() => setModalAberto(false)}
                                className="font-inter rounded-xl px-5 py-2 text-[24px] font-bold text-gray-300 hover:text-white"
                            >
                                Cancelar
                            </button>

                            <button
                                type="button"
                                onClick={() => {
                                    setStatus("EM ATENDIMENTO")
                                    setConversa((conversaAtual) => {
                                        const jaExisteMsgDoSistema = conversaAtual.some(
                                            (mensagem) => mensagem.remetente === "sistema"
                                        )

                                        if (jaExisteMsgDoSistema) {
                                            return conversaAtual;
                                        }

                                        return [
                                            ...conversaAtual,
                                            {
                                                id: Date.now(),
                                                remetente: "sistema",
                                                mensagem: "Atendimento assumido por um admnistrador.",
                                                horario: new Date().toLocaleTimeString([], {
                                                    hour: "2-digit",
                                                    minute: "2-digit",
                                                }),
                                            },
                                        ]
                                    }
                                    )
                                    setModalAberto(false)
                                }}
                                className="font-plex rounded-xl bg-[#AD1818] px-6 py-3 text-[20px] font-bold text-white hover:bg-[#780606]"
                            >
                                Assumir atendimento
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </main >
    )
}
export default AtendimentoDetalhe