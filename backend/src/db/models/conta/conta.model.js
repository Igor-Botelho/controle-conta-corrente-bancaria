const mongoose = require("mongoose");
const schema = require("./conta.schema");

const conta = mongoose.model("Conta", schema);

const dbConta = {
  cadastrar(dados) {
    return conta.insertMany(dados);
  },
  atualizar(contaId, dados) {
    return conta.findOneAndUpdate({ _id: contaId }, dados, {
      new: true,
    });
  },
};

module.exports = dbConta;
