const mongoose = require("mongoose");

module.exports = new mongoose.Schema(
  {
    codigoBarras: { type: String, required: true },
    contaId: { type: mongoose.Schema.Types.ObjectId },
    dataHoraTransacao: { type: Date, required: true },
    linhaDigitavel: { type: String, required: true },
    tipo: {
      type: String,
      enum: ["credito", "debito", "pagamento"],
      required: true,
    },
    valor: { type: Number, required: true, min: 0 },
  },
  { versionKey: false }
);
