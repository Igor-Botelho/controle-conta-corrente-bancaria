import { reducerFactory } from "../../backend/api/reducer-factory";
import requestFactory from "../../backend/api/request-factory";

const context = "resgate";

const urlLoadOne = "/api/resgate";

export const registrarResgate = (contaId, valor) =>
  requestFactory("post", urlLoadOne, { contaId, valor }, context);

export const registrarResgateReducer = reducerFactory(context);
