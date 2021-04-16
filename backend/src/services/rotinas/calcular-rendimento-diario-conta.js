"use strict";

const { atualizar, consultar } = require("../conta");
const {
  cadastrar: cadastrarTransacaoRendimentosMensal,
} = require("../../db/models/transacao/transacao.model");

module.exports = async function calcularRendimentoDiario(
  taxaJurosDiaria,
  dataAtual
) {
  const contas = await consultar();

  var dataStr = dataAtual.toISOString().slice(0, 10);

  const [, , dia] = dataStr.split("-");

  for (const { _id: contaId, saldo, rendimento } of contas) {
    const valorRendimentos = saldo * taxaJurosDiaria;

    const saldoAtualizado =
      saldo + 100 * Number(Number.parseFloat(valorRendimentos).toFixed(2));

    if (dia === "01") {
      await cadastrarTransacaoRendimentosMensal({
        contaId: contaId,
        tipo: "rendimento",
        valor: rendimento,
        dataHoraTransacao: new Date(),
        status: "sucesso",
      });

      await atualizar(contaId, {
        saldo: saldoAtualizado,
        rendimento: valorRendimentos,
      });
    } else {
      await atualizar(contaId, {
        saldo: saldoAtualizado,
        rendimento: rendimento + valorRendimentos,
      });
    }
  }
};
