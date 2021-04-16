import { reducerFactory } from "../../backend/api/reducer-factory";
import requestFactory from "../../backend/api/request-factory";

const context = "pagamento";

const urlLoadOne = "/api/pagamento";

export const registrarPagamento = (contaId, valor) =>
  requestFactory("post", urlLoadOne, { contaId, valor }, context);

export const registrarPagamentoReducer = reducerFactory(context);
