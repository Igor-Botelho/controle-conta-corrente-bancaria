"use strict";

const { dbCliente } = require("../../db/models");

function consultar() {
  return dbCliente.consultar();
}

module.exports = consultar;
