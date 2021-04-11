"use strict";

const { services } = require("../../src/services");
const testWithDb = require("../teste-with-db");
const { conta } = require("../fixtures");

testWithDb(() => {
  describe("Conta", () => {
    it("cadastrar: cadastra conta e verifica se os dados foram cadastrados corretamente", async () => {
      const dataHoraCriacao = new Date();

      const dadosClientes = conta({ dataHoraCriacao });

      const [contaCadastrado] = await services.conta.cadastrar(dadosClientes);

      expect(contaCadastrado.agencia).toEqual(dadosClientes.agencia);
      expect(contaCadastrado.clienteId).toEqual(dadosClientes.clienteId);
      expect(contaCadastrado.dataHoraCriacao).toEqual(
        dadosClientes.dataHoraCriacao
      );
      expect(contaCadastrado.numeroConta).toEqual(dadosClientes.numeroConta);
      expect(contaCadastrado.saldo).toEqual(dadosClientes.saldo);
      expect(contaCadastrado.tipo).toEqual(dadosClientes.tipo);
    });
  });
});
