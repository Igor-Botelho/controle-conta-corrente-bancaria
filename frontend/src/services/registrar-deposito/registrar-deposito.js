import { reducerFactory } from "../../backend/api/reducer-factory";
import requestFactory from "../../backend/api/request-factory";

const context = "deposito";

const urlLoadOne = "/api/depositar";

export const registrarDeposito = (contaId, valor) =>
  requestFactory("post", urlLoadOne, { contaId, valor }, context);

export const registrarDepositoReducer = reducerFactory(context);
