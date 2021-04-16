const express = require("express");
const {
  services: { operacoes },
} = require("../../../../../backend/src/services");

const router = express.Router();

router.post("/api/pagamento", async (req, res) => {
  const { contaId, valor } = req.body;

  const transacaoPagamento = await operacoes.registrarPagamento(contaId, valor);

  if (transacaoPagamento.error) {
    res.send([{ error: transacaoPagamento.error }]);
  } else {
    res.send([transacaoPagamento.transacao]);
  }
});

module.exports = router;
