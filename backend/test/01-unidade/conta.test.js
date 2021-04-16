"use strict";

const { services } = require("../../src/services");
const testWithDb = require("../teste-with-db");
const { conta } = require("../fixtures");

testWithDb(() => {
  describe("Conta", () => {
    it("cadastrar: cadastra conta e verifica se os dados foram cadastrados corretamente", async () => {
      const dataHoraCriacao = new Date();

      const dadosConta = conta({ dataHoraCriacao });

      const [contaCadastrado] = await services.conta.cadastrar(dadosConta);

      expect(contaCadastrado.agencia).toEqual(dadosConta.agencia);
      expect(contaCadastrado.clienteId).toEqual(dadosConta.clienteId);
      expect(contaCadastrado.dataHoraCriacao).toEqual(
        dadosConta.dataHoraCriacao
      );
      expect(contaCadastrado.numeroConta).toEqual(dadosConta.numeroConta);
      expect(contaCadastrado.saldo).toEqual(dadosConta.saldo);
      expect(contaCadastrado.tipo).toEqual(dadosConta.tipo);
    });

    it("ataulizar: atualiza conta e verifica se os dados foram atualizados corretamente", async () => {
      const dadosConta = conta({});

      const [contaCadastrado] = await services.conta.cadastrar(dadosConta);

      const novaAgencia = "9999";

      const contaAtualizada = await services.conta.atualizar(
        contaCadastrado._id,
        { agencia: novaAgencia }
      );

      expect(contaAtualizada.agencia).toEqual(novaAgencia);
    });

    it("consultar: consulta contas cadastradas e verifica a quantidade de contas encontradas", async () => {
      const dadosConta = conta({});

      await services.conta.cadastrar(dadosConta);

      const contaAtualizada = await services.conta.consultar();

      expect(contaAtualizada.length).toEqual(1);
    });

    it("recuperar: recupera conta e verifica dados da conta recuperada", async () => {
      const dataHoraCriacao = new Date();

      const dadosConta = conta({ dataHoraCriacao });

      const [contaCadastrado] = await services.conta.cadastrar(dadosConta);

      const contaRecuperada = await services.conta.recuperar(
        contaCadastrado._id
      );

      expect(contaRecuperada.agencia).toEqual(dadosConta.agencia);
      expect(contaRecuperada.clienteId).toEqual(dadosConta.clienteId);
      expect(contaRecuperada.dataHoraCriacao).toEqual(
        dadosConta.dataHoraCriacao
      );
      expect(contaRecuperada.numeroConta).toEqual(dadosConta.numeroConta);
      expect(contaRecuperada.saldo).toEqual(dadosConta.saldo);
      expect(contaRecuperada.tipo).toEqual(dadosConta.tipo);
    });
  });
});
