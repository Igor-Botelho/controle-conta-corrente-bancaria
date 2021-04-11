const { dbTransacao } = require("../../db/models");

module.exports = function cadastrar(dados) {
  const codigoBarras = "001.9.3.3737.0000000100.0500940144816060680935031";
  const linhaDigitavel =
    "00000.00000.00000.000000.00000.000000.0.51980000015000";

  return dbTransacao.cadastrar({
    ...dados,
    ...{ dataHoraTransacao: new Date() },
    codigoBarras,
    linhaDigitavel,
  });
};
