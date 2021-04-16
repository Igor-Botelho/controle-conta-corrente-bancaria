var mongoose = require("mongoose");

module.exports = {
  credito: (contaId) => ({
    contaId: contaId || mongoose.Types.ObjectId(),
    tipo: "credito",
    valor: 100000,
    status: "pendente",
  }),
  debito: (contaId) => ({
    contaId: contaId || mongoose.Types.ObjectId(),
    tipo: "debito",
    valor: 5000,
    status: "sucesso",
  }),
};
