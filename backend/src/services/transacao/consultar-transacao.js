"use strict";

const { dbTransacao } = require("../../db/models");

module.exports = function consultar(query = {}) {
  return dbTransacao.consultar(query);
};
