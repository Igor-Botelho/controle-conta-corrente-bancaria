var mongoose = require("mongoose");

module.exports = {
  credito: ({ contaId }) => ({
    contaId: contaId || mongoose.Types.ObjectId(),
    tipo: "credito",
    valor: 200000,
  }),
  debito: ({ contaId }) => ({
    contaId: contaId || mongoose.Types.ObjectId(),
    tipo: "debito",
    valor: 150000,
  }),
};
