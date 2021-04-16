"use strict";

const mongoose = require("mongoose");
const schema = require("./cliente.schema");

const cliente = mongoose.model("Cliente", schema);

const dbCliente = {
  cadastrar(dados) {
    return cliente.insertMany(dados);
  },
  consultar() {
    return cliente.find();
  },
};

module.exports = dbCliente;
