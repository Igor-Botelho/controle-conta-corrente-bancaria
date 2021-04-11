var mongoose = require("mongoose");

module.exports = ({ clienteId, dataHoraCriacao }) => {
  return {
    agencia: "1111",
    clienteId: clienteId || mongoose.Types.ObjectId(),
    dataHoraCriacao: dataHoraCriacao || new Date(),
    numeroConta: "55555559",
    saldo: 150000,
    tipo: "corrente",
  };
};
