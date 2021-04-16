module.exports = {
  services: {
    calcularRendimentoDiario: require("./rotinas/calcular-rendimento-diario-conta"),
    cliente: require("./cliente"),
    conta: require("./conta"),
    operacoes: require("./opercaoes"),
    transacao: require("./transacao"),
    gerarLinhaDigitavelBoleto: require("./linha-digitavel-boleto"),
  },
};
