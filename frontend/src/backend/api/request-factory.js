import Axios from "axios";

async function requestFactory(requestType, url, dados, contexto) {
  //Criar tratamento de erros para as requisições
  switch (requestType) {
    case "get":
      // eslint-disable-next-line no-case-declarations
      const { status, data } = await Axios.get(url, { params: { dados } });

      return {
        type: "SUCCESS",
        context: contexto,
        payload: data,
        status,
      };

    case "post":
      // eslint-disable-next-line no-case-declarations
      const { status: status1, data: data1 } = await Axios.post(url, {
        valor: dados.valor,
        contaId: dados.contaId,
      });

      return {
        type: "SUCCESS",
        context: contexto,
        payload: data1,
        status: status1,
      };
    default:
      return "Tipo de requisição não suportada";
  }
}

export default requestFactory;
