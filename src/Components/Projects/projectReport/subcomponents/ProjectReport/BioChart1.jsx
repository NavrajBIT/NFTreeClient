import React, { useState, useEffect } from "react";
import { Pie } from 'react-chartjs-2';
import "./Charts.css"
import { Chart, ArcElement, Tooltip } from 'chart.js'
import { useLocation } from "react-router-dom";
import ChartDataLabels from 'chartjs-plugin-datalabels';
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
  // const remainingPercentage = 100 - totalPercentage;
  const speciesColors = ['#50623A', '#95B984', '#AED39C', '#BCE0AA', '#C7EBB6', '#D0EDC2', '#DDF1D3'];
  const backgroundColors = speciesColors.slice(0, speciesData.length).concat('white');
  const data = {
    labels: speciesType,
    datasets: [
      {
        data: [...speciesData],
        backgroundColor: backgroundColors, // White color for remaining percentage
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      datalabels: {
        color: '#000',
        fontWeight: 16,
        formatter: (value, context) => {
          return  value + '%';
        }
      }
    }
  };

 

  return (
    <div className="biochart">
      <Pie data={data} options={options} plugins={[ChartDataLabels]}  width={200} height={200} />
    </div>
  );
};

export default BioChart1;
