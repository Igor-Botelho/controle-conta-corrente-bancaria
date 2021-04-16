"use strict";

const { dbCliente } = require("../../db/models");
const bcrypt = require("bcrypt");

function cadastrar(dados) {
  return dbCliente.cadastrar({
    ...dados,
    ...{ dataHoraCriacao: new Date() },
    ...{ senha: bcrypt.hashSync(dados.senha, 8) },
  });
}

module.exports = cadastrar;
