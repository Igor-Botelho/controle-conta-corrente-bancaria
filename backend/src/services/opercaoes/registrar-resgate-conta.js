"use strict";

const {
  atualizar: atualizarConta,
  recuperar: recuperarConta,
} = require("../conta");
const { cadastrarTransacaoDebito } = require("../transacao");

module.exports = async function registrarResgateConta(contaId, valorResgate) {
  const conta = await recuperarConta(contaId);

  if (conta.saldo < valorResgate) {
    return { error: "Saldo insuficiente para pagamento." };
  }

  const [transacaoResgate] = await cadastrarTransacaoDebito({
    contaId: conta._id,
    tipo: "debito",
    valor: valorResgate,
    status: "sucesso",
  });

  const saldoAtualizado = conta.saldo - transacaoResgate.valor;

  await atualizarConta(contaId, {
    saldo: saldoAtualizado,
  });

  return transacaoResgate;
};
