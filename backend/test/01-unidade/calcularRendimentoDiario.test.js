"use strict";

const { services } = require("../../src/services");
const testWithDb = require("../teste-with-db");
const { conta } = require("../fixtures");

testWithDb(() => {
  describe("calcularRendimentoDiario", () => {
    it("calcularRendimentoDiario: calcula o rendimento para diario para conta e verifica os valores de saldo e rendimento na conta", async () => {
      const [contaCadastrada] = await services.conta.cadastrar(conta({}));

      const taxaJurosDiaria = 0.005;

      await services.calcularRendimentoDiario(taxaJurosDiaria, new Date());

      const contaAtualizada = await services.conta.recuperar(
        contaCadastrada._id
      );

      const rendimentoTeste = contaCadastrada.saldo * taxaJurosDiaria;

      expect(contaAtualizada.rendimento).toEqual(
        rendimentoTeste + contaCadastrada.rendimento
      );
    });

    it(`calcularRendimentoDiario: calcula o rendimento para diario no primeiro dia do mês e salva um transação com o rendimento do
     mês anterior para conta e verifica os valores de saldo e rendimento na conta`, async () => {
      const [contaCadastrada] = await services.conta.cadastrar(conta({}));

      const taxaJurosDiaria = 0.005;

      await services.calcularRendimentoDiario(
        taxaJurosDiaria,
        new Date("2020-05-01")
      );

      const contaAtualizada = await services.conta.recuperar(
        contaCadastrada._id
      );

      const rendimentoTeste = contaCadastrada.saldo * taxaJurosDiaria;

      const [
        transacaoRendimentoMesAnterior,
      ] = await services.transacao.consultar();

      expect(contaAtualizada.rendimento).toEqual(rendimentoTeste);
      expect(transacaoRendimentoMesAnterior.valor).toEqual(
        contaCadastrada.rendimento
      );
      expect(transacaoRendimentoMesAnterior.tipo).toEqual("rendimento");
    });
  });
});
