const express = require("express");
const {
  services: { cliente },
} = require("../../../../../backend/src/services");

const router = express.Router();

router.get("/api/cliente", async (req, res) => {
  const [clienteCadastrado] = await cliente.consultar();

  res.send(clienteCadastrado);
});

module.exports = router;
