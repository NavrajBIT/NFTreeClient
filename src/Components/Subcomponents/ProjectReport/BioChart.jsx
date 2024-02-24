"use client";
import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const BioChart = () => {
  // const { responseData } = useUser();

  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        data: [40, 40, 40],
        backgroundColor: ["#50623A", "#789461", "#BFD8AF"],
        // hoverBackgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  });

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      responsive: true,
      maintainAspectRatio: false,
    },
  };

  const centerText = {
    display: true,
    text: "280",
  };

  return (
    <div>
      <Pie data={data} options={options} />

      <div>
        <ul>
          {data.labels.map((label, index) => (
            <li key={index}>{label}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BioChart;
