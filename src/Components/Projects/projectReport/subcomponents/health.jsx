import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];
const Health = ({ script }) => {
  const data = [
    {
      name: "nitrogen",
      value: script?.report?.soil_nitrogen
        ? parseFloat(script?.report?.soil_nitrogen)
        : 1,
    },
    {
      name: "phosphorus",
      value: script?.report?.soil_phosphorus
        ? parseFloat(script?.report?.soil_phosphorus)
        : 1,
    },
    {
      name: "potassium",
      value: script?.report?.soil_potassium
        ? parseFloat(script?.report?.soil_potassium)
        : 1,
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "var(--max-width-form)",
        background: "white",
        borderRadius: "var(--border-radius)",
        padding: "var(--padding-main)",
      }}
    >
      <div
        style={{
          fontSize: "1.5rem",
          fontWeight: "700",
          color: "var(--green-30)",
        }}
      >
        Project Health
      </div>

      <Detail label={"Leaf Health"} value={script?.report?.leaf_health} />
      <Detail label={"Root Health"} value={script?.report?.root_health} />
      <div
        style={{
          display: "flex",
          gap: "var(--padding-light)",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div>
          <PieChart width={250} height={250}>
            <Pie
              data={data}
              cx={120}
              cy={100}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              // label
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--padding-light)",
          }}
        >
          {data.map((datapoint, index) => (
            <Content
              key={"index-" + index}
              data={datapoint}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Health;

const Detail = ({ label, value }) => {
  return (
    <div style={{ display: "flex", gap: "var(--padding-light)" }}>
      <div style={{ width: "10rem" }}>{label}</div> : <div>{value}</div>
    </div>
  );
};

const Content = ({ data, fill }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--padding-light)",
      }}
    >
      <div style={{ width: "1rem", height: "1rem", background: fill }} />
      {data.name} = {data.value}
    </div>
  );
};
