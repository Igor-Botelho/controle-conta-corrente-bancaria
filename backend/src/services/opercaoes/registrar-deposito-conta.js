const { atualizarConta, recuperarConta } = require("../conta");
const { cadastrarTransacaoCredito } = require("../transacao");

module.exports = async function registrarDepositoConta(contaId, valorDeposito) {
  const conta = await recuperarConta(contaId);

  const [transacaoDeposito] = await cadastrarTransacaoCredito({
    contaId: conta._id,
    tipo: "credito",
    valor: valorDeposito,
  });

  const saldoAtualizado = conta.saldo + transacaoDeposito.valor;

  return {
    conta: atualizarConta(contaId, { saldao: saldoAtualizado }),
    transacao: transacaoDeposito,
  };
};
