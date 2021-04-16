import { reducerFactory } from "../../backend/api/reducer-factory";
import requestFactory from "../../backend/api/request-factory";

const context = "cliente";

const urlLoadOne = "/api/cliente";

export const loadcliente = (options) =>
  requestFactory("get", urlLoadOne, options, context);

export const clienteReducer = reducerFactory(context);
