"use strict";

const { services } = require("../../src/services");
const testWithDb = require("../teste-with-db");
const { transacao } = require("../fixtures");

testWithDb(() => {
  describe("Transacao", () => {
    it("cadastrar: cadastra transação de crédito e verifica se os dados foram cadastrados corretamente", async () => {
      const dataHoraTransacao = new Date();

      const dadosTranscao = transacao.credito({ dataHoraTransacao });

      const [transacaoCadastrado] = await services.transacao.cadastrar(
        dadosTranscao
      );

      expect(transacaoCadastrado.contaId).toEqual(dadosTranscao.contaId);
      expect(transacaoCadastrado.tipo).toEqual(dadosTranscao.tipo);
      expect(transacaoCadastrado.valor).toEqual(dadosTranscao.valor);
    });

    it("cadastrar: cadastra transação de debito e verifica se os dados foram cadastrados corretamente", async () => {
      const dataHoraTransacao = new Date();

      const dadosTranscao = transacao.debito({ dataHoraTransacao });

      const [transacaoCadastrado] = await services.transacao.cadastrar(
        dadosTranscao
      );

      expect(transacaoCadastrado.contaId).toEqual(dadosTranscao.contaId);
      expect(transacaoCadastrado.tipo).toEqual(dadosTranscao.tipo);
      expect(transacaoCadastrado.valor).toEqual(dadosTranscao.valor);
    });
  });
});
