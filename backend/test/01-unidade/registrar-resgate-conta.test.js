"use strict";

const { services } = require("../../src/services");
const testWithDb = require("../teste-with-db");
const { conta } = require("../fixtures");

testWithDb(() => {
  describe("Registrar resgate conta", () => {
    it("registrarResgateConta: registra um resgate no valor de 20000 e verifica os dados da transação de resgate", async () => {
      const [contaCadastrada] = await services.conta.cadastrar(conta({}));

      const valorResgate = 20000;

      const transacao = await services.operacoes.registrarResgate(
        contaCadastrada._id,
        valorResgate
      );

      expect(transacao.valor).toEqual(valorResgate);
      expect(transacao.tipo).toEqual("debito");
      expect(transacao.contaId).toEqual(contaCadastrada._id);
    });

    it("registrarResgateConta: tenta registra um resgate no valor de 99999999 e verifica se emitiu o erro de saldo insuficiente", async () => {
      const [contaCadastrada] = await services.conta.cadastrar(conta({}));

      const valorDeposito = 99999999;

      const transacao = await services.operacoes.registrarResgate(
        contaCadastrada._id,
        valorDeposito
      );

      expect(transacao.error).toEqual("Saldo insuficiente para pagamento.");
    });
  });
});
