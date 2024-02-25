import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const CarbonChart = () => {
  const [data, setData] = useState({
    options: {
      labels: ["mango", "orange", "banana"],

      plotOptions: {
        pie: {
          donut: {
            size: "50%",
            labels: {
              show: true,
              total: {
                show: true,
                label: "C02 removel",
              },
            },
          },
        },
      },
    },
    series: [30, 40, 45],
    chartOptions: ["Apple", "Mango", "Orange", "Watermelon"],
  });

  return (
    <div style={{ height: "100%", minHeight: "300px" }}>
      <Chart
        options={data.options}
        type="donut"
        series={data.series}
        height="100%"
        width="100%"
      />
    </div>
  );
};

export default CarbonChart;
