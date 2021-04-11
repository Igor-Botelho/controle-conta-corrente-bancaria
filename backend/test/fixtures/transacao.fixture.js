var mongoose = require("mongoose");

module.exports = {
  credito: ({ contaId, dataHoraTransacao }) => ({
    contaId: contaId || mongoose.Types.ObjectId(),
    tipo: "credito",
    valor: 200000,
  }),
  debito: ({ contaId, dataHoraTransacao }) => ({
    contaId: contaId || mongoose.Types.ObjectId(),
    tipo: "debito",
    valor: 150000,
  }),
};
