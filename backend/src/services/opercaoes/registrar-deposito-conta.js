"use strict";

const {
  atualizar: atualizarConta,
  recuperar: recuperarConta,
} = require("../conta");
const { cadastrarTransacaoCredito } = require("../transacao");
const dadosTransferencia = require("../../../test/fixtures/transferencia.fixture");

module.exports = async function registrarDepositoConta(contaId, valorDeposito) {
  const conta = await recuperarConta(contaId);

  const [transacaoDeposito] = await cadastrarTransacaoCredito({
    contaId: conta._id,
    tipo: "credito",
    valor: valorDeposito,
    status: "pendente",
  });

  const saldoAtualizado = conta.saldo + transacaoDeposito.valor;

  await atualizarConta(contaId, {
    saldo: saldoAtualizado,
  });

  return {
    transacaoDeposito,
    dadosTransferencia: dadosTransferencia(valorDeposito),
  };
};
