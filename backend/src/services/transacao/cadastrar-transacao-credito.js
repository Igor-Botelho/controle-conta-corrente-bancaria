"use strict";

const { dbTransacao } = require("../../db/models");
const { gerarLinhaDigitavelBoleto } = require("../linha-digitavel-boleto");

module.exports = function cadastrar(dados) {
  const dataAtual = new Date();

  const linhaDigitavel = gerarLinhaDigitavelBoleto(dados.valor, dataAtual);

  return dbTransacao.cadastrar({
    ...dados,
    ...{ dataHoraTransacao: dataAtual },
    linhaDigitavel,
  });
};
