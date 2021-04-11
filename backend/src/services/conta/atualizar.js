const { dbConta } = require("../../db/models");

module.exports = function cadastrar(contaId, dados) {
  return dbConta.atualizar(contaId, dados);
};
