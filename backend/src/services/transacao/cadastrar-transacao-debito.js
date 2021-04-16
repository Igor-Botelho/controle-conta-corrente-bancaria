"use strict";

const { dbTransacao } = require("../../db/models");

module.exports = function cadastrar(dados) {
  return dbTransacao.cadastrar({
    ...dados,
    ...{ dataHoraTransacao: new Date() },
  });
};
