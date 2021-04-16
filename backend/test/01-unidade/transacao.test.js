"use strict";

const { services } = require("../../src/services");
const testWithDb = require("../teste-with-db");
const { transacao } = require("../fixtures");

testWithDb(() => {
  describe("Transacao", () => {
    it("cadastrar: cadastra transação de crédito e verifica se os dados foram cadastrados corretamente", async () => {
      const dadosTransacao = transacao.credito();

      const [
        transacaoCadastrado,
      ] = await services.transacao.cadastrarTransacaoCredito(dadosTransacao);

      expect(transacaoCadastrado.contaId).toEqual(dadosTransacao.contaId);
      expect(transacaoCadastrado.tipo).toEqual(dadosTransacao.tipo);
      expect(transacaoCadastrado.valor).toEqual(dadosTransacao.valor);
    });

    it("cadastrar: cadastra transação de debito e verifica se os dados foram cadastrados corretamente", async () => {
      const dadosTransacao = transacao.debito();

      const [
        transacaoCadastrado,
      ] = await services.transacao.cadastrarTransacaoDebito(dadosTransacao);

      expect(transacaoCadastrado.contaId).toEqual(dadosTransacao.contaId);
      expect(transacaoCadastrado.tipo).toEqual(dadosTransacao.tipo);
      expect(transacaoCadastrado.valor).toEqual(dadosTransacao.valor);
    });

    it("consultar: consulta as transações cadastradas e verifica a quantidade", async () => {
      const dadosTransacaoDebito = transacao.debito();

      await services.transacao.cadastrarTransacaoDebito(dadosTransacaoDebito);

      const dadosTransacaoCredito = transacao.credito();

      await services.transacao.cadastrarTransacaoCredito(dadosTransacaoCredito);

      const transacoes = await services.transacao.consultar();

      expect(transacoes.length).toEqual(2);
    });
  });
});
