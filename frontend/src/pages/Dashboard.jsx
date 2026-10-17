import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import BaseHeader from "../components/BaseHeader";
import BaseStatCard from "../components/BaseStatCard";
import BaseClientCard from "../components/BaseClientCard";

import { getClientes, getClientePorId } from "../services/api";

function Dashboard() {
  const navigate = useNavigate();

  const [clientes, setClientes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");
  const [clienteParaExcluir, setClienteParaExcluir] = useState(null);

  useEffect(() => {
    let ativo = true;

    async function carregarClientes() {
      try {
        setCarregando(true);
        setErro("");

        const dados = await getClientes();

        if (ativo) {
          setClientes(Array.isArray(dados) ? dados : []);
        }
      } catch (error) {
        console.error("Erro ao carregar clientes:", error);

        if (ativo) {
          setErro("Não foi possível carregar os clientes.");
        }
      } finally {
        if (ativo) {
          setCarregando(false);
        }
      }
    }

    carregarClientes();

    return () => {
      ativo = false;
    };
  }, []);

  function abrirConfirmacao(cliente) {
    setClienteParaExcluir(cliente);
  }

  function cancelarExclusao() {
    setClienteParaExcluir(null);
  }

  function confirmarExclusao() {
    setClienteParaExcluir(null);
    setErro("A exclusão de clientes ainda não está disponível.");
  }

  async function abrirAtendimento(cliente) {
    try {
      setErro("");

      const dados = await getClientePorId(cliente.id);
      const sessoes = dados.sessoes ?? [];

      if (sessoes.length > 0) {
        const sessaoAtual = sessoes[sessoes.length - 1];

        navigate(`/atendimento/${sessaoAtual.id}`);
        return;
      }

      setErro(
        `O cliente ${cliente.nome} ainda não possui sessões de atendimento.`
      );
    } catch (error) {
      console.error("Erro ao consultar o cliente:", error);

      setErro("Não foi possível consultar as sessões do cliente.");
    }
  }

  const totalNovos = clientes.filter(
    (cliente) => !cliente.sessoes?.length
  ).length;

  const totalEmAtendimento = clientes.filter((cliente) =>
    cliente.sessoes?.some(
      (sessao) => sessao.status === "EM_ANDAMENTO"
    )
  ).length;

  const totalAguardando = clientes.filter((cliente) =>
    cliente.sessoes?.some(
      (sessao) => sessao.status === "AGUARDANDO_RETORNO"
    )
  ).length;

  const totalClientes = clientes.length;

  return (
    <div
    className={`min-h-screen bg-[#252121] ${
        carregando ? "h-screen overflow-hidden" : "overflow-x-hidden"
    }`}
>"
      <BaseHeader />

      <main className="pt-40">
        <div className="flex justify-center gap-12">
          <BaseStatCard
            valor={String(carregando ? 0 : totalNovos).padStart(2, "0")}
            titulo="Novos Atendimentos"
          />

          <BaseStatCard
            valor={String(carregando ? 0 : totalEmAtendimento).padStart(2, "0")}
            titulo="Em Atendimento"
          />

          <BaseStatCard
            valor={String(carregando ? 0 : totalAguardando).padStart(2, "0")}
            titulo="Aguardando retorno"
          />

          <BaseStatCard
            valor={String(carregando ? 0 : totalClientes).padStart(2, "0")}
            titulo="Clientes cadastrados"
          />
        </div>

        {carregando ? (
          <section className="mt-12 w-full pl-50 pr-50">
            <div className="mt-6 w-full h-50 flex flex-col items-center justify-center">
              <h1 className="text-left text-white font-semibold text-[30px]">
                Carregando Atendimentos...
              </h1>

              <p className="text-white mt-4">
                Aguarde enquanto buscamos os atendimentos recebidos.
              </p>
              <div
                className="
      h-[120px] w-[120px] mt-2 shrink-0
      rounded-full
      border-[10px] border-white/15
      border-t-white
      animate-spin
    "
              />
            </div>
            </section>
        ) : erro && clientes.length === 0 ? (
          <section className="mt-12 w-full pl-50 pr-50">
            <div className="mt-6 w-full h-50 flex flex-col items-center justify-center">
              <h1 className="text-left text-white font-semibold text-[30px]">
                Nenhum atendimento encontrado
              </h1>

              <p className="text-white mt-4 mb-33 text-center">
              Quando novos atendimentos forem recebidos pelo assistente virtual, eles aparecerão aqui.
              </p>
            </div>
          </section>
        ) : (
          <section className="mt-12 w-full pl-37 pr-37">
            <h1 className="text-left text-white font-semibold text-[24px]">
              Clientes Recentes
            </h1>

            {erro && (
              <p className="mt-4 text-red-400" role="alert">
                {erro}
              </p>
            )}

            {clientes.length === 0 && !erro ? (
              <div className="mt-6 w-full h-50 flex items-center justify-center">
                <p className="text-[#9E9A9A]">
                  Sem clientes encontrados
                </p>
              </div>
            ) : (
              <div className="mt-6 max-h-[650px] overflow-y-auto flex flex-col gap-4">
                {clientes.map((cliente) => (
                  <BaseClientCard
                    key={cliente.id}
                    nome={cliente.nome}
                    data={cliente.dataCadastro ?? "Data não informada"}
                    status={
                      cliente.sessoes?.some(
                        (sessao) => sessao.status === "EM_ANDAMENTO"
                      )
                        ? "EM ATENDIMENTO"
                        : cliente.sessoes?.length
                          ? "AGUARDANDO RETORNO"
                          : "NOVO"
                    }
                    onVerRespostas={() => abrirAtendimento(cliente)}
                    onWhatsApp={() => {
                      if (cliente.telefoneWhatsapp) {
                        window.open(
                          `https://wa.me/${cliente.telefoneWhatsapp.replace(/\D/g, "")}`,
                          "_blank",
                          "noopener,noreferrer"
                        );
                      }
                    }}
                    onExcluir={() => abrirConfirmacao(cliente)}
                  />
                ))}
              </div>
            )}
          </section>
        )}
      </main>

      {clienteParaExcluir && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50">
          <div className="bg-[#353333] rounded-xl w-96 p-8 flex flex-col items-center">
            <h2 className="text-white text-xl font-semibold text-center">
              Deseja excluir{" "}
              <span className="font-semibold">
                {clienteParaExcluir.nome}
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
  );
}

export default Dashboard;