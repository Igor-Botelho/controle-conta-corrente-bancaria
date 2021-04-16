const express = require("express");
const {
  services: { transacao },
} = require("../../../../../backend/src/services");

const router = express.Router();

router.get("/api/transacao/:id", async (req, res) => {
  const { id: contaId } = req.params;

  const transacoes = await transacao.consultar({ contaId });

  res.send(transacoes);
});

module.exports = router;
