const { dbConta } = require("../../db/models");

function cadastrar(dados) {
  return dbConta.cadastrar(dados);
}

module.exports = cadastrar;
