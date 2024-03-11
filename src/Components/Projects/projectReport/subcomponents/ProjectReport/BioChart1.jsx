import React, { useState, useEffect } from "react";
import { Pie } from 'react-chartjs-2';
import "./Charts.css"
import { Chart, ArcElement, Tooltip } from 'chart.js'
import { useLocation } from "react-router-dom";
Chart.register(ArcElement, Tooltip);

const BioChart1 = () => {
  const API_URL = import.meta.env.VITE_BACKEND_URL;
  const [projectReportData, setProjectReportData] = useState({}); // Initialize with an empty object
  const species = projectReportData.species || []; // Use empty array if species is undefined
  const speciesType = species.map(item => item.plant);
  const speciesData = species.map(item => item.percentage);
  const location = useLocation();
  const path = location.pathname
  const paths = path.split("/")
  const projectId = paths[2];

  const fetchReportData = async () => {
    try {
      const response = await fetch(`${API_URL}project/project-report/${projectId}/`);
      const res = await response.json();
      setProjectReportData(res[0]);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchReportData();
  }, []);

  const totalPercentage = speciesData.reduce((total, value) => total + value, 0);
  const remainingPercentage = 100 - totalPercentage;
  const speciesColors = ['#50623A', '#789461', '#BFD8AF'];
  const backgroundColors = speciesColors.slice(0, speciesData.length).concat('white');
  const data = {
    labels: speciesType,
    datasets: [
      {
        data: [...speciesData, remainingPercentage],
        backgroundColor: backgroundColors, // White color for remaining percentage
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        callbacks: {
          label: function (tooltipItem, data) {
            const dataset = data.datasets[tooltipItem.datasetIndex];
            const value = dataset.data[tooltipItem.index];
            const label = data.labels[tooltipItem.index];
            return `${label}: ${value}%`;
          },
        },
      },
    }
  };

  return (
    <div className="biochart">
      <Pie data={data} options={options} width={200} height={200} />
    </div>
  );
};

export default BioChart1;
