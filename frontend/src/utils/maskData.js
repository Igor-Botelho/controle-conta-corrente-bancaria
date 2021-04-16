module.exports = function maskData(dataHora) {
  const [data, horario] = dataHora.split("T");
  const [hora, minuto] = horario.split(":");
  const [ano, mes, dia] = data.split("-");

  return `${dia}/${mes}/${ano}  ${hora}:${minuto}`;
};
