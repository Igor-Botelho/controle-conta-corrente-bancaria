"use strict";

const { services } = require("../../src/services");
const testWithDb = require("../teste-with-db");
const { conta } = require("../fixtures");

testWithDb(() => {
  describe("Registrar pagamento", () => {
    it("registrarPagamento: registra um pagamento no valor de 100 e verifica os dados da transação de pagamento", async () => {
      const [contaCadastrada] = await services.conta.cadastrar(conta({}));

      const valorBoleto = 100;

      const transacao = await services.operacoes.registrarPagamento(
        contaCadastrada._id,
        valorBoleto
      );

      expect(transacao.valor).toEqual(valorBoleto);
      expect(transacao.tipo).toEqual("pagamento");
      expect(transacao.contaId).toEqual(contaCadastrada._id);
    });

    it("registrarPagamento: tenta registra um pagamento no valor de 99999999 e verifica se emitiu o erro de saldo insuficiente", async () => {
      const [contaCadastrada] = await services.conta.cadastrar(conta({}));

      const valorDeposito = 99999999;

      const transacao = await services.operacoes.registrarPagamento(
        contaCadastrada._id,
        valorDeposito
      );

      expect(transacao.error).toEqual("Saldo insuficiente para pagamento.");
    });
  });
});
