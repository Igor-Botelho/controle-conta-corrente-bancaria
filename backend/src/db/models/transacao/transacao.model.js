const mongoose = require("mongoose");
const schema = require("./transacao.schema");

const transacao = mongoose.model("Transacao", schema);

module.exports = {
  cadastrar(dados) {
    return transacao.insertMany(dados);
  },
};
