"use strict";

const { services } = require("../../src/services");
const testWithDb = require("../teste-with-db");
const { conta } = require("../fixtures");

testWithDb(() => {
  describe("Conta", () => {
    it("cadastrar: cadastra conta e verifica se os dados foram cadastrados corretamente", async () => {
      const dataHoraCriacao = new Date();

      const dadosClientes = conta({ dataHoraCriacao });

      const [contaCadastrado] = await services.conta.cadastrarConta(
        dadosClientes
      );

      expect(contaCadastrado.agencia).toEqual(dadosClientes.agencia);
      expect(contaCadastrado.clienteId).toEqual(dadosClientes.clienteId);
      expect(contaCadastrado.dataHoraCriacao).toEqual(
        dadosClientes.dataHoraCriacao
      );
      expect(contaCadastrado.numeroConta).toEqual(dadosClientes.numeroConta);
      expect(contaCadastrado.saldo).toEqual(dadosClientes.saldo);
      expect(contaCadastrado.tipo).toEqual(dadosClientes.tipo);
    });

    it("ataulizar: atualiza conta e verifica se os dados foram atualizados corretamente", async () => {
      const dadosClientes = conta({});

      const [contaCadastrado] = await services.conta.cadastrarConta(
        dadosClientes
      );

      const novaAgencia = "9999";

      const contaAtualizada = await services.conta.atualizarConta(
        contaCadastrado._id,
        { agencia: novaAgencia }
      );

      expect(contaAtualizada.agencia).toEqual(novaAgencia);
    });
  });
});
