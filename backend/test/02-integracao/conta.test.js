"use strict";

const { services } = require("../../src/services");
const testWithDb = require("../teste-with-db");
const { conta } = require("../fixtures");

testWithDb(() => {
  describe("Conta", () => {
    it("registrarDepositoConta: registra um deposito no valor de 10000 e verifica o saldo da conta", async () => {
      const [contaCadastrada] = await services.conta.cadastrar(conta({}));

      const valorDeposito = 10000;

      const {
        transacaoDeposito,
        dadosTransferencia,
      } = await services.operacoes.registrarDeposito(
        contaCadastrada._id,
        valorDeposito
      );

      const contaAtualizada = await services.conta.recuperar(
        contaCadastrada._id
      );

      expect(contaAtualizada.saldo).toEqual(
        contaCadastrada.saldo + valorDeposito
      );
    });

    it("registrarResgateConta: registra um resgate no valor de 20000 e verifica os dados da conta", async () => {
      const [contaCadastrada] = await services.conta.cadastrar(conta({}));

      const valorResgate = 20000;

      const transacao = await services.operacoes.registrarResgate(
        contaCadastrada._id,
        valorResgate
      );

      const contaAtualizada = await services.conta.recuperar(
        contaCadastrada._id
      );

      expect(contaAtualizada.saldo).toEqual(
        contaCadastrada.saldo - valorResgate
      );
    });

    it("registrarPagamento: registra um pagamento no valor de 100 e verifica os dados da transação de pagamento", async () => {
      const [contaCadastrada] = await services.conta.cadastrar(conta({}));

      const valorBoleto = 100;

      const transacao = await services.operacoes.registrarPagamento(
        contaCadastrada._id,
        valorBoleto
      );

      const contaAtualizada = await services.conta.recuperar(
        contaCadastrada._id
      );

      expect(contaAtualizada.saldo).toEqual(
        contaCadastrada.saldo - valorBoleto
      );
    });

    it("calcularRendimentoDiario: calcula o rendimento para diario para conta e verifica os valores de saldo e rendimento na conta", async () => {
      const [contaCadastrada] = await services.conta.cadastrar(conta({}));

      const taxaJurosDiaria = 0.005;

      await services.calcularRendimentoDiario(taxaJurosDiaria, new Date());

      const contaAtualizada = await services.conta.recuperar(
        contaCadastrada._id
      );

      const rendimentoTeste = contaCadastrada.saldo * taxaJurosDiaria;

      expect(contaAtualizada.saldo).toEqual(
        contaCadastrada.saldo +
          100 * Number(Number.parseFloat(rendimentoTeste).toFixed(2))
      );
      expect(contaAtualizada.rendimento).toEqual(
        contaCadastrada.rendimento + rendimentoTeste
      );
    });
  });
});
