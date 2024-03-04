"use client";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const BioChart = () => {
  const plantData = [{ plant: "Mango" }];
  const data = [40, 30, 30];
  const colors = ["#bfd8af", "#50623a", "#789461"];
  const total = data.reduce((acc, value) => acc + value, 0);
  let startAngle = 125;

  return (
    <div style={{ position: "relative" }}>
      <svg width="250" height="250" viewBox="-1 -1 2 2">
        {data.map((value, index) => {
          const angle = (value / total) * 360;
          const endAngle = startAngle + angle;
          const largeArcFlag = angle > 180 ? 1 : 0;
          const x1 = Math.cos((startAngle * Math.PI) / 180);
          const y1 = Math.sin((startAngle * Math.PI) / 180);
          const x2 = Math.cos((endAngle * Math.PI) / 180);
          const y2 = Math.sin((endAngle * Math.PI) / 180);
          const pathData = [
            `M ${x1} ${y1}`,
            `A 1 1 0 ${largeArcFlag} 1 ${x2} ${y2}`,
            "L 0 0",
          ].join(" ");

          startAngle += angle;

          return (
            <path
              key={index}
              d={pathData}
              fill={colors[index % colors.length]}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default BioChart;

const LabelDisplay = () => {
  return <div>mango</div>;
};
