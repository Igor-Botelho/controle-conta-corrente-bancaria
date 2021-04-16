import PropTypes from "prop-types";
import React from "react";
import { Chart } from "react-google-charts";

function GraficoRendimentos({ saldo, rendimento }) {
  console.log({ rendimento });

  return (
    <Chart
      width={"22rem"}
      height={"22rem"}
      chartType="PieChart"
      loader={<div>Grafico</div>}
      data={[
        ["Saldo", "Hours per Day"],
        ["Saldo", saldo / 100],
        ["Rendimentos", rendimento / 100],
      ]}
      options={{
        title: "Rendimentos",
        pieHole: 0.4,
      }}
      rootProps={{ "data-testid": "3" }}
    />
  );
}

GraficoRendimentos.propTypes = {
  saldo: PropTypes.number,
  rendimento: PropTypes.number,
};

export default GraficoRendimentos;
