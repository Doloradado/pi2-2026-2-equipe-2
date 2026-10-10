
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import BaseHeader from "../components/BaseHeader";
import BaseBackButton from "../components/BaseBackButton";

import { getMensagens } from "../services/api";

function AtendimentoDetalhe() {
  const { id } = useParams();

  const [conversa, setConversa] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");
  const [modalAberto, setModalAberto] = useState(false);

  useEffect(() => {
    let ativo = true;

    async function carregarDados() {
      try {
        setCarregando(true);
        setErro("");

        const mensagens = await getMensagens(id);

        if (ativo) {
          setConversa(Array.isArray(mensagens) ? mensagens : []);
        }
      } catch {
        if (ativo) {
          setErro("Não foi possível carregar o histórico da conversa.");
        }
      } finally {
        if (ativo) {
          setCarregando(false);
        }
      }
    }

    carregarDados();

    return () => {
      ativo = false;
    };
  }, [id]);

  function formatarData(data) {
    if (!data) return "";

    const dataConvertida = new Date(data);

    if (Number.isNaN(dataConvertida.getTime())) {
      return "";
    }

    return dataConvertida.toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function assumirAtendimento() {
    setModalAberto(false);
    setErro(
      "A função de assumir atendimento ainda não está disponível no backend.",
    );
  }

  if (carregando) {
    return (
      <main className="min-h-screen bg-[#252121] text-white">
        <BaseHeader />
        <p className="px-6 pt-[180px]">Carregando histórico...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#252121] text-white">
      <BaseHeader />

      <div className="mx-auto max-w-6xl p-6 pt-[180px] md:pt-31">
        <BaseBackButton />

        <header className="mb-6">
          <h1 className="font-jomhuria text-[40px] font-normal leading-none md:text-[64px]">
            Atendimento
          </h1>

          <p className="font-plex mt-1 text-gray-400">
            <span className="text-[20px] font-medium">Sessão: {id}</span>
          </p>
        </header>

        {erro && (
          <p className="mb-6 text-red-400" role="alert">
            {erro}
          </p>
        )}

        <section className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-[rgba(0,0,0,0.42)] p-6 text-white">
            <h2 className="font-plex mb-4 text-[24px] font-bold">
              Resumo do atendimento
            </h2>

            <p className="font-plex text-[20px] font-normal text-gray-300">
              O resumo ainda não está disponível pela API atual.
            </p>
          </div>

          <div className="rounded-2xl bg-[rgba(0,0,0,0.42)] p-6 text-white">
            <h2 className="font-plex mb-4 text-[32px] font-bold">
              Histórico da conversa
            </h2>

            {conversa.length === 0 ? (
              <p className="text-gray-400">
                Nenhuma mensagem encontrada nesta sessão.
              </p>
            ) : (
              <div className="space-y-4">
                {conversa.map((mensagem, indice) => {
                  const remetente = (mensagem.remetente ?? "").toUpperCase();

                  const mensagemCliente =
                    remetente === "CLIENTE" || remetente === "USUARIO";

                  const mensagemSistema = remetente === "SISTEMA";

                  const conteudo =
                    mensagem.conteudo ?? "Conteúdo da mensagem indisponível.";

                  return (
                    <div
                      key={
                        mensagem.id ??
                        mensagem.idMensagemWhatsapp ??
                        `${id}-${indice}`
                      }
                      className={`flex flex-col ${
                        mensagemSistema
                          ? "items-center"
                          : mensagemCliente
                            ? "items-start"
                            : "items-end"
                      }`}
                    >
                      {mensagemSistema ? (
                        <div className="my-4 rounded-xl bg-[#353333] px-4 py-3 text-center">
                          <p className="font-plex text-[18px] font-medium">
                            {conteudo}
                          </p>

                          <span className="mt-2 block text-xs text-gray-400">
                            {formatarData(mensagem.dataEnvio)}
                          </span>
                        </div>
                      ) : (
                        <>
                          <p className="font-plex mb-1 text-[16px] font-medium uppercase text-gray-400">
                            {mensagem.remetente}
                          </p>

                          <div
                            className={`max-w-[90%] rounded-xl p-4 ${
                              mensagemCliente
                                ? "bg-[#114BB8] text-white"
                                : "bg-[#0D6720] text-white"
                            }`}
                          >
                            <p className="font-plex text-[18px] font-medium break-words">
                              {conteudo}
                            </p>

                            <span className="mt-2 block text-right text-xs text-gray-300">
                              {formatarData(mensagem.dataEnvio)}
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={() => setModalAberto(true)}
            className="font-plex rounded-xl bg-[#AD1818] px-6 py-3 text-[20px] font-semibold text-white hover:bg-[#780606]"
          >
            Assumir atendimento
          </button>
        </div>
      </div>

      {modalAberto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6">
          <div className="w-full max-w-md rounded-2xl bg-[#353333] p-6 text-white">
            <h2 className="font-instrument text-[24px] font-bold">
              Assumir atendimento?
            </h2>

            <p className="font-inter mt-3 text-[16px] text-gray-300">
              Você deseja assumir o atendimento desta sessão?
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setModalAberto(false)}
                className="font-inter rounded-xl px-5 py-2 text-[20px] font-bold text-gray-300 hover:text-white"
              >
                Cancelar
              </button>

              <button
                type="button"
                onClick={assumirAtendimento}
                className="font-plex rounded-xl bg-[#AD1818] px-6 py-3 text-[18px] font-bold text-white hover:bg-[#780606]"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default AtendimentoDetalhe;
