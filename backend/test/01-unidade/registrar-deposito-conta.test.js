"use strict";

const { services } = require("../../src/services");
const testWithDb = require("../teste-with-db");
const { conta, transferencia } = require("../fixtures");

testWithDb(() => {
  describe("Registrar deposito conta", () => {
    it("registrarDepositoConta: registra um deposito no valor de 10000 e verifica os dados da transação de deposito", async () => {
      const [contaCadastrada] = await services.conta.cadastrar(conta({}));

      const valorDeposito = 10000;

      const {
        transacaoDeposito,
        dadosTransferencia,
      } = await services.operacoes.registrarDeposito(
        contaCadastrada._id,
        valorDeposito
      );

      expect(transacaoDeposito.valor).toEqual(valorDeposito);
      expect(transacaoDeposito.tipo).toEqual("credito");
      expect(transacaoDeposito.status).toEqual("pendente");
      expect(transferencia(valorDeposito)).toEqual(dadosTransferencia);
    });
  });
});
