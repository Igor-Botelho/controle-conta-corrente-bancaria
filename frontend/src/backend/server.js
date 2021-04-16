const express = require("express");
var bodyParser = require("body-parser");
const cron = require("node-cron");
const calcularRendimentoDiario = require("../../../backend/src/services/rotinas/calcular-rendimento-diario-conta");

const mongoServer = require("../../../backend/src/db/server");

const app = express();

const register = require("./services");
mongoServer();
app.use(bodyParser.json());
register(app);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);

  cron.schedule("*/30 * * * *", async function () {
    console.log(
      "=========== Executando rotina de calculo de rendimentos diarios conta ============="
    );

    await calcularRendimentoDiario(0.005, new Date());
  });
});
