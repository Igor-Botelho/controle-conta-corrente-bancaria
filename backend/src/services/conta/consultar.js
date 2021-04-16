"use strict";

const { dbConta } = require("../../db/models");

module.exports = function consultar() {
  return dbConta.consultar();
};
