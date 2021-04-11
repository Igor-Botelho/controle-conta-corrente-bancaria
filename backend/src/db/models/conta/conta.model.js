const mongoose = require("mongoose");
const schema = require("./conta.schema");

const conta = mongoose.model("Conta", schema);

const dbConta = {
  cadastrar(dados) {
    return conta.insertMany(dados);
  },
};

module.exports = dbConta;
