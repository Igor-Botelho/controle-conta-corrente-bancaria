"use strict";

const { services } = require("../../src/services");
const testWithDb = require("../teste-with-db");
const { transacao } = require("../fixtures");

testWithDb(() => {
  describe("Transacao", () => {
    it("cadastrar: cadastra transação de crédito e verifica se os dados foram cadastrados corretamente", async () => {
      const dataHoraTransacao = new Date();

      const dadosTransacao = transacao.credito({ dataHoraTransacao });

      const [
        transacaoCadastrado,
      ] = await services.transacao.cadastrarTransacaoCredito(dadosTransacao);

      expect(transacaoCadastrado.contaId).toEqual(dadosTransacao.contaId);
      expect(transacaoCadastrado.tipo).toEqual(dadosTransacao.tipo);
      expect(transacaoCadastrado.valor).toEqual(dadosTransacao.valor);
    });

    it("cadastrar: cadastra transação de debito e verifica se os dados foram cadastrados corretamente", async () => {
      const dataHoraTransacao = new Date();

      const dadosTransacao = transacao.debito({ dataHoraTransacao });

      const [
        transacaoCadastrado,
      ] = await services.transacao.cadastrarTransacaoDebito(dadosTransacao);

      expect(transacaoCadastrado.contaId).toEqual(dadosTransacao.contaId);
      expect(transacaoCadastrado.tipo).toEqual(dadosTransacao.tipo);
      expect(transacaoCadastrado.valor).toEqual(dadosTransacao.valor);
    });
  });
});
