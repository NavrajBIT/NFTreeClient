import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

export default function MissionCard(props) {
  const splitDesc = props.desc.split(",");
  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        maxWidth: "var(--max-width-card)",
        textAlign: "center",
        padding: "var(--padding-main)",
        boxShadow: "1px 0.2px 12px var(--green-30)",
        borderRadius: "var(--border-radius-light)",
      }}
      className="aboutCard"
      data-aos="zoom-in"
    >
      <CardContent className="cardContent">
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontSize: "22px", fontWeight: "medium", mb: 3 }}
          className="aboutCardTitle"
        >
          {props.title}
        </Typography>
        <ul>
          {splitDesc.map((item, index) => (
            <li key={"about-card-" + index} style={{ textAlign: "start" }}>
              {item.trim()}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
