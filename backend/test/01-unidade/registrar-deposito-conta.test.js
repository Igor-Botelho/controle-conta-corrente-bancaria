"use strict";

const { services } = require("../../src/services");
const testWithDb = require("../teste-with-db");
const { conta } = require("../fixtures");

testWithDb(() => {
  describe("Registrar deposito conta", () => {
    it("registrarDepositoConta: registra um deposito no valor de 10000 e verifica os dados da transação de deposito", async () => {
      const [contaCadastrada] = await services.conta.cadastrarConta(conta({}));

      const valorDeposito = 10000;

      const { transacao } = await services.operacoes.registrarDeposito(
        contaCadastrada._id,
        valorDeposito
      );

      expect(transacao.valor).toEqual(valorDeposito);
    });
  });
});
