const mongoose = require("mongoose");

const ContaSchema = new mongoose.Schema(
  {
    agencia: { type: String, required: true },
    clienteId: { type: mongoose.Schema.Types.ObjectId, unique: true },
    dataHoraCriacao: { type: Date, required: true },
    numeroConta: { type: String, required: true },
    saldo: { type: Number, required: true },
    tipo: {
      type: String,
      enum: ["corrente", "poupanca", "salario"],
      required: true,
    },
  },
  { versionKey: false }
);

module.exports = ContaSchema;
