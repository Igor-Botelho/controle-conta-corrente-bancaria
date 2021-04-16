"use strict";

const { dbConta } = require("../../db/models");

module.exports = function atualizar(contaId, dadosAtualizacao) {
  return dbConta.atualizar(contaId, dadosAtualizacao);
};
