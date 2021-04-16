"use strict";

const mongoose = require("mongoose");

module.exports = new mongoose.Schema(
  {
    contaId: { type: mongoose.Schema.Types.ObjectId },
    dataHoraTransacao: { type: Date, required: true },
    linhaDigitavel: { type: String },
    tipo: {
      type: String,
      enum: ["credito", "debito", "pagamento", "rendimento"],
      required: true,
    },
    valor: { type: Number, required: true, min: 0 },
    status: {
      type: String,
      enum: ["pendente", "sucesso", "cancelado"],
      required: true,
    },
  },
  { versionKey: false }
);
