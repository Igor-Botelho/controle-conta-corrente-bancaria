"use strict";

const emissor = require("../../../test/fixtures/emissor.fixture");

module.exports = function gerarLinhaDigitavelBoleto(
  valorBoleto,
  dataVencimento
) {
  const dadosBanco = emissor();
  const valor = valorBoleto.toString().padStart(10, "0");
  const codigoMoeda = 9;

  const campoLivre = gerarCampoLivre(dadosBanco);

  const fatorVencimento = gerarFatorVencimento(dataVencimento);

  const codigoBarras = gerarCodigoBarras({
    identificador: dadosBanco.identificador,
    fatorVencimento,
    campoLivre,
    valor,
    codigoMoeda,
  });

  const digitoVerificador = "0";

  const linhaDigitavel = gerarLinhaDigitavel({
    banco: dadosBanco.identificador,
    campoLivre,
    digitoVerificadorCodigoBarras: digitoVerificador,
    fatorVencimento,
    valor,
    codigoMoeda,
  });

  return linhaDigitavel;
};

function gerarCampoLivre(dadosBanco) {
  return `${dadosBanco.codigoAgencia}${dadosBanco.codigoCarteira}${dadosBanco.nossoNumero}${dadosBanco.conta}0`;
}

function gerarFatorVencimento(dataVencimento) {
  var date1 = new Date(1997, 9, 7);
  var timeDiff = Math.abs(dataVencimento.getTime() - date1.getTime());
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return diffDays;
}

function gerarCodigoBarras({
  identificador,
  fatorVencimento,
  campoLivre,
  valor,
  codigoMoeda,
}) {
  return `${identificador}${codigoMoeda}${fatorVencimento}${valor}${campoLivre}`;
}

function gerarLinhaDigitavel({
  banco,
  campoLivre,
  fatorVencimento,
  valor,
  codigoMoeda,
}) {
  let primeiroCampo = `${banco}${codigoMoeda}${campoLivre.substring(0, 5)}0`;

  let segundoCampo = `${campoLivre.substring(5, 15)}0`;

  let terceiroCampo = `${campoLivre.substring(15, 25)}00`;

  const quintoCampo = fatorVencimento.toString();

  return `${primeiroCampo}${segundoCampo}${terceiroCampo}${quintoCampo}${valor}`;
}
