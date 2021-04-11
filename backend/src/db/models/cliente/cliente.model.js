const mongoose = require("mongoose");
const schema = require("./cliente.schema");

const cliente = mongoose.model("Cliente", schema);

const dbCliente = {
  cadastrar(dados) {
    return cliente.insertMany(dados);
  },
};

module.exports = dbCliente;
