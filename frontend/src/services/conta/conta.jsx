import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GraficoRendimentos from "../../components/GraficoRendimentos/GraficoRendimentos";
import ModalDeposito from "../../components/Modal/ModalDoposito";
import ModalListagem from "../../components/Modal/ModalListagem";
import ModalPagamento from "../../components/Modal/ModalPagamento";
import ModalResgate from "../../components/Modal/ModalResgate";
import { maskData, maskValor } from "../../utils";
import { consultarTransacoes } from "../transacao/transacao";
import "./conta.css";
import { loadconta } from "./conta.redux";

function Conta() {
  const dispatch = useDispatch();

  useEffect(async () => {
    const conta = dispatch(await loadconta({}));
    dispatch(await consultarTransacoes(conta.payload._id));
  }, []);

  const conta = useSelector((state) => {
    return state.contaUsuario.dado;
  });

  const transacoes = useSelector((state) => {
    return state.transacao.dado;
  });

  if (conta && transacoes) {
    const atualizacoesPaginaPrincipal = transacoes.slice(0, 4);

    return (
      <div>
        <div className="container">
          <div>
            <p className="saldo-titulo">Saldo</p>
            <p className="saldo">R${maskValor(conta.saldo)}</p>
            <p className="saldo-Rendimento">
              Rendimento{" "}
              <span className="rendimento">
                R${maskValor(conta.rendimento)}
              </span>
            </p>
            <GraficoRendimentos
              saldo={conta.saldo}
              rendimento={conta.rendimento}
            />
          </div>

          <div className="cards">
            <p className="atualizacao-titulo">Ultimas atualizações</p>
            <p className="saldo">
              {atualizacoesPaginaPrincipal.map((transacao, index) => {
                return (
                  <div key={index} className="item-atualizacao">
                    <div className="informacoes">
                      <span>{transacao.tipo}</span>
                      <span> {maskData(transacao.dataHoraTransacao)}</span>
                    </div>
                    <div className="informacoes">
                      <span>R${maskValor(transacao.valor)}</span>
                      <span>{transacao.status}</span>
                    </div>
                  </div>
                );
              })}
            </p>

            <ModalListagem atualizacoes={transacoes} />

            <div className="operacoes">
              <ModalDeposito contaId={conta._id} />

              <ModalResgate contaId={conta._id} />

              <ModalPagamento contaId={conta._id} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Nenhum conta encontra</div>;
  }
}

export default Conta;
