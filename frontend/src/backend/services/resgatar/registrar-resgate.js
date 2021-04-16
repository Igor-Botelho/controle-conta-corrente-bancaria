const express = require("express");
const {
  services: { operacoes },
} = require("../../../../../backend/src/services");

const router = express.Router();

router.post("/api/resgate", async (req, res) => {
  const { contaId, valor } = req.body;
  console.log({ contaId, valor });

  const transacaoResgate = await operacoes.registrarResgate(contaId, valor);

  if (transacaoResgate.error) {
    res.send([{ error: transacaoResgate.error }]);
  } else {
    res.send([transacaoResgate.transacao]);
  }
});

module.exports = router;
