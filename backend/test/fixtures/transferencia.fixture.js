var mongoose = require("mongoose");

module.exports = (valor) => {
  return {
    valor,
    banco: "Banco teste",
    nome: "Banco investimentos teste",
    codigo: "1111",
    cnpj: "123212321232",
    agencia: " 1234",
    conta: "15963245",
  };
};
