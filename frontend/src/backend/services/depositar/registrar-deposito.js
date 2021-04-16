const express = require("express");
const {
  services: { operacoes },
} = require("../../../../../backend/src/services");

const router = express.Router();

router.post("/api/depositar", async (req, res) => {
  const { contaId, valor } = req.body;

  const {
    transacaoDeposito,
    dadosTransferencia,
  } = await operacoes.registrarDeposito(
    contaId,
    Number(valor.split(".").join(""))
  );

  res.send([{ transacaoDeposito, dadosTransferencia }]);
});

module.exports = router;
