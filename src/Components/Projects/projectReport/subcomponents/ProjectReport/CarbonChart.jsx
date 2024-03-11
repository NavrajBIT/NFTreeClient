import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import "./Charts.css"



const CarbonChart = () => {
  const [projectReportData, setProjectReportData] = useState({})
  const API_URL = import.meta.env.VITE_BACKEND_URL;
  const location = useLocation();
  const path = location.pathname
  const paths = path.split("/")
  const projectId = paths[2];
  const qDataCar = projectReportData.co2_sequestration || [];
  const qData_carbon = qDataCar.map(item => item.co2_sequestered)
  const startDate = qDataCar.map(item => item.start_date)
  const endDate = qDataCar.map(item => item.end_date)

  const centerIconContainerStyle = {
    position: "relative",
    minHeight: "300px",
    height: "100%",
  };

  const centerIconStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const fetchReportData = async () => {
    try {
      const response = await fetch(`${API_URL}project/project-report/${projectId}/`)
      const res = await response.json();
      setProjectReportData(res[0]);
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchReportData();
  }, [])

  const data = {
    labels: [''],
    datasets: [
      {
        data: [1],
        backgroundColor: ["#436850", "#99BC85"],
        borderWidth: 0,
      },
    ],
  };

  let i = 0
  const options = {
    // plugins: {
    //   datalabels: {
    //     display: true,
    //     color: "white",
    //     textAlign: "center",
    //     font: {
    //       size: 14,
    //     },
    //     formatter: (value, context) => {
    //       const originalValue = qData_carbon[context.dataIndex];
    //       const label = data.labels[context.dataIndex];
    //       return `${originalValue}`;
    //     },
    //   },
    // },
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    events: [],
    cutoutPercentage: 70,
    // rotation: -Math.PI * 28.65 //first part to be in left side
    // rotation: -Math.PI * 57.5
  };


  return (
    <div style={centerIconContainerStyle}>
      <Doughnut data={data} plugins={[ChartDataLabels]} options={options} />
      <h4 className="centerText" style={centerIconStyle}>{qData_carbon[0]} kg/ha</h4>
      {/* <p className="dates-carbon">{startDate[0]} To {endDate[0]}</p> */}
    </div>
  );
};

export default CarbonChart;
