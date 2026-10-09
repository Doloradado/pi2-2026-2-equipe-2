
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
    console.log("Abrindo atendimento do cliente:", cliente.id);

    try {
      const dados = await getClientePorId(cliente.id);

      console.log("Dados do cliente:", dados);
      console.log("Sessões do cliente:", dados.sessoes);

      const sessoes = dados.sessoes ?? [];

      if (sessoes.length > 0) {
        const sessaoAtual = sessoes[sessoes.length - 1];

        console.log("Sessão selecionada:", sessaoAtual.id);

        navigate(`/atendimento/${sessaoAtual.id}`);
        return;
      }

      console.warn("Cliente sem sessões de atendimento:", cliente.id);

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

  const totalHoje = clientes.length;

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
            titulo="Clientes cadastrados"
          />
        </div>

        <section className="mt-12 w-full px-6 md:px-8 lg:pl-50 lg:pr-50">
          <h1 className="text-left text-white font-semibold text-[24px]">
            Clientes Recentes
          </h1>

          {erro && (
            <p className="mt-4 text-red-400" role="alert">
              {erro}
            </p>
          )}

          <div className="mt-6 max-h-[500px] overflow-y-auto flex flex-col gap-4 pb-4">
            {carregando ? (
              <p className="text-white">Carregando clientes...</p>
            ) : clientes.length === 0 && !erro ? (
              <p className="text-[#9E9A9A]">
                Nenhum cliente cadastrado.
              </p>
            ) : (
              clientes.map((cliente) => (
                <BaseClientCard
                  key={cliente.id}
                  nome={cliente.nome}
                  data={cliente.dataCadastro}
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
              ))
            )}
          </div>
        </section>
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
