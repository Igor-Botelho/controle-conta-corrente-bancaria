"use strict";

const { dbConta } = require("../../db/models");

module.exports = function recuperar(contaId) {
  return dbConta.recuperar(contaId);
};
