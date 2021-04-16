const express = require("express");
const {
  services: { conta },
} = require("../../../../../backend/src/services");

const router = express.Router();

router.get("/api/conta", async (req, res) => {
  const [contaUsuario] = await conta.consultar();

  res.send(contaUsuario);
});

module.exports = router;
