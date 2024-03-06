import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const CO2 = () => {
  const [data, setData] = useState({
    options: {
      labels: ["mango", "orange", "banana","melon"],

      plotOptions: {
        pie: {
          donut: {
            size: "50%",
            labels: {
              show: true,
              total: {
                  show: true,
                  label: "C02 removel",
                  value:false,
              },
            },
          },
        },
      },
      colors: ["#436850", "#789461","#99BC85","#BFD8AF"],
    },
    series: [40,40,40,40],
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

export default CO2;
