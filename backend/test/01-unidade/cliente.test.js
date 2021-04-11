"use strict";

const { services } = require("../../src/services");
const testWithDb = require("../teste-with-db");
const { cliente } = require("../fixtures");

testWithDb(() => {
  describe("Cliente", () => {
    it("cadastrar: cadastra cliente e verifica se os dados foram cadastrados corretamente", async () => {
      const [clienteCadastrado] = await services.cliente.cadastrar(cliente);

      expect(clienteCadastrado.nome).toEqual(cliente.nome);
      expect(clienteCadastrado.email).toEqual(cliente.email);
      expect(clienteCadastrado.cpf).toEqual(cliente.cpf);
      expect(clienteCadastrado.telefone).toEqual(cliente.telefone);
      expect(clienteCadastrado.endereco).toEqual(cliente.endereco);
      expect(clienteCadastrado.cep).toEqual(cliente.cep);
      expect(clienteCadastrado.complemento).toEqual(cliente.complemento);
      expect(clienteCadastrado.bairro).toEqual(cliente.bairro);
      expect(clienteCadastrado.cidade).toEqual(cliente.cidade);
      expect(clienteCadastrado.uf).toEqual(cliente.uf);
      expect(clienteCadastrado.dataNascimento).toEqual(cliente.dataNascimento);
      expect(clienteCadastrado.contasBancarias).toEqual(
        cliente.contasBancarias
      );
    });
  });
});
