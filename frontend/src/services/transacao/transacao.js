import { reducerFactory } from "../../backend/api/reducer-factory";
import requestFactory from "../../backend/api/request-factory";

const context = "transacao";

const urlLoadOne = (contaId) => `/api/transacao/${contaId}`;

export const consultarTransacoes = (contaId) =>
  requestFactory("get", urlLoadOne(contaId), {}, context);

export const transacaoReducer = reducerFactory(context);
