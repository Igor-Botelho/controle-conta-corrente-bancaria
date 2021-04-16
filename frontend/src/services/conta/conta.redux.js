import { reducerFactory } from "../../backend/api/reducer-factory";
import requestFactory from "../../backend/api/request-factory";

const context = "contaUsuario";

const urlLoadOne = "/api/conta";

export const loadconta = (options) =>
  requestFactory("get", urlLoadOne, options, context);

export const contaReducer = reducerFactory(context);
