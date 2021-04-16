var mongoose = require("mongoose");

module.exports = {
  credito: (contaId) => ({
    contaId: contaId || mongoose.Types.ObjectId(),
    tipo: "credito",
    valor: 200000,
    status: "pendente",
  }),
  debito: (contaId) => ({
    contaId: contaId || mongoose.Types.ObjectId(),
    tipo: "debito",
    valor: 15000,
    status: "sucesso",
  }),
};
