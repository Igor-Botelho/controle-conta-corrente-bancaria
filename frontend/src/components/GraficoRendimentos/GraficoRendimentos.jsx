import React from "react";
import { Chart } from "react-google-charts";
import PropTypes from "prop-types";

function GraficoRendimentos({saldo, rendimento}) {
  return (
    <Chart
      width={"22rem"}
      height={"22rem"}
      chartType="PieChart"
      loader={<div>Grafico</div>}
      data={[
        ["Saldo", "Hours per Day"],
        ["Saldo", saldo],
        ["Rendimentos", rendimento],
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
