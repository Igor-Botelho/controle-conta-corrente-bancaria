"use strict";

const {
  atualizar: atualizarConta,
  recuperar: recuperarConta,
} = require("../conta");
const { cadastrarTransacaoDebito } = require("../transacao");

module.exports = async function registrarPagamento(contaId, valorBoleto) {
  const conta = await recuperarConta(contaId);

  if (conta.saldo < valorBoleto) {
    return { error: "Saldo insuficiente para pagamento." };
  }

  const [transacaoPagamento] = await cadastrarTransacaoDebito({
    contaId: conta._id,
    tipo: "pagamento",
    valor: valorBoleto,
    status: "sucesso",
  });

  const saldoAtualizado = conta.saldo - transacaoPagamento.valor;

  await atualizarConta(contaId, {
    saldo: saldoAtualizado,
  });

  return transacaoPagamento;
};
