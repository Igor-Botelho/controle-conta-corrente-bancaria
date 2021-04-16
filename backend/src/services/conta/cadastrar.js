"use strict";

const { dbConta } = require("../../db/models");

module.exports = function cadastrar(dados) {
  return dbConta.cadastrar(dados);
};
