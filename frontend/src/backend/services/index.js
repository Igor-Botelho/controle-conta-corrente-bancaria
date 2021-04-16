module.exports = async function (app) {
  app.use(require("./conta/recuperar-conta"));
  app.use(require("./depositar/registrar-deposito"));
  app.use(require("./resgatar/registrar-resgate"));
  app.use(require("./transacoes/consultar-transacoes"));
  app.use(require("./pagamento/registrar-pagamento"));
  app.use(require("./cliente/recuperar-cliente"));
};
