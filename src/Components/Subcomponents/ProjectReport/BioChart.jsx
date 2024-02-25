"use client";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const BioChart = () => {
  const [data, setData] = useState({
    options: {
      labels: ["mango", "orange", "banana"],
    },
    series: [30, 40, 45],
  });

  return (
    <div>
      <Chart
        options={data.options}
        type="pie"
        series={data.series}
        height="300px"
        width="300px"
      />
    </div>
  );
};

export default BioChart;
