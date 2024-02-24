"use client";
import { Doughnut } from "react-chartjs-2";
// import Chart from "chart.js/auto";

const CarbonChart = () => {
  const data = {
    labels: [],
    datasets: [
      {
        data: [15, 15, 15, 15],
        backgroundColor: ["#436850", "#789461", "#99BC85", "#BFD8AF"],
      },
    ],
  };

  const options = {
    cutout: "50%", // Adjust the cutout percentage as needed
    plugins: {
      datalabels: {
        display: false,
      },
    },
    elements: {
      center: {
        text: "Center Text",
        color: "#36A2EB", // Adjust text color
        fontStyle: "Arial", // Adjust font style
        sidePadding: 20, // Adjust side padding
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default CarbonChart;
