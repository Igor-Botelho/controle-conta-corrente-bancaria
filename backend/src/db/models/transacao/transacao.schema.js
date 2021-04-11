const mongoose = require("mongoose");

module.exports = new mongoose.Schema(
  {
    codigoBarras: { type: String },
    contaId: { type: mongoose.Schema.Types.ObjectId },
    dataHoraTransacao: { type: Date, required: true },
    linhaDigitavel: { type: String },
    tipo: {
      type: String,
      enum: ["credito", "debito", "pagamento"],
      required: true,
    },
    valor: { type: Number, required: true, min: 0 },
  },
  { versionKey: false }
);
