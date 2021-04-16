import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { clienteReducer } from "./services/cliente/cliente.redux";
import { contaReducer } from "./services/conta/conta.redux.js";
import { registrarDepositoReducer } from "./services/registrar-deposito/registrar-deposito";
import { registrarPagamentoReducer } from "./services/registrar-pagamento/registrar-pagamento";
import { registrarResgateReducer } from "./services/registrar-resgate/registrar-resgate";
import { transacaoReducer } from "./services/transacao/transacao";

const initialState = {};
const reducer = combineReducers({
  contaUsuario: contaReducer,
  deposito: registrarDepositoReducer,
  resgate: registrarResgateReducer,
  transacao: transacaoReducer,
  pagamento: registrarPagamentoReducer,
  cliente: clienteReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk)) //Todo: aprender sobre o compose
);

export default store;
