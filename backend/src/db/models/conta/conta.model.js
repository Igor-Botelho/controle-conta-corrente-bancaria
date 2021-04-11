const mongoose = require("mongoose");
const schema = require("./conta.schema");

const conta = mongoose.model("Conta", schema);

const dbConta = {
  atualizar(contaId, dados) {
    return conta.findOneAndUpdate({ _id: contaId }, dados, {
      new: true,
      useFindAndModify: false,
    });
  },
  cadastrar(dados) {
    return conta.insertMany(dados);
  },
  recuperar(contaId) {
    return conta.findById(contaId);
  },
};

module.exports = dbConta;
