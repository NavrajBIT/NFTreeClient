import React, { useState } from "react";
import "./Charts.css"

const BioChart = () => {
  const plantData = [{ plant: "Mango" , per: "40%", d:`12"d`},{ plant: "Pitch Pine" , per: "40%", d:`11"d`}, { plant: "Coconut" , per: "40%", d:`10"d`}];
  const data = [40, 30, 30];
  const colors = ["#bfd8af", "#50623a", "#789461"];
  const total = data.reduce((acc, value) => acc + value, 0);
  let startAngle = 125;

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div style={{ position: "relative" }}>
      <svg width="200" height="250" viewBox="-1 -1 2 2">
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
            <g key={index}>
              <path
                d={pathData}
                fill={colors[index % colors.length]}
                onMouseOver={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
              {hoveredIndex === index && (
                <text
                  x={(x1 + x2) / 2}
                  y={(y1 + y2) / 2}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="0.1"
                  className="labels"
                >
                  {plantData[index].plant}
                  {plantData[index].per}
                  {plantData[index].d}
                </text>
              )}
            </g>
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
