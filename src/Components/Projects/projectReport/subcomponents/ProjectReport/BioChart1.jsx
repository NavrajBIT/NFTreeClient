import React from "react";
import { Pie } from 'react-chartjs-2';
import "./Charts.css"
import {Chart, ArcElement, Tooltip} from 'chart.js'
Chart.register(ArcElement, Tooltip);

const BioChart1 = () => {

    const data = {
        labels: ['mango', 'banana', 'apple'],
        datasets: [
          {
            data: [30, 40, 30], // Values for each segment
            backgroundColor: ['#50623A', '#789461', '#BFD8AF'], // Colors for each segment
            borderWidth:0,
          },
        ],
      };

      const options = {
        plugins:{
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
    <Pie data={data} options={options} width={200} height={200}/>
  </div>
  );
};

export default BioChart1;



