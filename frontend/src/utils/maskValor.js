module.exports = function maskValor(valor) {
  let valorQuebrado = valor.toString().split("");

  let centavos;

  let valorMascara;

  const tamanho = valor.toString().length;
  if (tamanho > 2) {
    centavos = `${valorQuebrado[tamanho - 2]}${valorQuebrado[tamanho - 1]}`;

    valorMascara = `${valorQuebrado[tamanho - 3]}`;

    let contador = 1;

    for (let i = tamanho - 4; i >= 0; i--) {
      if (contador % 3 === 0 && contador != 0) {
        valorMascara = `.${valorMascara}`;
      }
      valorMascara = `${valorQuebrado[i]}${valorMascara}`;
      contador++;
    }
  } else if (tamanho < 2) {
    valorMascara = `0`;
    centavos = `0${valorQuebrado[tamanho - 1]}`;
  } else {
    valorMascara = `0`;
    centavos = `${valorQuebrado[tamanho - 2]}${valorQuebrado[tamanho - 1]}`;
  }

  return `${valorMascara},${centavos}`;
};
